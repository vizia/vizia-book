# Grid

A container that arranges child views in explicit rows and columns.

## When To Use It

Use `Grid` when layout should be based on row/column placement instead of linear stacking, such as dashboards, control panels, and form-like arrangements.

## Constructing a Grid

`Grid::new` takes column and row tracks and a content builder.

```rust,ignore
use vizia::prelude::*;

Grid::new(
	cx,
	vec![Stretch(1.0), Stretch(2.0)],
	vec![Pixels(40.0), Stretch(1.0)],
	|cx| {
		Label::new(cx, "Header")
			.column_span(2);

		Label::new(cx, "Sidebar")
			.row_start(1)
			.column_start(0);

		Label::new(cx, "Content")
			.row_start(1)
			.column_start(1);
	},
);
```

## Grid API Notes

- Constructor: `Grid::new(cx, grid_columns, grid_rows, content)`
- `Grid` sets `layout_type(LayoutType::Grid)` internally.
- Child placement is controlled with grid layout modifiers such as:
- `column_start`, `column_span`, `row_start`, `row_span`.

## Components and Styling

| Selector | Description |
|---|---|
| `grid` | Root grid container. |

Use layout modifiers for structure and normal style selectors for appearance.

## Accessibility

`Grid` uses role `GenericContainer`. Keep child order and focus order predictable when placing elements across rows and columns.

