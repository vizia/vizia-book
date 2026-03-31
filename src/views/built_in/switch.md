# Switch

An input where the user toggles a boolean value between on and off.

## When To Use It

Use `Switch` for immediate binary settings such as enabling notifications, dark mode, or realtime updates. Prefer switches for settings panels and quick toggles where state change is applied immediately.

## Constructing a Switch

A `Switch` binds to a `bool` and emits actions through `on_toggle`:

```rust,ignore
let enabled = Signal::new(false);

Switch::new(cx, enabled)
	.on_toggle(|cx| cx.emit(AppEvent::ToggleEnabled));
```

With a visible label:

```rust,ignore
HStack::new(cx, |cx| {
	Switch::new(cx, enabled)
		.id("notifications_switch")
		.on_toggle(|cx| cx.emit(AppEvent::ToggleEnabled));

	Label::new(cx, "Enable notifications")
		.describing("notifications_switch");
})
.gap(Pixels(8.0))
.height(Auto);
```

## Switch Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_toggle` | `Fn(&mut EventContext)` | Called when the switch is toggled. | - |

## Components and Styling

`Switch` uses a root `switch` element and a thumb child.

| Selector | Description |
|---|---|
| `switch` | Root switch element. |
| `switch .thumb` | Thumb/handle element. |
| `switch:checked` | Checked/on state. |
| `switch:disabled` | Disabled state. |

## Accessibility

`Switch` sets role `Switch` and is keyboard navigable.

- Use `name("...")` when there is no visible label.
- Use `id(...)` and `describing(...)` to associate visible label text.

Keyboard interaction:

| Key | Action |
|---|---|
| `Space` / `Enter` | Toggles the switch when focused. |

