# VirtualList

A high-performance list that recycles item views and renders only visible rows.

## When To Use It

Use `VirtualList` for large datasets where creating a view for every item would be expensive. It is ideal for logs, long search results, large tables-of-content, and file lists.

## Constructing a VirtualList

`VirtualList::new` takes a list source, fixed item height, and item builder.

```rust,ignore
let rows = Signal::new((0..10_000).collect::<Vec<usize>>());

VirtualList::new(cx, rows, 28.0, |cx, index, item| {
	Label::new(cx, item.map(|value| format!("Row {}: {}", index, value)))
})
.selectable(Selectable::Single)
.on_select(|cx, index| cx.emit(AppEvent::SelectRow(index)));
```

For custom data sources, use `new_generic` with explicit length/index accessors.

## VirtualList Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `selection` | `impl Res<[usize]>` | Sets selected indices from external state. | no selection |
| `on_select` | `Fn(&mut EventContext, usize)` | Called when an item is selected. | - |
| `selectable` | `impl Res<Selectable>` | Enables `None`, `Single`, or `Multi` selection. | `Selectable::None` |
| `selection_follows_focus` | `impl Res<bool>` | Select focused item during keyboard navigation. | `false` |
| `scroll_to_cursor` | `bool` | Scrollbar jumps to pointer when pressed. | `true` |
| `on_scroll` | `Fn(&mut EventContext, f32, f32)` | Called when list scroll position changes. | - |
| `scroll_x` | `impl Res<f32>` | Sets horizontal scroll position. | `0.0` |
| `scroll_y` | `impl Res<f32>` | Sets vertical scroll position. | `0.0` |
| `show_horizontal_scrollbar` | `impl Res<bool>` | Controls horizontal scrollbar visibility. | `false` |
| `show_vertical_scrollbar` | `impl Res<bool>` | Controls vertical scrollbar visibility. | `true` |

## Components and Styling

| Selector | Description |
|---|---|
| `virtual-list` | Root element. |
| `virtual-list.selectable` | Applied when selection is enabled. |
| `virtual-list list-item` | Recycled list item elements. |
| `virtual-list list-item.focused` | Focused item state. |
| `virtual-list list-item:checked` | Selected item state. |

VirtualList uses a `ScrollView` internally and absolute positioning for visible rows.

## Accessibility

`VirtualList` uses role `List` and row items use list-item semantics.

Keyboard interaction:

| Key | Action |
|---|---|
| `ArrowDown` / `ArrowUp` | Move focused item |
| `Space` / `Enter` | Select focused item |

For horizontal virtualized lists, use custom key handling in your container logic.

