# Views
Views are used to visually present [model data](./models.md) and to act as controls which, when interacted with, send events to mutate model data. They are the building blocks of a GUI.

For example, the `Label` view is used to display a text string:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        Label::new(cx, "Hello World");
    })
    .inner_size((400, 200))
    .run();
}
```

<img src="../../img/hello_world.png" alt="A window with its size set to 400 by 200 with a label displaying 'Hello World'" width="400"/>

The first argument to the constructor of the label is a mutable reference to `Context`, shortened to `cx`. This allows the view to build itself into the application and is ubiquitous to all views.


