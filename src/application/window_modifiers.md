# Modifying Window Properties

The properties of a window can be changed using [window modifiers](https://docs.vizia.dev/vizia_winit/window_modifiers/trait.WindowModifiers.html). For the main window, these modifiers are called on the application prior to calling `run()`.


For example, the `title()` and `inner_size()` window modifiers can be used to set the title and size of the window respectively.

```rust
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx|{

    })
    .title("My Awesome Application")
    .inner_size((400, 200))
    .run()
}
```

![A window with the title 'My Awesome Application'](./img/window_modifiers.png)
