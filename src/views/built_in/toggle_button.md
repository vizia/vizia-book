# ToggleButton

A button-style input that toggles between checked and unchecked states.

## When To Use It

Use `ToggleButton` when you want button visuals with persistent on/off state, such as bold/italic toolbar actions or feature toggles.

## Constructing a ToggleButton

`ToggleButton` binds to a `bool` and accepts custom button content:

```rust,ignore
let enabled = Signal::new(false);

ToggleButton::new(cx, enabled, |cx| Label::new(cx, "Snap"))
	.on_toggle(|cx| cx.emit(AppEvent::ToggleSnap));
```

Icon content works the same way:

```rust,ignore
ToggleButton::new(cx, is_bold, |cx| Svg::new(cx, ICON_BOLD))
	.name("Bold")
	.on_toggle(|cx| cx.emit(AppEvent::ToggleBold));
```

## ToggleButton Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_toggle` | `Fn(&mut EventContext)` | Called when the button is activated/toggled. | - |

## Components and Styling

| Selector | Description |
|---|---|
| `toggle-button` | Root element. |
| `toggle-button:checked` | Checked/active state. |
| `toggle-button:disabled` | Disabled state. |

Because content is custom, child selectors depend on what you place inside (`label`, `svg`, stacks, etc.).

## Accessibility

`ToggleButton` uses role `Button`, is checkable, and reports checked state to assistive tech.

Keyboard interaction:

| Key | Action |
|---|---|
| `Space` / `Enter` | Activates/toggles the button when focused. |

