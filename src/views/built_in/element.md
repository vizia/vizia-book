# Element

A minimal, non-interactive primitive view.

`Element` is useful as a generic styled block, spacer surrogate, line, shape, or background layer.

## When To Use It

Use `Element` when you need pure layout/styling without widget behavior. It is ideal for decorative surfaces, separators, overlays, and custom composition scaffolding.

## Constructing an Element

Basic styled block:

```rust,ignore
use vizia::prelude::*;

Element::new(cx)
	.size(Pixels(100.0))
	.background_color(Color::rgb(30, 30, 30));
```

Circle:

```rust,ignore
Element::new(cx)
	.width(Pixels(80.0))
	.height(Pixels(80.0))
	.corner_radius(Percentage(50.0))
	.background_color(Color::rgb(120, 180, 255));
```

## Spacer

The same module provides `Spacer`, a utility view for flexible separation in layouts.

```rust,ignore
HStack::new(cx, |cx| {
	Label::new(cx, "Left");
	Spacer::new(cx).width(Stretch(1.0));
	Label::new(cx, "Right");
});
```

## Components and Styling

| Selector | Description |
|---|---|
| `element` | Root generic element. |
| `spacer` | Root spacer element. |

## Accessibility

`Element` and `Spacer` are generic/non-interactive primitives. Avoid using them as interactive controls; use purpose-built views when user interaction or semantic roles are required.

