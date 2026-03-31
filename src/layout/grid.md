# Grid Layout

Grid layout positions children at specific cells in a two-dimensional grid. Set the parent's `layout_type` to `Grid` and define columns and rows using `grid_columns` and `grid_rows`.

## Defining a grid

Set column and row sizes on the parent view:

```rust,ignore
Element::new(cx, |cx| {
    // child items
})
.layout_type(LayoutType::Grid)
.grid_columns(vec![Pixels(100.0), Stretch(1.0), Pixels(100.0)])
.grid_rows(vec![Pixels(50.0), Pixels(50.0)]);
```

Or use the `Grid` built-in view, which sets up grid layout for you:

```rust,ignore
Grid::new(
    cx,
    vec![Pixels(100.0), Stretch(1.0), Pixels(100.0)], // columns
    vec![Pixels(48.0), Pixels(48.0)],                 // rows
    |cx| {
        // build children here
    },
);
```

## Placing children

Children are placed using `column_start`, `column_span`, `row_start`, and `row_span` modifiers (1-indexed):

```rust,ignore
Label::new(cx, "Header")
    .column_start(1)
    .column_span(3)
    .row_start(1);

Label::new(cx, "Sidebar")
    .column_start(1)
    .row_start(2);

Label::new(cx, "Content")
    .column_start(2)
    .column_span(2)
    .row_start(2);
```

## Grid modifiers

| Modifier | Description |
|---|---|
| `layout_type(LayoutType::Grid)` | Enables grid layout on this view. |
| `grid_columns(Vec<Units>)` | Defines the width of each column. |
| `grid_rows(Vec<Units>)` | Defines the height of each row. |
| `column_start(usize)` | The 1-indexed column where this child begins. |
| `column_span(usize)` | How many columns this child occupies. |
| `row_start(usize)` | The 1-indexed row where this child begins. |
| `row_span(usize)` | How many rows this child occupies. |

## Units in grid sizing

Grid column and row sizes support all standard `Units` variants:

- `Pixels(f32)` — fixed size.
- `Percentage(f32)` — fraction of parent size.
- `Stretch(f32)` — ratio of remaining free space.
- `Auto` — size to fit content.

## CSS

Grid properties are also available in CSS:

```css
.grid-container {
    layout-type: grid;
    grid-columns: 100px 1s 100px;
    grid-rows: 48px 48px;
}

.header {
    column-start: 1;
    column-span: 3;
    row-start: 1;
}
```

## See also

- [Layout](./layout.md)
- [Layout Type](./layout_type.md)
- [Grid (built-in view)](../views/built_in/grid.md)
