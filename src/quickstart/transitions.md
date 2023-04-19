# Animating Styles with Transitions

Many of the style and layout properties in vizia can be animated. 

...

Transitions are animations for style rule properties which apply when a view matches that rule. Transitions are specified with the `transition` CSS property, and you must specify the property to animate, the duration of the animation, and any delay on the animation.

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

// GIF here

Note that the transition only occurs when the cursor hovers the element and not when the cursor leaves the element (unless the transition did not complete when the cursor left). This is because the transiiton has been specified on the `:hover` state of the element, and so the background color will transition when going *to* this state.

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

// GIF here