# left

The `left` property determines the space to be applied to the left side of a view and is specified with `Units`.

## Example

We can use the `left` property to position a view along the horizontal axis.

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        Label::new("Left 10px")
            .left(Pixels(10.0));
    })
    .run();
}
```

## Inline
```rust
Element::new(cx).left(Pixels(30.0));
```

## CSS
```css
element {
    left: 30px;
}
```

