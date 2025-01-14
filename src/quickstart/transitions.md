# Animating Styles with Transitions

Many of the style and layout properties in vizia can be animated. The simplest way to animate style properties is through CSS transitions. 

Transitions are animations for style rule properties which apply when a view matches that rule. Transitions are specified with the `transition` CSS property, and you must specify the property to animate and the duration of the animation. Optionally you can also specify any delay on the animation, as well as the timing function used.

The default styling for some of the built-in views already has some of these transition. For example, if you hover a button you'll see its background color animate to a slightly lighter color.


## Declaring a transition
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

fn main () -> Result<(), ApplicationError> {
    Application::new(|cx|{

        cx.add_stylesheet(STYLE);

        Element::new(cx)
            .class("my_view")
            .size(Pixels(200.0));
    })
    .run()
}

```

Note here that we have not used the `include_style!()` macro within the call to `cx.add_stylesheet` as the stylesheet is defined as a constant within the Rust code.

// GIF here

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

// GIF here