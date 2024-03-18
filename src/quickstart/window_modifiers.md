# Modifying the Window

When creating an `Application` the properties of the window can be changed using [window modifiers](https://docs.vizia.dev/vizia/window/trait.WindowModifiers.html). These modifiers are methods called on the application prior to calling `run()`.


For example, the `title()` and `inner_size()` window modifiers can be used to set the title and size of the window respectively.

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

    })
    .title("Counter")
    .inner_size((400, 150))
    .run();
}
```

<p align="center">
<img src="img/window_modifiers.png" alt="An empty vizia application window with a custom title and inner size"/>
</p>