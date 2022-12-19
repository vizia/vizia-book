# Property Binding

A property binding updates just the style and layout properties of view in response to model data changes, instead of rebuilding the entire view. Most view modifiers accept a lens as input, which sets up a binding to the target data.

For example, we can bind the background color of a view, in this case a label, to a color property in the model data using a lens:

```rust
use vizia::prelude::*;

pub struct AppData {
    color: Color,
}

impl Model for AppData {}

fn main() {
    Application::new(|cx|{
        Label::new(cx, "Colorful")
            .background_color(AppData::color);
    }).run();
}
```

Most modifiers accept a lens to a type which can be converted to the expected type. For example, the `text` modifier accepts a lens to any value which implements `ToString`.