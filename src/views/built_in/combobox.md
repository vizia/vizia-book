# ComboBox

An input that combines text entry with a filtered popup list of options.

## When To Use It

Use ComboBox when users should be able to type to narrow a list before selecting an item. It is useful for medium or large option sets where scanning a full menu is slower than filtering.

## Constructing a ComboBox

A ComboBox takes a list signal and a selected index signal.

```rust,ignore
let options = Signal::new(vec![
	String::from("Apple"),
	String::from("Banana"),
	String::from("Cherry"),
]);
let selected = Signal::new(0usize);

ComboBox::new(cx, options, selected)
	.on_select(|cx, index| cx.emit(AppEvent::SelectOption(index)));
```

As the user types, ComboBox filters matching options. Enter confirms the highlighted option, Escape closes the popup, and arrow keys change the highlighted row.

## ComboBox Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_select` | `Fn(&mut EventContext, usize)` | Called with the selected source index when an option is chosen. | - |

## Components and Styling

ComboBox is composed from a textbox and a popover list.

| Selector | Description |
|---|---|
| `combobox` | Root ComboBox element. |
| `combobox .title` | Internal textbox element used for editing/filtering text. |

Popup list content is rendered in a Popover and List while open.

## Accessibility

ComboBox builds on Textbox and List interaction patterns.

- Ensure the control has a visible label, or set an accessible name.
- Keyboard users can open/type/filter/select without pointer input.

Keyboard interaction:

| Key | Action |
|---|---|
| `ArrowDown` | Move highlight to next filtered option |
| `ArrowUp` | Move highlight to previous filtered option |
| `Enter` | Select highlighted option |
| `Escape` | Close popup (or submit existing value when already closed) |

