# Custom Modifiers

Custom modifiers extend the builder API for any view type. They are defined as extension traits on `Handle<'_, V>`.

## Defining a generic modifier

To add a modifier that works on any view, define a trait with a blanket implementation on `Handle`:

```rust,ignore
use vizia::prelude::*;

pub trait CardModifiers: Sized {
    fn card_style(self) -> Self;
}

impl<'a, V: View> CardModifiers for Handle<'a, V> {
    fn card_style(self) -> Self {
        self.background_color(Color::white())
            .border_width(Pixels(1.0))
            .border_color(Color::from("#e0e0e0"))
            .corner_radius(Pixels(8.0))
            .padding(Pixels(12.0))
    }
}
```

This modifier is now available on any `Handle`:

```rust,ignore
VStack::new(cx, |cx| {
    Label::new(cx, "Hello");
}).card_style();
```

## Defining a view-specific modifier

Restrict a modifier to a single view type by implementing the trait only for `Handle<'_, MyView>`:

```rust,ignore
pub trait SliderLabeled {
    fn labeled(self, text: impl Into<String>) -> Self;
}

impl<'a> SliderLabeled for Handle<'a, Slider> {
    fn labeled(self, text: impl Into<String>) -> Self {
        self.tooltip(|cx| {
            Label::new(cx, text.into());
        })
    }
}
```

## Reactive modifier parameters

Use `impl Res<T>` for parameters that can accept either a static value or a signal:

```rust,ignore
pub trait HighlightModifier: Sized {
    fn highlighted(self, value: impl Res<bool>) -> Self;
}

impl<'a, V: View> HighlightModifier for Handle<'a, V> {
    fn highlighted(self, value: impl Res<bool>) -> Self {
        self.toggle_class("highlighted", value)
    }
}
```

## See also

- [Custom View Modifiers](../custom_views/custom_view_modifiers.md) — modifiers scoped to custom view types.
- [Modifiers](./modifiers.md) — using built-in modifiers.
