# Custom View Binding

Custom views become more reusable when they accept reactive inputs.

## Accept `impl Res<T>` for inputs

Many built-in views accept `impl Res<T>`. Custom views can follow the same pattern.

```rust,ignore
use vizia::prelude::*;

pub struct StatusPill;

impl StatusPill {
	pub fn new(cx: &mut Context, text: impl Res<String> + 'static) -> Handle<Self> {
		Self.build(cx, |cx| {
			Label::new(cx, text).class("status-pill");
		})
	}
}

impl View for StatusPill {}
```

This allows callers to pass:

- A static value.
- A signal.
- A memo/derived value.

## Binding modifiers in custom views

You can also bind modifiers to reactive values:

```rust,ignore
pub struct StatusDot;

impl StatusDot {
	pub fn new(cx: &mut Context, color: impl Res<Color> + 'static) -> Handle<Self> {
		Self.build(cx, |cx| {
			Element::new(cx)
				.size(Pixels(10.0))
				.background_color(color)
				.border_radius(Pixels(999.0));
		})
	}
}

impl View for StatusDot {}
```

## Guideline

Prefer passing reactive inputs into custom views instead of reading global state directly. This keeps components easy to test and reuse.

Next: expose polished APIs with custom modifiers.

