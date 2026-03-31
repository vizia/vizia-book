# Fonts

## System fonts

By default, text uses the active theme font stack. You can select a system font in CSS or with a modifier.

```rust,ignore
use vizia::prelude::*;

const STYLE: &str = r#"
    .system-ui {
        font-family: "Arial";
        font-size: 18px;
    }
"#;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(STYLE).expect("Failed to add stylesheet");

        Label::new(cx, "System font via CSS").class("system-ui");

        Label::new(cx, "System font via modifier")
            .font_family("Times New Roman");
    })
    .run()
}
```

## Loading custom fonts

Load custom font bytes with `cx.add_font_mem()` before creating views that use that font.

The family name comes from the font metadata itself. Use that family name in CSS or `.font_family(...)`.

```rust,ignore
use vizia::prelude::*;

const STYLE: &str = r#"
    .brand {
        font-family: "Noto Sans";
        font-size: 20px;
    }
"#;

const CUSTOM_FONT: &[u8] = include_bytes!("resources/fonts/NotoSans-Regular.ttf");

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(STYLE).expect("Failed to add stylesheet");
        cx.add_font_mem(CUSTOM_FONT);

        Label::new(cx, "Custom font via CSS").class("brand");

        Label::new(cx, "Custom font via modifier")
            .font_family("Noto Sans");
    })
    .run()
}
```

## Tips

- Load fonts early, ideally at app startup.
- Keep a small set of font families to reduce app size and startup work.
- Verify the exact family name in the font file if a font does not apply.