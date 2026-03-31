# Tooltip

A lightweight contextual popup shown for a parent/trigger view.

## When To Use It

Use `Tooltip` for short explanatory text on hover/focus, icon descriptions, and compact contextual guidance.

## Constructing a Tooltip

`Tooltip` is typically attached using the `tooltip(...)` action modifier on another view.

```rust,ignore
use vizia::prelude::*;

Button::new(cx, |cx| Label::new(cx, "Save"))
	.tooltip(|cx| {
		Tooltip::new(cx, |cx| {
			Label::new(cx, "Save changes");
		})
		.placement(Placement::Top)
		.arrow(true)
		.arrow_size(Pixels(8.0));
	});
```

## Tooltip Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `placement` | `impl Res<impl Into<Placement>>` | Preferred position relative to parent. | `Top` |
| `arrow` | `impl Res<impl Into<bool>>` | Show or hide tooltip arrow. | `true` |
| `arrow_size` | `impl Res<impl Into<Length>>` | Arrow size. | `8px` |

## Components and Styling

| Selector | Description |
|---|---|
| `tooltip` | Root tooltip element. |
| `tooltip arrow` | Arrow indicator element shown when `arrow(true)`. |

Tooltip internally repositions to stay visible and supports cursor-based placement via `Placement::Cursor`.

## Accessibility

- Uses role `Tooltip`.
- Keep tooltip text short and supplemental (not the only way to access required information).
- Ensure trigger controls remain keyboard reachable so tooltip content is discoverable beyond mouse hover.

