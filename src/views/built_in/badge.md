# Badge

A small overlay indicator for counts, status, or notifications.

## When To Use It

Use `Badge` to annotate another view (for example an avatar or icon) with a count, unread indicator, or status marker.

## Constructing a Badge

Attach badge content to another view (commonly via a component helper like `Avatar::badge(...)`).

```rust,ignore
use vizia::prelude::*;

Avatar::new(cx, |cx| {
	Svg::new(cx, ICON_USER);
})
.badge(|cx| {
	Badge::new(cx, |cx| Label::new(cx, "3"))
		.placement(BadgePlacement::TopRight)
});
```

Empty status badge:

```rust,ignore
Badge::empty(cx)
	.placement(BadgePlacement::BottomRight)
	.class("error");
```

## Badge Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `placement` | `impl Res<impl Into<BadgePlacement>>` | Sets badge anchor relative to parent. | `TopRight` |

Supported placements:

- `TopLeft`, `Top`, `TopRight`
- `Left`, `Right`
- `BottomLeft`, `Bottom`, `BottomRight`

## Components and Styling

| Selector | Description |
|---|---|
| `badge` | Root badge element. |

`Badge` uses absolute positioning and translation internally to anchor to parent edges/corners.

## Accessibility

Keep badge content concise and meaningful; for purely decorative badges, avoid relying on badge text as the only status indicator.

