# Shared Styling
Shared styling uses CSS rules to apply styling to multiple views simultaneously. The CSS string can be defined within a rust file as a constant, or within an external css file.

To add a stylesheet which is already a string in rust code, use `cx.add_theme()` to add the stylesheet to the application. For example:

```rust
const STYLE: &str = r#"
    element {
        background-color: red;
    }
"#

fn main() {
    Application(WindowDescription::new(), |cx|{
        
        cx.add_theme(STYLE);
        
        Element::new(cx);
    })
}
```

To add a stylesheet which is defined in a separate `.css` file, use `cx.add_stylesheet()` with the file path. For example:

```css
/* style.css */
element {
    background-color: red;
}
```

```rust
/* main.rs */
fn main() {
    Application(WindowDescription::new(), |cx|{
        
        cx.add_stylesheet("style.css");
        
        Element::new(cx);
    })
}
```

> Note: External stylesheets can be hot-reloaded using the F5 key while the application is running.

> Note: Vizia does not currently support the entire CSS standard. 
<!-- The next sections of the book outlines the supported CSS selectors and properties.  -->