# Checkbox

An input where the user can toggle a boolean value.

## When To Use It

Use Checkbox when users need to enable or disable independent options, such as preferences, filters, or consent settings. Prefer checkboxes over switches when choices are presented as part of a list or form.

## Constructing a Checkbox

A `Checkbox` takes a binding to a `bool` value. Use `on_toggle` to emit an event or update state.

```rust,ignore
let checked = Signal::new(false);

Checkbox::new(cx, checked)
	.on_toggle(|cx| cx.emit(AppEvent::ToggleChecked));
```

Use `with_icons` to provide custom icons for unchecked and checked states:

```rust,ignore
Checkbox::with_icons(cx, checked, Some(""), Some(ICON_X))
	.on_toggle(|cx| cx.emit(AppEvent::ToggleChecked));
```

Use `intermediate` for tri-state style UIs (for example, partially selected groups):

```rust,ignore
let checked = Signal::new(false);
let intermediate = Signal::new(true);

Checkbox::intermediate(cx, checked, intermediate)
	.on_toggle(|cx| cx.emit(AppEvent::ToggleChecked));
```

## Checkbox Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_toggle` | `Fn(&mut EventContext)` | Called when the checkbox is toggled. | - |

## Components and Styling

A `Checkbox` is rendered as a single `checkbox` element, typically containing an `svg` check icon when checked.

| Selector | Description |
|---|---|
| `checkbox` | The outermost checkbox element. |
| `checkbox:checked` | Applied when the checkbox value is true. |
| `checkbox:disabled` | Applied when the checkbox is disabled. |
| `checkbox.intermediate` | Applied when using `Checkbox::intermediate` and intermediate is true while unchecked. |
| `checkbox > svg` | The icon content shown inside the checkbox. |

### Theming

| Selector | Property | Default Theme Token |
|---|---|---|
| `checkbox:focus-visible` | `outline-color` | `--ring` |
| `checkbox` | `border-color` | `--border` |
| `checkbox` | `background-color` | `--background` |
| `checkbox` | `fill` | `--foreground` |
| `checkbox:checked` | `background-color` | `--primary` |
| `checkbox:checked` | `border-color` | `--primary` |
| `checkbox:checked` | `fill` | `--primary-foreground` |
| `checkbox:disabled` | `background-color` | `--muted` |
| `checkbox:disabled` | `border-color` | `--muted` |
| `checkbox:checked:disabled` | `fill` | `--muted-foreground` |

Customize checkbox appearance using state selectors:

```css
checkbox {
	corner-radius: 4px;
}

checkbox:checked {
	background-color: var(--secondary);
	border-color: var(--secondary);
	fill: var(--secondary-foreground);
}
```

## Accessibility

The checkbox has a role of `CheckBox`, is keyboard navigable, and reports checked state to assistive technologies.

### Adding a Label

To associate visible text with a checkbox, give the checkbox an identifier and use `describing` on the label:

```rust,ignore
HStack::new(cx, |cx| {
	Checkbox::new(cx, checked)
		.id("notifications_checkbox")
		.on_toggle(|cx| cx.emit(AppEvent::ToggleNotifications));

	Label::new(cx, "Enable notifications")
		.describing("notifications_checkbox");
})
.height(Auto)
.gap(Pixels(8.0));
```

### Using `name` Without a Label

If no visible `Label` is present, provide an accessible name directly on the checkbox with `name`:

```rust,ignore
Checkbox::new(cx, checked)
	.name("Enable notifications")
	.on_toggle(|cx| cx.emit(AppEvent::ToggleNotifications));
```

Use this for compact or icon-only layouts where text is not shown adjacent to the control.

### Pointer Interaction

Users can toggle a checkbox with the pointer:

- Left-click on the checkbox toggles its state.

### Keyboard Interaction

| Key | Action |
|---|---|
| `Space` / `Enter` | Toggles the checkbox when focused. |


