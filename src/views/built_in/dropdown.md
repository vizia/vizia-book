# Dropdown

A container view that shows a trigger and opens popup content on demand.

## When To Use It

Use Dropdown when you need custom popup behavior anchored to a trigger view. It is the foundation for custom menus, filter panels, lightweight pickers, and contextual option lists.

## Constructing a Dropdown

Dropdown takes two closures: trigger content and popup content.

```rust,ignore
Dropdown::new(
	cx,
	|cx| {
		Button::new(cx, |cx| Label::new(cx, "Options"))
			.on_press(|cx| cx.emit(PopupEvent::Open));
	},
	|cx| {
		VStack::new(cx, |cx| {
			Label::new(cx, "First option")
				.on_press(|cx| {
					cx.emit(AppEvent::ChooseFirst);
					cx.emit(PopupEvent::Close);
				});
			Label::new(cx, "Second option")
				.on_press(|cx| {
					cx.emit(AppEvent::ChooseSecond);
					cx.emit(PopupEvent::Close);
				});
		});
	},
)
.placement(Placement::Bottom)
.show_arrow(true)
.arrow_size(Pixels(4.0));
```

## Dropdown Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `placement` | `impl Res<Placement>` | Position of the popup relative to trigger. | `Placement::Bottom` |
| `show_arrow` | `impl Res<bool>` | Shows or hides popup arrow. | `true` |
| `arrow_size` | `impl Res<impl Into<Length>>` | Arrow size (or visual gap if hidden). | `4px` |
| `should_reposition` | `impl Res<bool>` | Reposition popup to stay visible in viewport. | `true` |

## Components and Styling

| Selector | Description |
|---|---|
| `dropdown` | Root dropdown element wrapping trigger and popup behavior. |

The popup content itself is rendered through Popover while open, so popup styling is typically done with selectors on your popup child views.

## Accessibility

Accessibility depends on trigger and popup content.

- Use a keyboard-reachable trigger (for example Button).
- Ensure popup options are focusable and labeled.
- Close popup after selection for predictable focus flow.

Popup control events:

- `PopupEvent::Open`
- `PopupEvent::Close`
- `PopupEvent::Switch`

