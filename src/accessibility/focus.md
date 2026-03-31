# Focus management

Focus determines which view receives keyboard input.
Vizia tracks focus in the window event system and exposes the result through pseudo-classes such as `:focus`, `:focus-visible`, and `:focus-within`.

## Styling focused views

Use CSS pseudo-classes to make focus obvious:

```css
textbox:focus-visible,
button:focus-visible {
	outline-width: 2px;
	outline-color: dodgerblue;
	outline-offset: 2px;
}

.form-row:focus-within {
	background-color: rgba(30, 144, 255, 0.08);
}
```

`focus-visible` is the most useful default for keyboard users because it avoids showing a focus ring on every pointer interaction.

## Moving focus programmatically

Inside an event handler, call `cx.focus()` to move focus to the current view.
If you need to control whether the focused view should also appear `:focus-visible`, use `cx.focus_with_visibility(...)`.

```rust,ignore
Element::new(cx)
	.role(Role::Button)
	.navigable(true)
	.on_press(|cx| {
		cx.focus_with_visibility(true);
		cx.emit(AppEvent::OpenPalette);
	});
```

## Trapping focus inside a subtree

Modal interfaces should stop `Tab` from escaping into the background UI.
Use `lock_focus_to_within()` on the root of the modal subtree.

```rust,ignore
Window::popup(cx, true, |cx| {
	VStack::new(cx, |cx| {
		Label::new(cx, "Save changes?");
		Button::new(cx, |cx| Label::new(cx, "Confirm"));
		Button::new(cx, |cx| Label::new(cx, "Cancel"));
	})
	.lock_focus_to_within();
});
```

This keeps keyboard navigation contained until the modal closes.

## Common mistakes

- Moving focus without also exposing a visible focus style.
- Leaving focus on background content when opening a popup or dialog.

For tab-order behavior and keyboard activation patterns, see [Keyboard navigation](keyboard_navigation.md).
