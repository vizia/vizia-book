# Table

`Table` renders rows and columns with optional sorting, selection, and resizable columns.

## When To Use It

Use `Table` when you need rich row/column presentation with custom cell content, sortable headers, and controlled selection for medium-sized datasets.

## Constructing a Table

```rust,ignore
Table::new(cx, rows, columns, |row: &RowData| row.id)
    .sort_state(sort_state)
    .sort_cycle(TableSortCycle::TriState)
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

Define columns with `TableColumn` and optional header helpers:

```rust,ignore
let columns = vec![
    TableColumn::new(
        "name",
        |cx, sort| TableHeader::new(cx, "Name", sort),
        |cx, row| Label::new(cx, row.map(|r: &RowData| r.name.clone())),
    )
    .width(220.0)
    .min_width(120.0)
    .sortable(true)
    .resizable(true),
];
```

## Table Modifiers

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

## Core Types

- `Table`
- `TableColumn`
- `TableHeader`
- `TableSortState`
- `TableSortDirection`
- `TableSortCycle`

Sorting is controlled by your model: the table emits sort requests via `on_sort`, and you provide sorted rows back into `Table::new`.

## Components and Styling

| Selector | Description |
|---|---|
| `table` | Root table element. |
| `table-header` | Individual column header view (`TableHeader`) containing title and sort indicator. |
| `table .table-header-row` | Header row container. |
| `table .table-header-cell` | Header cell container. |
| `table .table-header-title` | Header title label from `TableHeader`. |
| `table .table-sort-indicator` | Sort indicator label from `TableHeader`. |
| `table .table-body` | Body list container. |
| `table .table-row` | Row container. |
| `table .table-row.odd` / `.even` | Alternating row classes. |
| `table .table-cell` | Cell container. |
| `table .table-header-cell.sortable` | Applied to a header cell that is sortable. |
| `table .table-header-cell.resizable` | Applied to a header cell that is currently resizable. |

## Accessibility

- Provide descriptive header labels and keep row selection state mirrored in model state.
- Combine `selected_row_ids` and `on_row_select` for predictable controlled behavior.
