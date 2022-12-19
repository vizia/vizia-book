# Styling

Styling refers to modifying the visual properties of a view, such as its background, border, font, etc. A full list of available style properties can be found on the [style properties](./style_properties.md) page.

There are two methods for styling views in Vizia:

1. [Inline](./inline.md) - which applies style properties directly to a single view.
2. [Shared](./shared.md) - which uses CSS rules to apply styling to any views which match the rules.

## Inline Styling (Style Modifiers)
Inline styling refers to applying style modifiers directly on views in Rust code. 

The following example shows how the background color of a view can be modified by a call to a function directly on the view.
```rust
use vizia::prelude::*;

fn main() {
    Application::new(cx, |cx|{
        Label::new(cx, "Hello World")
            .background_color(Color::red());
    })
    .inner_size((400, 100))
    .run();
}
Element::new(cx).background_color(Color::red());
```

> Note: Inline style properties override any shared styling which targets the same view.

### Property Binding

As initially shown in the [modifiers section](../views/modifiers.md), and detailed in the [property binding section](../binding/property_binding.md), most style modifiers accept a lens as input, which sets up a binding to the corresponding model data.

When the model data changes (usually in response to an event), the property bound to the data will update accordingly.

## Shared Styling
Shared styling uses Cascading Style Sheets (CSS) to apply style rules to multiple views simultaneously. A CSS string can be defined within a rust file as a constant, or within an external CSS file.

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

> Note: External stylesheets can be hot-reloaded using the F5 key while the application is running.

> Note: Vizia does not currently support the entire CSS standard. 
