# Transitions

Transitions are animations for style rule properties which apply when a view matches that rule. Transitions are specified with the `transition` CSS property, and you must specify the property to animate and the duration of the animation, and optionally any delay on the animation and a timing function.

For example, we can create a transition for the background color of a view when hovered:

```rust
use vizia::prelude::*;

const STYLE: &str = r#"
    .my_view {
        background-color: red;
    }

    .my_view:hover {
        background-color: blue;
        transition: background-color 100ms;
    }
"#;

fn main () {
    Application::new(|cx|{
        Element::new(cx)
            .class("my_view")
            .size(Pixels(200.0));
    })
    .run();
}

```

Note that the transition only occurs when the cursor hovers the element and not when the cursor leaves the element (unless the transition did not complete when the cursor left). This is because the transition has been specified on the `:hover` state of the element, and so the background color will transition when going *to* this state.

To transition back again, we need to specify a transition on the non-hover state as well:

```css
.my_view {
    background-color: red;
    transition: background-color 100ms;
}

.my_view:hover {
    background-color: blue;
    transition: background-color 100ms;
}
```
