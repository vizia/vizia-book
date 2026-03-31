# List

An input and layout view for displaying a scrollable collection of items.

## When To Use It

Use List when you need to present a sequence of items that users can browse, focus, and optionally select. Lists work well for settings panels, menus, search results, file views, and other repeated content where each item shares the same structure.

## Constructing a List

A `List` takes a reactive or static collection and a closure used to build each item view. The list automatically creates and updates internal signals for each item.

```rust,ignore
let items = Signal::new(vec!["One", "Two", "Three"]);

List::new(cx, items, |cx, _, item| {
	Label::new(cx, item).hoverable(false);
})
.selectable(Selectable::Single)
.on_select(|cx, index| cx.emit(AppEvent::SelectItem(index)));
```

Use modifiers such as `orientation`, `selection_follows_focus`, and scrollbar controls to change behavior:

```rust,ignore
List::new(cx, items, |cx, index, item| {
	Label::new(cx, item)
		.toggle_class("dark", index % 2 == 0)
		.width(Stretch(1.0))
		.height(Pixels(30.0))
		.hoverable(false);
})
.selectable(Selectable::Single)
.selection_follows_focus(true)
.orientation(Orientation::Horizontal)
.show_vertical_scrollbar(false)
.show_horizontal_scrollbar(true);
```

## List Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `selection` | `impl Res<[usize]>` | Sets the selected item indices from an external source. | No selection |
| `on_select` | `Fn(&mut EventContext, usize)` | Called when an item becomes selected. | — |
| `selectable` | `impl Res<Selectable>` | Enables `None`, `Single`, or `Multi` item selection. | `Selectable::None` |
| `min_selected` | `impl Res<usize>` | Minimum number of items that must remain selected. | `0` |
| `max_selected` | `impl Res<usize>` | Maximum number of items that may be selected. | No practical limit |
| `selection_follows_focus` | `impl Res<bool>` | Selects focused items automatically during keyboard navigation. | `false` |
| `horizontal` | `impl Res<bool>` | Sets the list layout to horizontal when `true`. | `false` |
| `scroll_to_cursor` | `bool` | Makes the scrollbar jump to the pointer when pressed. | `false` |
| `on_scroll` | `Fn(&mut EventContext, f32, f32)` | Called when the internal scroll view scrolls. | — |
| `scroll_x` | `impl Res<f32>` | Sets the horizontal scroll position. | `0.0` |
| `scroll_y` | `impl Res<f32>` | Sets the vertical scroll position. | `0.0` |
| `show_horizontal_scrollbar` | `impl Res<bool>` | Controls visibility of the horizontal scrollbar. | `true` |
| `show_vertical_scrollbar` | `impl Res<bool>` | Controls visibility of the vertical scrollbar. | `true` |

## Components and Styling

A `List` renders as a `list` element containing an internal `scrollview`, with each item rendered as a `list-item`.

| Selector | Description |
|---|---|
| `list` | The outermost list container. |
| `list.horizontal` | Applied when the orientation is `Horizontal`. |
| `list.selectable` | Applied when selection is enabled. |
| `list list-item` | The element for each item in the list. |
| `list list-item.focused` | Applied to the currently focused item. |
| `list list-item:checked` | Applied to selected items. |
| `list > scrollview` | The internal scroll view used by the list. |
| `list.horizontal scroll-content` | The scroll content container laid out as a row. |

### Theming

| Selector | Property | Default Theme Value |
|---|---|---|
| `list list-item` | `height` | `30px` |
| `list.selectable list-item` | `background-color` | `transparent` |
| `list.selectable list-item.focused` | `background-color` | `#a3a3a3` |
| `list.selectable list-item:hover` | `background-color` | `#7b7bff` |
| `list.selectable list-item:checked` | `background-color` | `#51afef` |

Customize list items using the list and item selectors:

```css
list list-item {
	padding-left: 8px;
	padding-right: 8px;
}

list.selectable list-item:hover {
	background-color: var(--accent);
}

list.selectable list-item:checked {
	background-color: var(--primary);
}
```

## Accessibility

The list has a role of `List`, and each item has a role of `ListItem`. Focus and selection are exposed separately: keyboard navigation moves focus, and selection changes based on the configured selection mode.

### Adding a Label

To associate visible text with a list, give the label an identifier and associate the list with it using `labeled_by`:

```rust,ignore
VStack::new(cx, |cx| {
	Label::new(cx, "Themes").id("themes_list_label");

	List::new(cx, items, |cx, _, item| {
		Label::new(cx, item).hoverable(false);
	})
	.labeled_by("themes_list_label")
	.selectable(Selectable::Single);
})
.height(Auto)
.gap(Pixels(8.0));
```

### Using `name` Without a Label

If no visible label is present, provide an accessible name directly on the list with `name`:

```rust,ignore
List::new(cx, items, |cx, _, item| {
	Label::new(cx, item).hoverable(false);
})
.name("Themes")
.selectable(Selectable::Single);
```

Use this for compact layouts where a separate label is not shown.

### Pointer Interaction

Users can interact with the list using the pointer in the following ways:

- Click a `list-item` to focus the list and apply selection for that item.
- In `Selectable::Single`, clicking the selected item again clears selection when `min_selected` is `0`.
- In `Selectable::Multi`, clicking toggles an item on or off, subject to `min_selected` and `max_selected`.

### Keyboard Interaction

| Key | Action |
|---|---|
| `ArrowDown` / `ArrowUp` | Move focus to the next or previous item in a vertical list. |
| `ArrowRight` / `ArrowLeft` | Move focus to the next or previous item in a horizontal list. |
| `Space` / `Enter` | Select the focused item. |

