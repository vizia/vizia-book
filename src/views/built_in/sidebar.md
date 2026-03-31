# Sidebar

`Sidebar` is a resizable side panel with header, scrollable content, and footer sections.

## When To Use It

Use `Sidebar` for persistent navigation, inspector panes, or contextual utility panels that should be resizable by the user.

## Constructing a Sidebar

```rust,ignore
use vizia::prelude::*;

Sidebar::new(
    cx,
    |cx| Label::new(cx, "Navigation"),
    |cx| {
        VStack::new(cx, |cx| {
            Label::new(cx, "Home");
            Label::new(cx, "Settings");
        });
    },
    |cx| Label::new(cx, "v1.0.0"),
);
```

## Sidebar API Notes

- Constructor: `Sidebar::new(cx, header, content, footer)`
- Uses `Resizable` internally for width resizing.

## Components and Styling

| Selector | Description |
|---|---|
| `sidebar` | Root sidebar element. |
| `sidebar .sidebar-header` | Header section. |
| `sidebar .sidebar-content` | Scrollable content section. |
| `sidebar .sidebar-footer` | Footer section. |
| `sidebar .sidebar-divider` | Divider between sections. |

## Accessibility

Keep section content clearly labeled (especially in header) so users can understand sidebar purpose and region boundaries quickly.
