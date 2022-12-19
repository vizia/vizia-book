# Custom Fonts

A custom font can be added to vizia using the `add_font_mem()` method on the context, which should be called at the start of the application closure before building any views. 

This function takes a string name and a byte array of a font that has already been loaded into memory, for example with the `include_bytes!` macro.

The name is used to reference the font when using the `font()` modifier or the `font` CSS property.

```rust
use vizia::prelude::*;

const STYLE: &str = r#"
    .foo {
        font: "custom";
    }
"#;

const CUSTOM_FONT: &[u8] = include_bytes!("path/to/font");

fn main() {
    Application::new(|cx|{
        cx.add_theme(STYLE);
        cx.add_font_mem("custom", CUSTOM_FONT);

        Label::new(cx, "Hello Custom Font - Inline")
            .font("custom");

        Label::new(cx, "Hello Custom Font - CSS")
            .class("foo");
    }).run();
}