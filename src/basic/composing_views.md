# Composing Views

Composition is achieved through container views, which contain other views and can arrange them in a particular way.

For example, the `VStack` container view will arrange its contents into a vertical column:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        VStack::new(cx, |cx|{
            
            Label::new(cx, "Hello");
            
            Label::new(cx, "World");

        });
    })
    .inner_size((400, 100))
    .run();
}
```
<img src="../img/vstack.png" alt="" width="400"/>

While a `HStack` container will arrange its contents into a horizontal row:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        HStack::new(cx, |cx|{

            Label::new(cx, "Hello");
            
            Label::new(cx, "World");
            
        });
    })
    .inner_size((400, 100))
    .run();
}
```

<img src="../img/hstack.png" alt="" width="400"/>

At least one argument to a container view is a closure with a `cx` parameter, allowing for sub-views to be built into the container.
