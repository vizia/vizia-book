# Popup / Popover

Popup behavior in Vizia is built around `PopupEvent`, `PopupData`, and the `Popover` view.

## When To Use It

Use popups for anchored transient UI such as menus, dropdown content, context actions, and lightweight inspectors.

## Core Pieces

- `PopupEvent::{Open, Close, Switch}` controls popup visibility.
- `PopupData` is a small model with `is_open` state for popup-capable components.
- `Popover::new(cx, content)` renders positioned popup content.

## Constructing a Popover

```rust,ignore
use vizia::prelude::*;

Button::new(cx, |cx| Label::new(cx, "Open popup"))
	.on_press(|cx| cx.emit(PopupEvent::Open));

Binding::new(cx, is_open, |cx| {
	if is_open.get() {
		Popover::new(cx, |cx| {
			Label::new(cx, "Popup content");
		})
		.placement(Placement::Bottom)
		.show_arrow(true)
		.arrow_size(Pixels(8.0))
		.should_reposition(true)
		.on_blur(|cx| cx.emit(PopupEvent::Close));
	}
});
```

## Popover Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `placement` | `impl Res<Placement>` | Preferred popup position relative to parent. | `Bottom` |
| `show_arrow` | `impl Res<bool>` | Show/hide popup arrow. | `true` |
| `arrow_size` | `impl Res<impl Into<Length>>` | Arrow size (or spacing offset when hidden). | `8px` |
| `should_reposition` | `impl Res<bool>` | Auto-adjust placement to stay visible. | `true` |
| `on_blur` | `Fn(&mut EventContext)` | Called when focus moves outside the popup, typically used to close it. | — |

## Components and Styling

| Selector | Description |
|---|---|
| `popup` | Root popover element (`Popover` view element name). |
| `popup arrow` | Arrow indicator element shown when `show_arrow(true)`. |

## Accessibility

- Ensure popup trigger controls are keyboard reachable.
- Close popups on blur/selection when appropriate to preserve predictable focus flow.
- Keep popup content semantically meaningful (menu item roles, labels, etc.) based on contained views.

