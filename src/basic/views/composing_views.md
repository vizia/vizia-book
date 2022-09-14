# Composing Views

Composition is achieved through container views, which contain other views and may arrange them in a particular way.

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

## The View Tree

Composing views together forms a tree, where each view has a single parent and zero or more children.

```rust
use vizia::prelude::*;

Application::new(|cx|{
    HStack::new(cx, |cx|{
        Label::new(cx, "Hello");
        Label::new(cx, "World");
    });
})
.run();
```

For example, for the code above the view tree can be depicted with the following diagram:

![Diagram of a basic view tree depicting a Window view with a child HStack view with two child Label views.](../../img/basic_tree.svg)

The view tree is iterated by Vizia in order to perform styling, layout, and rendering (amongst other things). Therefore, it can be useful to visualize the view tree when specifying style and layout properties to determine how they will affect ancestor and descendant views.