# Resizable

`Resizable` creates a container that can be resized by dragging one edge.

## When To Use It

Use `Resizable` when users should control panel size directly, such as split views, editor sidebars, and adjustable inspector panes.

## Constructing a Resizable

```rust,ignore
use vizia::prelude::*;

let panel_width = Signal::new(Units::Pixels(280.0));

Resizable::new(
    cx,
    panel_width,
    ResizeStackDirection::Right,
    move |_cx, new_size| panel_width.set(Units::Pixels(new_size)),
    |cx| {
        Label::new(cx, "Resizable content");
    },
)
.on_reset(|cx| cx.emit(AppEvent::ResetPanelSize));
```

## Resizable Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_reset` | `Fn(&mut EventContext)` | Called when resize handle is double-clicked. | - |

## Resizable API Notes

- Constructor: `Resizable::new(cx, size, direction, on_drag, content)`
- Directions: `ResizeStackDirection::{Left, Right, Top, Bottom}`

## Components and Styling

| Selector | Description |
|---|---|
| `resizable` | Root resizable container. |
| `resize-handle` | Draggable handle element. |
| `resizable.horizontal` / `resizable.vertical` | Orientation classes. |
| `resizable.left` / `resizable.right` / `resizable.top` / `resizable.bottom` | Edge placement classes. |

## Accessibility

Provide keyboard-accessible alternatives for critical layout changes when resize drag behavior is core to the workflow.
