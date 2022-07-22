
## Sending Events
Events are usually emitted in response to some action on a view. For example, a button takes an action and a view to display. When the button is pressed the action is triggered, emitting an event up the tree.

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
    fn event(&mut self, cx: &mut Context, event: &mut Event) {
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

fn main() {
    Application::new(|cx| {
        Person { 
            name: String::from("John Doe"), 
            email: String::from("john.doe@company.com") 
        }.build(cx);

        VStack::new(cx, |cx| {
            
            Label::new(cx, Person::name);
            Label::new(cx, Person::email);
            
            Button::new(
                cx,
                |cx| cx.emit(PersonEvent::UpdateName(String::from("Rob Doe"))),
                |cx| Label::new(cx, "Update"),
            );
        })
        .child_space(Stretch(1.0));
    })
    .inner_size((400, 100))
    .run();
}
```

Running the app and then clicking on the button emits the event, which propagates up to the model and mutates the `name` field, which then updates the label which is bound to this field.

<img src="../img/update.gif" alt="" width="400"/>