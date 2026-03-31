# Stylesheets

Stylesheets define how views look. You can load CSS from a Rust string or from external files.

## Inline stylesheet

Use `cx.add_stylesheet()` with a string constant:

```rust,ignore
use vizia::prelude::*;

const STYLE: &str = r#"
    label {
        color: var(--foreground);
        font-size: 16px;
    }

    .highlighted {
        background-color: var(--accent);
        color: var(--accent-foreground);
    }
"#;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(STYLE).expect("Failed to add stylesheet");

        Label::new(cx, "Hello, styled world!").class("highlighted");
    })
    .run()
}
```

## External stylesheet file

Use `include_style!()` to embed a CSS file at compile time:

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(include_style!("src/style.css"))
            .expect("Failed to add stylesheet");

        Label::new(cx, "Styled from file");
    })
    .run()
}
```

The path is relative to your crate root (the folder with `Cargo.toml`).

## Hot reloading

When running in debug mode, stylesheets added with `include_style!()` can be reloaded by pressing `F5`.

## Order and precedence

Stylesheets are applied in the order they are added.
If two rules have the same specificity, the rule from the later stylesheet wins.

## See also

- [Selectors](../styling/selectors.md)
- [Variables](../styling/variables.md)
- [Theming](../styling/theming.md)
