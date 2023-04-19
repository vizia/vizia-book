# Adding Views

Views are the building bocks of a vizia GUI and are used to visually present [model data](./models.md) and to act as controls which, when interacted with, send events to mutate model data.

We'll learn more about models and events in the following sections.

## Adding a label

We can declare a `Label` view with the following code:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        Label::new(cx, "Hello Vizia");
    })
    .title("Counter")
    .inner_size((400, 200))
    .run();
}
```


The first argument to the `new()` method of the label is a mutable reference to `Context`, shortened to `cx`. This allows the view to build itself into the application. For the second argument we pass it a string to display.

// Image here


