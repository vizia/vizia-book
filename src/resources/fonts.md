# Custom Fonts

A custom font can be added to vizia using the `add_font_mem()` method on the context, which should be called at the start of the application closure before building any views. 

This function takes a string name and a byte array of a font that has already been loaded into memory, for example with the `include_bytes!()` macro.

The name of the font is derived from the font data and is the name used to reference the font in CSS or when using the `font_family()` modifier.

```rust
use vizia::prelude::*;

const STYLE: &str = r#"
    .foo {
        font-family: "font-name";
    }
"#;

const CUSTOM_FONT: &[u8] = include_bytes!("path/to/font");

fn main() {
    Application::new(|cx|{
        cx.add_theme(STYLE);
        cx.add_font_mem(CUSTOM_FONT);

        Label::new(cx, "Hello Custom Font - Inline")
            .font("font-name");

        Label::new(cx, "Hello Custom Font - CSS")
            .class("foo");
    }).run();
}