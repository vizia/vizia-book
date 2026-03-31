# HStack, VStack, ZStack

Stack views are container primitives for arranging child views.

## When To Use It

Use stack views whenever you are composing layout structure:

- Use `VStack` for vertical flow (top-to-bottom).
- Use `HStack` for horizontal flow (left-to-right).
- Use `ZStack` when children need to overlap in layers.

## Constructing Stacks

```rust,ignore
use vizia::prelude::*;

VStack::new(cx, |cx| {
	Label::new(cx, "Title");

	HStack::new(cx, |cx| {
		Button::new(cx, |cx| Label::new(cx, "Cancel"));
		Button::new(cx, |cx| Label::new(cx, "Save"));
	})
	.gap(Pixels(8.0));
})
.gap(Pixels(12.0));

ZStack::new(cx, |cx| {
	Element::new(cx).class("background");
	Label::new(cx, "Overlayed text");
});
```

## Stack API Notes

- `VStack::new(cx, content)`
- `HStack::new(cx, content)` (internally sets row layout)
- `ZStack::new(cx, content)`

Most layout behavior is controlled through shared layout modifiers:

- `gap`, `padding`, `alignment`, `size`, `width`, `height`, `wrap`, and related constraints.

## Components and Styling

| Selector | Description |
|---|---|
| `vstack` | Vertical stack container. |
| `hstack` | Horizontal stack container. |
| `zstack` | Overlay stack container. |

## Accessibility

`HStack` and `VStack` use role `GenericContainer`. Keep reading/focus order aligned with visual order for clarity.

