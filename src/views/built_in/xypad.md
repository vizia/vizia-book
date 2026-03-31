# XYPad

A 2D input for controlling two normalized floating-point values at once.

## When To Use It

Use `XYPad` when users need to manipulate two related parameters together, such as X/Y position, panning, or effect parameters.

## Constructing an XYPad

`XYPad` binds to a tuple `(x, y)` where each value is normalized to `0.0..=1.0`.

```rust,ignore
use vizia::prelude::*;

pub enum AppEvent {
	SetXY(f32, f32),
}

let xy = Signal::new((0.5f32, 0.5f32));

XYPad::new(cx, xy)
	.on_change(|cx, x, y| cx.emit(AppEvent::SetXY(x, y)));
```

## XYPad Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_change` | `Fn(&mut EventContext, f32, f32)` | Called when pointer interaction changes X/Y values. | - |

## Components and Styling

| Selector | Description |
|---|---|
| `xypad` | Root element. |
| `xypad .thumb` | Draggable thumb indicator. |

`XYPad` sets default size, border, and clipped overflow internally; override with regular style modifiers or CSS as needed.

## Accessibility

`XYPad` does not expose dedicated keyboard stepping by default, so pair it with companion controls (for example `Slider` or `Textbox`) when keyboard-only precision is required.

