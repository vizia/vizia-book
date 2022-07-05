# Views
Views are used to visually present data and to act as controls to mutate data when interacted with.

The `Label` view is used to display a text string:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        Label::new(cx, "Hello World");
    })
    .run();
}
```
![A window with a label showing 'Hello World' in black text.](../img/label.png)

The first argument to the constructor is a mutable reference to `Context`, shortened to `cx`. This allows the view to build itself into the context.

The second argument to the constructor is a text string to display.


