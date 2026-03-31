# Label

A view used to display text content.

## When To Use It

Use Label to present static or reactive text such as titles, descriptions, field captions, or inline values. Labels can also describe another control for accessibility and click-target forwarding.

## Constructing a Label

A `Label` takes text from a static value or a signal source. Text updates automatically when the source signal changes.

```rust,ignore
Label::new(cx, "Hello Vizia");
```

Use a signal source for reactive text:

```rust,ignore
let text = Signal::new(String::from("Ready"));

Label::new(cx, text);
```

Use `Label::rich` to compose styled inline spans alongside the base text:

```rust,ignore
Label::rich(cx, "Version", |cx| {
	TextSpan::new(cx, " 2.0", |_| {});
});
```

## Label Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `describing` | `impl Into<String>` | Associates the label with another control by id and forwards press interactions to that control. | Not set |

Common generic text modifiers such as `text_wrap`, `font_size`, and `color` can also be applied to labels.

## Components and Styling

A `Label` is rendered as a single `label` element. Rich text uses internal `text-span` elements.

| Selector | Description |
|---|---|
| `label` | The outermost text element. |
| `label.describing` | Applied when the label describes another control using `describing`. |
| `text-span` | Inline span content used inside `Label::rich`. |

### Theming

Label has no dedicated color tokens in the default theme. Its baseline layout defaults are:

| Selector | Property | Default |
|---|---|---|
| `label` | `width`, `height` | `auto`, `auto` |
| `label` | `text-wrap` | `false` |

Customize label presentation with text and spacing properties:

```css
label {
	font-size: 14px;
	color: var(--foreground);
}

label.muted {
	color: var(--muted-foreground);
}
```

## Accessibility

The label uses the role `Label` and exposes its text as the accessible name.

### Labeling Another Control with `describing`

Use `describing` to associate the label with a control id. Pressing the label forwards the action to the described control.

```rust,ignore
HStack::new(cx, |cx| {
	Checkbox::new(cx, checked)
		.id("notify_checkbox")
		.on_toggle(|cx| cx.emit(AppEvent::ToggleNotifications));

	Label::new(cx, "Enable notifications")
		.describing("notify_checkbox");
})
.height(Auto)
.gap(Pixels(8.0));
```

### Pointer Interaction

Labels support pointer interaction when `describing` is set:

- Pressing the label forwards press and press-down events to the described control.

Without `describing`, labels are non-interactive text.

### Keyboard Interaction

Labels do not define keyboard activation behavior by default. Keyboard interaction occurs on the control being described (for example, a checkbox or textbox).

## Related

- [Built-in Views Overview](../built_in_views.md)
- [Views](../views.md)
- [Modifiers](../modifiers.md)
