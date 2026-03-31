# Events

Events communicate actions through the tree. A common pattern is:

1. A view emits an event in response to user input.
2. A model handles the event.
3. The model updates signals.
4. Bound views react automatically.

## Declaring event messages

An event message can be any type, but enums are typically the clearest choice.

```rust,ignore
pub enum AppEvent {
    UpdateName(String),
}
```

## Emitting events from views

Use `cx.emit(...)` to send an event upward from the current entity.

```rust,ignore
use vizia::prelude::*;

pub struct AppData {
    name: Signal<String>,
}

impl Model for AppData {}

pub enum AppEvent {
    UpdateName(String),
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        let name = Signal::new(String::from("John Doe"));

        AppData { name }.build(cx);

        Label::new(cx, name);

        Button::new(cx, |cx| Label::new(cx, "Rename"))
            .on_press(|cx| cx.emit(AppEvent::UpdateName(String::from("Rob Doe"))));
    })
    .inner_size((400, 100))
    .run()
}
```

## Handling events in models

Models (and views) handle events in `event(&mut self, cx, event)`.

```rust,ignore
use vizia::prelude::*;

pub struct AppData {
    name: Signal<String>,
}

pub enum AppEvent {
    UpdateName(String),
}

impl Model for AppData {
    fn event(&mut self, _cx: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _meta| match app_event {
            AppEvent::UpdateName(new_name) => {
                self.name.set(new_name.clone());
            }
        });
    }
}
```

`event.map(...)` attempts to downcast the event message to the requested type and runs the closure only when it matches.

## Stopping propagation

Call `meta.consume()` to stop an event from continuing further along its propagation path.

```rust,ignore
event.map(|app_event, meta| match app_event {
    AppEvent::UpdateName(new_name) => {
        self.name.set(new_name.clone());
        meta.consume();
    }
});
```
