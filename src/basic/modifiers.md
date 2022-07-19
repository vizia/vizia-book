# View Modifiers

View modifiers allow for the properties of a view to be modified in a declarative way.

We can set the font color of the `Label` like so:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        Label::new(cx, "Hello World")
            .color(Color::red());
    })
    .run();
}
```

<img src="../img/label_color.png" alt="" width="400"/>

Modifiers for [style]() and [layout]() properties are available for all views. However, some views have modifiers specific to themselves.