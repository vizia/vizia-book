# Screen readers

Screen readers consume the accessibility tree, not the rendered pixels, so dynamic changes and relationships need to be explicit in the tree.

## Roles

Roles tell assistive technologies what a view is. Built-in views set their own role automatically — for example, buttons expose `Role::Button`, switches expose `Role::Switch`, and progress bars expose `Role::ProgressIndicator`.

When you build a custom control, set the role yourself:

```rust,ignore
Element::new(cx)
	.role(Role::Button)
	.name("Refresh data")
	.navigable(true)
	.on_press(|cx| cx.emit(AppEvent::Refresh));
```

Pick the role that matches the control's real behavior, not just its appearance. If a view toggles state, it should not pretend to be a plain button.

## Accessible names

Accessible names tell assistive technologies how to refer to a control. Use one of these approaches, in order of preference:

1. Visible text inside the control.
2. `labeled_by("...")` referencing a separate visible label.
3. `name("...")` for icon-only or otherwise unlabeled controls.

```rust,ignore
Label::new(cx, "Search").id("search-label");

Textbox::new(cx, AppState::query)
	.labeled_by("search-label");
```

## Descriptions

Names answer *what is this?* — descriptions answer *what else should the user know?*

```rust,ignore
Label::new(cx, "At least 12 characters").id("password-help");

Textbox::new(cx, AppState::password)
	.described_by("password-help");
```

Use descriptions for helper text, validation hints, and consequences, not as a replacement for a proper name.

When both a label and helper text live in separate views, combine the two modifiers:

```rust,ignore
Label::new(cx, "Email").id("email-label");
Label::new(cx, "We will only use this for account updates").id("email-help");

Textbox::new(cx, AppState::email)
	.labeled_by("email-label")
	.described_by("email-help");
```

## Live regions

If status text changes asynchronously, mark it as a live region so screen readers can announce updates.

```rust,ignore
Label::new(cx, AppState::status)
	.live(Live::Polite);
```

Use `Live::Polite` for routine status updates and reserve assertive announcements for genuinely urgent information.

## Accessible states and properties

Accessibility is not just about naming controls — assistive technologies also need to know whether something is disabled, checked, read-only, invalid, hidden, or carrying a current value.

### Common states

Vizia maps several control states into both styling and accessibility data. Built-in controls usually manage these automatically.

View modifiers:

- `disabled(...)`
- `checked(...)`
- `read_only(...)`
- `placeholder_shown(...)`
- `hidden(...)`

#### Numeric and text values

Controls such as progress bars, sliders, and spinboxes should expose a machine-readable value.

```rust,ignore
Element::new(cx)
	.role(Role::ProgressIndicator)
	.numeric_value(progress.map(|value| *value as f64));
```

For custom text-oriented views, expose the current text value when it is meaningful to screen readers:

```rust,ignore
Element::new(cx)
	.role(Role::Label)
	.text_value(status);
```

### Hidden versus invisible

`hidden(true)` removes a view from the accessibility tree without affecting rendering. Use it when content should remain visible but should not be announced, such as decorative icons.

If content should disappear visually as well, combine accessibility state with normal display or visibility styling.


