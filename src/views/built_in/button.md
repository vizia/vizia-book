# Button

An input control that triggers an action when pressed.

## When To Use It

Use Button for discrete actions such as submitting a form, opening a dialog, applying settings, or triggering commands. Prefer buttons when the user intent is immediate activation rather than toggling persistent state.

## Constructing a Button

A `Button` takes content (commonly a `Label`) and triggers behavior with `on_press`.

```rust,ignore
let count = Signal::new(0u32);

Button::new(cx, |cx| Label::new(cx, "Increment"))
	.on_press(move |_| count.update(|v| *v += 1));
```

Use `variant` and `size` to adjust visual style and emphasis:

```rust,ignore
Button::new(cx, |cx| Label::new(cx, "Primary"))
	.on_press(|cx| cx.emit(AppEvent::Save))
	.variant(ButtonVariant::Primary)
	.size(Size::Large);

Button::new(cx, |cx| Label::new(cx, "Cancel"))
	.on_press(|cx| cx.emit(AppEvent::Close))
	.variant(ButtonVariant::Outline)
	.size(Size::Medium);
```

## Button Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_press` | `Fn(&mut EventContext)` | Called when the button is activated (pointer or keyboard activation). | - |
| `variant` | `impl Res<ButtonVariant>` | Selects visual style: `Primary`, `Secondary`, `Outline`, or `Text`. | `Primary` |

## Components and Styling

`Button` is rendered as a single `button` element containing your provided content.

| Selector | Description |
|---|---|
| `button` | The root button element. |
| `button.secondary` | Applied when using `ButtonVariant::Secondary`. |
| `button.outline` | Applied when using `ButtonVariant::Outline`. |
| `button.text` | Applied when using `ButtonVariant::Text`. |
| `button:focus-visible` | Focus ring styling for keyboard navigation. |
| `button:disabled` | Disabled visual state. |
| `button > *` | The direct content container inside the button (label, stack, icon, etc.). |

### Theming

| Selector | Property | Default Theme Token |
|---|---|---|
| `button:focus-visible` | `outline-color` | `--ring` |
| `button` | `background-color` | `--primary` |
| `button` | `color` | `--primary-foreground` |
| `button.secondary` | `background-color` | `--secondary` |
| `button.secondary` | `color` | `--secondary-foreground` |
| `button.outline` | `border-color` | `--border` |
| `button.outline`, `button.text` | `color` | `--foreground` |
| `button:disabled` | `color` | `--muted-foreground` |

Customize button appearance using variant selectors and state pseudo-classes:

```css
button {
	corner-radius: 999px;
}

button.outline:hover {
	background-color: var(--gray-200);
	border-color: var(--primary);
}

button.text {
	background-color: transparent;
}
```

## Accessibility

The button has a role of `Button` and is keyboard navigable. Activation triggers the same action callback (`on_press`) for pointer and keyboard interaction.

### Text Button Accessible Name

If your button contains visible text (for example a `Label`), that text is used as the accessible name:

```rust,ignore
Button::new(cx, |cx| Label::new(cx, "Save"))
	.on_press(|cx| cx.emit(AppEvent::Save));
```

### Icon-Only Button

If a button has no visible text, provide an accessible name with `name`:

```rust,ignore
Button::new(cx, |cx| Svg::new(cx, ICON_PLUS))
	.name("Add item")
	.on_press(|cx| cx.emit(AppEvent::AddItem));
```

### Keyboard Interaction

| Key | Action |
|---|---|
| `Enter` / `Space` | Activates the button and runs `on_press` when the button is focused. |

## ButtonGroup

Group adjacent buttons into a single visual unit with `ButtonGroup`.

```rust,ignore
ButtonGroup::new(cx, |cx| {
    Button::new(cx, |cx| Label::new(cx, "One"));
    Button::new(cx, |cx| Label::new(cx, "Two"));
    Button::new(cx, |cx| Label::new(cx, "Three"));
});
```

Apply a `variant` to the group to style all child buttons at once:

```rust,ignore
ButtonGroup::new(cx, |cx| {
    Button::new(cx, |cx| Label::new(cx, "Bold"));
    Button::new(cx, |cx| Label::new(cx, "Italic"));
})
.variant(ButtonVariant::Outline);
```

Use `.vertical(true)` to stack buttons vertically:

```rust,ignore
ButtonGroup::new(cx, |cx| {
    Button::new(cx, |cx| Label::new(cx, "Top"));
    Button::new(cx, |cx| Label::new(cx, "Bottom"));
})
.vertical(true);
```

| Modifier | Type | Description | Default |
|---|---|---|
| `variant` | `impl Res<ButtonVariant>` | Applies a variant to all child buttons. | `Primary` |
| `vertical` | `impl Res<bool>` | Stacks buttons vertically. | `false` |

The group renders as a `button-group` element. Variant classes (`button-group.secondary`, `button-group.outline`, `button-group.text`) and `button-group.vertical` are available for CSS customisation.


