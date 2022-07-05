
# Styling Overview
Styling refers to modifying the visual properties of a view, such as its background color, border color, etc. A full list of available style properties can be found in the style reference section of this book.

There are two methods for styling views in Vizia:

1. Inline
2. Shared

## Inline Styling (View Modifiers)
Inline styling refers to applying style modifiers directly on views in Rust code. 

The following example shows how the background color of a view can be modified by a call to a function directly on the view.
```rust
Element::new(cx).background_color(Color::red());
```

> Inline style properties override any shared styling which targets the same view.

### Property Bindings
As well as values, like `Color` or `Units`, style modifiers can also take a lens as input, which sets up a *property binding*. This allows the style properties of a view to update in response to changes in application data without having to rebuild the entire view. 

For example, if we have an `AppData` model with a `custom_color` field of type `Color`, we can bind this directly to the background color of a view like so:

```rust
Element::new(cx).background_color(AppData::custom_color);
```

## Shared Styling
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

Vizia does not currently support the entire CSS standard. The next sections of the book outlines the supported CSS selectors and properties. 
