# Textbox

A text input control for editing string-backed values.

## When To Use It

Use `Textbox` for short text, numeric entry, search fields, and form input. Use `Textbox::new_multiline` for paragraph-style editing.

## Constructing a Textbox

Single-line textbox:

```rust,ignore
let name = Signal::new(String::from(""));

Textbox::new(cx, name)
	.placeholder("Display name")
	.on_edit(|cx, text| cx.emit(AppEvent::EditingName(text)))
	.on_submit(|cx, text, from_enter| cx.emit(AppEvent::SubmitName(text, from_enter)));
```

Multiline textbox with wrapping:

```rust,ignore
let notes = Signal::new(String::new());

Textbox::new_multiline(cx, notes, true)
	.placeholder("Notes")
	.on_submit(|cx, text, _| cx.emit(AppEvent::SubmitNotes(text)));
```

Validation example:

```rust,ignore
Textbox::new(cx, age_text)
	.validate(|age: &u32| *age <= 130)
	.on_submit(|cx, age, _| cx.emit(AppEvent::SetAge(age)));
```

## Textbox Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_edit` | `Fn(&mut EventContext, String)` | Called whenever text content changes. | - |
| `on_submit` | `Fn(&mut EventContext, T, bool)` | Called on submit/blur with parsed value and source flag. | - |
| `on_blur` | `Fn(&mut EventContext)` | Called when textbox loses editing focus. | - |
| `on_cancel` | `Fn(&mut EventContext)` | Called when edit is cancelled (Escape). | - |
| `validate` | `Fn(&T) -> bool` | Validates parsed value; invalid values are not submitted. | none |
| `placeholder` | `impl Res<impl ToStringLocalized>` | Placeholder text when input is empty. | empty |

## Components and Styling

| Selector | Description |
|---|---|
| `textbox` | Root textbox element. |
| `textbox.multiline` | Applied for wrapped multiline textbox. |
| `textbox.caret` | Applied while caret is visible/blinking. |
| `textbox:placeholder-shown` | Applied when placeholder text is shown. |

## Accessibility

- Single-line textbox uses role `TextInput`.
- Multiline textbox uses role `MultilineTextInput`.
- Use `name(...)` for accessible naming when no visible label is present.
- Use `id(...)` and `describing(...)`/`labeled_by(...)` with a `Label` for explicit associations.

### Keyboard Interaction

| Key | Action |
|---|---|
| `Enter` | Submit in single-line mode; insert newline in multiline mode. |
| `Escape` | Cancel editing (`on_cancel`) or end edit if no cancel handler is set. |
| `ArrowLeft` / `ArrowRight` | Move caret left/right. |
| `ArrowUp` / `ArrowDown` | Move caret by line in multiline mode. |
| `Home` / `End` | Move caret to line start/end. |
| `PageUp` / `PageDown` | Move by page. |
| `Ctrl+PageUp` / `Ctrl+PageDown` | Move to start/end of document body. |
| `Backspace` / `Delete` | Delete text backward/forward. |
| `Ctrl/Cmd+A` | Select all text. |
| `Ctrl/Cmd+C` | Copy selection. |
| `Ctrl/Cmd+V` | Paste from clipboard. |
| `Ctrl/Cmd+X` | Cut selection. |

On macOS, word navigation/deletion uses `Option`, and line-boundary navigation uses `Cmd`, matching platform conventions.

