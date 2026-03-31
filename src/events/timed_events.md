# Timed Events

Events can be scheduled to emit at a specific point in time, allowing you to implement delays, timeouts, and delayed actions without needing separate timers.

## Scheduling events

Use `cx.schedule_emit()` to send an event at a later time:

```rust,ignore
use vizia::prelude::*;
use web_time::{Instant, Duration};

pub enum AppEvent {
    Delayed,
}

let delay = Duration::from_secs(2);
let when = Instant::now() + delay;
cx.schedule_emit(AppEvent::Delayed, when);
```

The method returns a `TimedEventHandle` that can be used to cancel the scheduled event before it sends.

## Targeting scheduled events

Like regular events, you can schedule events to a specific target using `cx.schedule_emit_to()`:

```rust,ignore
let target: Entity = some_entity;
let when = Instant::now() + Duration::from_secs(1);
cx.schedule_emit_to(target, AppEvent::Delayed, when);
```

## Custom propagation for scheduled events

For precise control over how a scheduled event propagates, use `cx.schedule_emit_custom()`:

```rust,ignore
let custom = Event::new(AppEvent::Delayed)
    .target(target)
    .origin(cx.current)
    .propagate(Propagation::Subtree);

let when = Instant::now() + Duration::from_secs(1);
cx.schedule_emit_custom(custom, when);
```

## Canceling scheduled events

Keep the returned `TimedEventHandle` to cancel a scheduled event before it emits:

```rust,ignore
let handle = cx.schedule_emit(AppEvent::Delayed, Instant::now() + Duration::from_secs(5));

// ... later, if you want to prevent the event from sending:
cx.cancel_scheduled(handle);
```

## Practical example: Delayed notification

Here's a complete example showing a button that triggers a delayed event:

```rust,ignore
use vizia::prelude::*;
use web_time::{Instant, Duration};

pub struct AppData {
    message: Signal<String>,
}

pub enum AppEvent {
    ShowMessage(String),
}

impl Model for AppData {
    fn event(&mut self, _cx: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::ShowMessage(msg) => {
                self.message.set(msg.clone());
            }
        });
    }
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        let message = Signal::new(String::new());
        AppData { message }.build(cx);

        VStack::new(cx, |cx| {
            Label::new(cx, message);
            
            Button::new(cx, |cx| Label::new(cx, "Notify in 2s"))
                .on_press(|cx| {
                    let when = Instant::now() + Duration::from_secs(2);
                    cx.schedule_emit(
                        AppEvent::ShowMessage(String::from("Notification!")),
                        when
                    );
                });
        });
    })
    .inner_size((400, 100))
    .run()
}
```

When the button is pressed, the `ShowMessage` event is scheduled to emit after 2 seconds, updating the label with the notification message.
