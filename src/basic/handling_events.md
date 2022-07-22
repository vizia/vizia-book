# Handling Events

Events are handled by views and models within the `event` method of the `View` or `Model` traits.

```rust
use vizia::prelude::*;

pub enum PersonEvent {
    UpdateName(String),
    UpdateEmail(String),
}

#[derive(Lens)]
pub struct Person {
    pub name: String,
    pub email: String,
}

impl Model for Person {
    fn event(cx: &mut Context, event: &mut Event) {
        event.map(|person_event, meta| match person_event {
            PersonEvent::UpdateName(new_name) => {
                self.name = new_name.clone();
            }

            PersonEvent::UpdateEmail(new_email) => {
                self.email = new_email.clone();
            }
        });
    }
}
```
Calling `map()` on an event attempts to cast the event message to the specified type and calls the provided closure if it succeeds.

> Note that in the above  example the rust compiler is able to infer the message type from the match statement. 

The closure provides the `Message` and an `EventMeta`, which can be used to query the origin and target views of the event, or to consume the event to prevent it propagating further:

```rust
event.map(|person_event, meta| match person_event {
    PersonEvent::UpdateName(new_name) => {
        self.name = new_name.clone();

        // Consume the event to stop it propagating
        meta.consume();
    }
});
```