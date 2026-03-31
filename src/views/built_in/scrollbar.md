# Scrollbar

A draggable bar used to control scroll position.

`Scrollbar` is usually created internally by `ScrollView`, but can also be used directly in custom views.

## When To Use It

Use `Scrollbar` directly only when building custom scroll containers or advanced scroll interactions. For standard scrolling layouts, use `ScrollView` and let it manage scrollbar construction and synchronization.

## Constructing a Scrollbar

```rust,ignore
Scrollbar::new(
	cx,
	scroll_value,
	visible_ratio,
	Orientation::Vertical,
	|cx, value| cx.emit(ScrollEvent::SetY(value)),
)
.scroll_to_cursor(true);
```

Constructor:

`Scrollbar::new(cx, value, ratio, orientation, callback)`

- `value`: scroll progress `0.0..=1.0`
- `ratio`: visible viewport ratio for thumb sizing
- `orientation`: horizontal or vertical
- `callback`: receives updated scroll progress while dragging/jumping

## Scrollbar Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `scroll_to_cursor` | `impl Res<bool>` | Drag/thumb jumps relative to cursor on press. | `false` |

## Components and Styling

| Selector | Description |
|---|---|
| `scrollbar` | Root scrollbar element. |
| `scrollbar.horizontal` | Horizontal scrollbar class. |
| `scrollbar.vertical` | Vertical scrollbar class. |
| `scrollbar .thumb` | Draggable thumb element. |

## Accessibility

When using direct `Scrollbar` instances, ensure keyboard and focus behavior of the parent scroll container remains accessible and discoverable.

