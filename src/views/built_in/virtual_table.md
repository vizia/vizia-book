# VirtualTable

`VirtualTable` is a virtualized table optimized for large datasets.

## When To Use It

Use `VirtualTable` when table datasets are large enough that rendering all rows at once is too expensive. It keeps UI performance stable by reusing row views and rendering only visible rows.

## Constructing a VirtualTable

```rust,ignore
VirtualTable::new(cx, rows, columns, 32.0, |row: &RowData| row.id)
    .sort_state(sort_state)
    .resizable_columns(true)
    .selectable(Selectable::Single)
    .selected_row_ids(selected_ids)
    .on_sort(|cx, key, direction| {
        cx.emit(AppEvent::SortBy(key, direction));
    })
    .on_row_select(|cx, id| {
        cx.emit(AppEvent::SelectRow(id));
    });
```

`item_height` is required and should match your row layout height for smooth virtualization.

## VirtualTable Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `sort_state` | `impl Res<Option<TableSortState<K>>>` | Controlled sort column + direction. | `None` |
| `resizable_columns` | `impl Res<impl Into<bool>>` | Enables/disables column resize interactions globally. | `false` |
| `sort_cycle` | `impl Res<impl Into<TableSortCycle>>` | Header click sort behavior (`BiState` or `TriState`). | `BiState` |
| `selectable` | `impl Res<impl Into<Selectable>>` | Row selection mode. | `Selectable::None` |
| `selection_follows_focus` | `impl Res<impl Into<bool>>` | Select rows as focus moves. | `false` |
| `selected_row_ids` | `impl Res<[Id]>` | Controlled selected row IDs. | empty |
| `on_sort` | `Fn(&mut EventContext, K, TableSortDirection)` | Called when header requests sort change. | - |
| `on_row_select` | `Fn(&mut EventContext, Id)` | Called when a row is selected. | - |

## API Notes

- Constructor: `VirtualTable::new(cx, rows, columns, item_height, row_id)`
- Uses `VirtualList` internally for viewport-efficient row rendering.
- Shares sort/selection patterns with `Table`.

## Components and Styling

| Selector | Description |
|---|---|
| `virtual-table` | Root virtual table element. |
| `virtual-table .table-header-row` | Header row container. |
| `virtual-table .table-header-cell` | Header cell container. |
| `virtual-table .table-header-title` | Header title label from `TableHeader`. |
| `virtual-table .table-sort-indicator` | Sort indicator label from `TableHeader`. |
| `virtual-table .table-body` | Virtualized body container. |
| `virtual-table .table-row` | Recycled row container. |
| `virtual-table .table-row.odd` / `.even` | Alternating row classes. |
| `virtual-table .table-cell` | Cell container. |

## Accessibility

- Keep row identity stable via `row_id` so controlled selection remains consistent during virtualization.
- Provide clear header labels and selection feedback when rows are recycled.

