# RadioButton

An input where one option in a group can be selected.

## When To Use It

Use `RadioButton` when users must choose exactly one option from a small set, such as quality presets, themes, or sort modes.

## Constructing a RadioButton

A `RadioButton` binds to a `bool` checked state and triggers `on_select` when pressed:

```rust,ignore
let is_selected = Signal::new(false);

RadioButton::new(cx, is_selected)
	.on_select(|cx| cx.emit(AppEvent::SelectOption));
```

Typical grouped layout:

```rust,ignore
VStack::new(cx, |cx| {
	HStack::new(cx, |cx| {
		RadioButton::new(cx, mode.map(|m| *m == Mode::Low))
			.on_select(|cx| cx.emit(AppEvent::SetMode(Mode::Low)));
		Label::new(cx, "Low");
	});

	HStack::new(cx, |cx| {
		RadioButton::new(cx, mode.map(|m| *m == Mode::High))
			.on_select(|cx| cx.emit(AppEvent::SetMode(Mode::High)));
		Label::new(cx, "High");
	});
});
```

## RadioButton Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_select` | `Fn(&mut EventContext)` | Called when the radio button is selected. | - |

## Components and Styling

`RadioButton` uses a root `radiobutton` element with an inner dot.

| Selector | Description |
|---|---|
| `radiobutton` | Root radio button element. |
| `radiobutton .inner` | Inner indicator element. |
| `radiobutton:checked` | Checked state. |
| `radiobutton:disabled` | Disabled state. |

## Accessibility

`RadioButton` sets role `RadioButton`, is checkable, and is keyboard navigable.

Keyboard interaction:

| Key | Action |
|---|---|
| `Space` / `Enter` | Selects the radio button when focused. |

