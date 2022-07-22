# The View Tree

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

![Diagram of a basic view tree depicting a Window view with a child HStack view with two child Label views.](../img/basic_tree.svg)

The view tree is iterated by Vizia in order to perform styling, layout, and rendering (amongst other things). Therefore, it can be useful to visualize the view tree when specifying style and layout properties to determine how they will affect ancestor and descendant views.