# Async Tasks with Tokio

Use async runtimes like Tokio for network requests, database calls, or other long-running work.
In Vizia, keep all UI state updates on the UI thread and send results back as events.

## Why use a context proxy

Vizia contexts are tied to the UI thread. Background tasks should not mutate signals directly.

Instead:

1. Capture a `ContextProxy` with `cx.get_proxy()`.
2. Run async work on a Tokio runtime.
3. Emit an event from the async task with the result.
4. Handle that event in your model and update signals there.

## Example

```rust,ignore
use vizia::prelude::*;

pub struct AppData {
    status: Signal<String>,
    runtime: tokio::runtime::Runtime,
}

#[derive(Debug)]
pub enum AppEvent {
    StartRequest,
    RequestFinished(Result<String, String>),
}

impl Model for AppData {
    fn event(&mut self, cx: &mut EventContext, event: &mut Event) {
        event.take(|app_event, _| match app_event {
            AppEvent::StartRequest => {
                self.status.set("Loading...".to_string());

                // Capture a proxy so the async task can notify the UI thread.
                let mut proxy = cx.get_proxy();

                self.runtime.spawn(async move {
                    // Replace this with real async work (HTTP, DB, etc.).
                    let result: Result<String, String> = Ok("Finished async work".to_string());

                    let _ = proxy.emit(AppEvent::RequestFinished(result));
                });
            }

            AppEvent::RequestFinished(Ok(message)) => {
                self.status.set(message.clone());
            }

            AppEvent::RequestFinished(Err(error)) => {
                self.status.set(format!("Error: {error}"));
            }
        });
    }
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        let status = Signal::new("Idle".to_string());
        let runtime = tokio::runtime::Runtime::new().expect("failed to create tokio runtime");

        AppData { status, runtime }.build(cx);

        Label::new(cx, status);
        Button::new(cx, |cx| Label::new(cx, "Run Async Task"))
            .on_press(|cx| cx.emit(AppEvent::StartRequest));
    })
    .run()
}
```

## Notes

- Prefer storing a runtime on your model (or use an existing application-level runtime).
- Ignore proxy send errors only if shutdown is acceptable; otherwise log or handle them.
- If you need to target a specific entity, use `proxy.emit_to(target, message)`.
- Keep heavy work out of event handlers so the UI thread remains responsive.
