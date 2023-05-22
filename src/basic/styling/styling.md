# Styling

Styling refers to modifying the visual properties of a view, such as its background, border, font, etc. 

Previously it was shown how modifiers can be used to style views inline. However, it is also possible for multiple views to share the same styling through the use of Cascading Style Sheets (CSS).

## CSS Styling
Vizia can use CSS to apply style rules to multiple views simultaneously. A CSS string can be defined within a rust file as a constant, or within an external CSS file.

To add a stylesheet which is already a string in rust code, use the `add_theme()` method on `Context`. For example:

```rust
use vizia::prelude::*;

const STYLE: &str = r#"
    element {
        background-color: red;
    }
"#

fn main() {
    Application(WindowDescription::new(), |cx|{
        
        cx.add_theme(STYLE);
        
        Element::new(cx)
            .size(Pixels(100.0));
    })
}
```

To add a stylesheet which is defined in a separate `.css` file, use `add_stylesheet()` method on `Context` with the file path. For example:

```css
/* style.css */
element {
    background-color: blue;
}
```

```rust
/* main.rs */
use vizia::prelude::*;

fn main() {
    Application(WindowDescription::new(), |cx|{
        
        cx.add_stylesheet("style.css");
        
        Element::new(cx)
            .size(Pixels(100.0));
    })
}
```

External stylesheets can be hot-reloaded using the F5 key while the application is running.