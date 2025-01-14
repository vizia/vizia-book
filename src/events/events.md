# Events

Events are used to communicate actions to update model or view data. 

Events propagate through the tree from origin to target, typically from the view which emits the event, up through the ancestors of the view, to the main window and through any models on the way.


## Declaring Events

An event contains a message which can be any type, but is typically an enum:

```rust
use vizia::prelude::*;

pub struct AppData {
    name: String,
}

pub enum PersonEvent {
    UpdateName(String),
}
```

## Emitting Events
Events are usually emitted in response to some action on a view. For example, a button takes an action and a view to display. When the button is pressed the action is triggered, emitting an event up the tree.
```rust
use vizia::prelude::*;

pub enum AppEvent {
    UpdateName(String),
}

#[derive(Lens)]
pub struct AppData {
    pub name: String,
}

impl Model for Person {}

fn main() {
    Application::new(|cx| {
        AppData { 
            name: String::from("John Doe"),
        }.build(cx);

        Label::new(cx, Person::name);
        
        Button::new(
            cx,
            |cx| cx.emit(AppEvent::UpdateName(String::from("Rob Doe"))),
            |cx| Label::new(cx, "Update"),
        );
    })
    .inner_size((400, 100))
    .run();
}
```

## Handling Events
Events are handled by views and models with the `event()` method of the `View` or `Model` traits.

```rust
use vizia::prelude::*;

pub enum AppEvent {
    UpdateName(String),
}

#[derive(Lens)]
pub struct AppData {
    pub name: String,
}

impl Model for Person {
    fn event(cx: &mut Context, event: &mut Event) {
        event.map(|app_event, meta| match app_event {
            AppEvent::UpdateName(new_name) => {
                self.name = new_name.clone();
            }
        });
    }
}
```
Calling `map()` on an event attempts to cast the event message to the specified type and calls the provided closure if it succeeds.

> Note that in the above  example the rust compiler is able to infer the message type from the match statement. 

The closure provides the message type and an `EventMeta`, which can be used to query the origin and target views of the event, or to consume the event to prevent it propagating further, for example:

```rust
event.map(|person_event, meta| match person_event {
    AppEvent::UpdateName(new_name) => {
        self.name = new_name.clone();

        // Consume the event to stop it propagating
        meta.consume();
    }
});
```

## Event Propagation
Events propagate through the view tree according to their specified `Propagation`. Using `cx.emit()` will produce an event which propagates **up** the tree from ancestor to ancestor.

To send an event directly to another view, there is `cx.emit_to(message, target)`, which takes a message as well as a target id.


<!-- Events propagate through the view tree, and how an event propagates is specific to the event type. However, usually a platform event will propagate down the tree to the target view or model, and a user event will propagate up the tree to the target view or model. -->

