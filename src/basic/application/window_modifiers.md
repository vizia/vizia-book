# Modifyng the Window

When creating an `Application` the properties of the window can be changed using [window modifiers](https://docs.vizia.dev/vizia/window/trait.WindowModifiers.html). These modifiers are methods called on the application prior to calling `run()`.


For example, the `title()` and `inner_size()` window modifiers can be used to set the title and size of the window respectively.

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

    })
    .title("My Awesome Application")
    .inner_size((400, 200))
    .run();
}
```

<img src="../../img/window_title.png" alt="A window with the title 'My Awesome Application'" width="400"/>
