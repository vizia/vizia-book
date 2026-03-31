# Custom Views

A custom view is a reusable component built from a Rust type that implements `View`.

The standard pattern has three parts:

1. Define a struct for view state.
2. Add a `new(cx, ...) -> Handle<Self>` constructor.
3. Implement `View` for the struct.

## Minimal custom view

```rust,ignore
use vizia::prelude::*;

pub struct ColorSwatch {
    color: Color,
}

impl ColorSwatch {
    pub fn new(cx: &mut Context, color: Color) -> Handle<Self> {
        Self { color }.build(cx, |_cx| {})
    }
}

impl View for ColorSwatch {
    fn element(&self) -> Option<&'static str> {
        Some("color_swatch")
    }
}
```

The `build` closure is where you compose child views (if any). The returned `Handle<Self>` lets callers apply modifiers.

## Using a custom view

```rust,ignore
fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        ColorSwatch::new(cx, Color::red())
            .size(Pixels(40.0))
            .background_color(Color::red());
    })
    .run()
}
```

## What to put in the struct

- Put immutable configuration values in the struct.
- Use signals for reactive state.
- Keep large state in models when shared across multiple views.

Next: compose custom views from sub-views.

