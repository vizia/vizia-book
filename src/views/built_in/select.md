# Select

An input for choosing one item from a dropdown list.

## When To Use It

Use Select when users should choose exactly one item from a fixed list and free-form text input is not needed.

## Constructing a Select

```rust,ignore
use vizia::prelude::*;

let options = Signal::new(vec![
    String::from("Low"),
    String::from("Medium"),
    String::from("High"),
]);
let selected = Signal::new(Some(0usize));

Select::new(cx, options, selected, true)
    .placeholder("Choose an option")
    .on_select(|cx, index| {
        cx.emit(AppEvent::SelectIndex(index));
    });
```

Without a chevron handle:

```rust,ignore
Select::new(cx, options, selected, false)
    .on_select(|cx, index| cx.emit(AppEvent::SelectIndex(index)));
```

## Select Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `placeholder` | `impl Res<impl ToStringLocalized>` | Placeholder text shown when selected index is none/invalid. | empty |
| `on_select` | `Fn(&mut EventContext, usize)` | Called with selected option index. | - |
| `min_selected` | `impl Res<usize>` | Minimum selected count forwarded to internal list behavior. | `0` |
| `max_selected` | `impl Res<usize>` | Maximum selected count forwarded to internal list behavior. | `usize::MAX` |

## Components and Styling

| Selector | Description |
|---|---|
| `select` | Root select element. |
| `select .icon` | Optional chevron handle icon when `show_handle` is true. |
| `select .checkmark` | Check icon shown for selected row in popup list. |

Popup options are rendered through an internal Popover and List while open.

## Accessibility

Select is keyboard navigable through its trigger and popup list content.

- Provide a visible label or explicit accessible name.
- Use `on_select` to keep model state in sync with the chosen index.

Interaction behavior:

- Trigger press opens popup.
- Selecting an option emits callback and closes popup.
- Blur closes popup.
