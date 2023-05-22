# Lens Map

The `map()` method on a lens can be used to derive data from the target of the lens. This is useful for when the lens target is not the right type for the binding, but a value of the correct type can be derived from it.

For example, let's say we have some string data representing a name in our model, but we only want to display the first letter within a label:

```rust
use vizia::prelude::*;

#[derive(Lens)]
pub struct AppData {
    pub name: String,
}

impl Model for AppData {}

fn main() {
    Application::new(|cx|{

        AppData {
            name: String::from("John Doe"),
        }.build(cx);

        Label::new(cx, AppData::name.map(|name| &name[0]));
    })
    .inner_size((400, 100))
    .run();
}
```

> Note that in this example we're assuming that the string is not empty.

<img src="../img/stylesheet.png" alt="" width="400"/>

Now when the name field of the model changes the label will update to display the new first letter.   