# Models

Application data in Vizia is stored in models. Views can then bind to the data in these models in order to react to changes in the data.

## Declaring Models

A model definition can be any type, typically a struct, which implements the `Model` trait:

```rust
pub struct Person {
    pub name: String,
    pub email: String,
}

impl Model for Person {}
```

## Building Models

A model definition can be built into the view tree with the `build()` method:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        Person {
            name: String::from("John Doe"),
            email: String::from("john.doe@company.com"),
        }.build(cx);

        HStack::new(cx, |cx|{
            Label::new(cx, "Hello");
            Label::new(cx, "World");
        });
    });
}

```
This builds the model data into the tree, in this case at the root `Window`.

Internally, Vizia enforces a separation between views and models by storing them separately. However, for processes like event propagation, models can be thought of as existing within the tree, with an associated parent view.

The model-view tree for the above code can be depicted with the following diagram:

![Diagram of a basic model-view tree depicting a Window view, with an associated AppData model, and with a child HStack view with two child Label views.](../img/basic_tree_model.svg)

If the `AppData` had been built within the contents of the `HStack`, then the model would be associated with the `HStack` rather than the `Window`.