# Window Modifiers

When creating an `Application` the properties of the root window can be changed using [window modifiers](https://docs.vizia.dev/vizia/window/trait.WindowModifiers.html). These modifiers are methods called on the application prior to calling `run()`.

## Examples

### Window Title Modifier

The `title()` window modifier can be used to set the title of the root window.

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

    })
    .title("My Awesome Application")
    .run();
}
```

<img src="../../img/window_title.png" alt="A window with the title 'My Awesome Application'" width="400"/>

### Window Size Modifier

The `inner_size` window modifier can be used to set the initial size of the root window.

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

    })
    .inner_size((400, 200))
    .run();
}
```

<img src="../../img/inner_size.png" alt="A window with its size set to 400 by 200" width="400"/>
