# Divider

A simple line view used to visually separate content.

## When To Use It

Use `Divider` between related groups of controls, list sections, toolbar regions, or panes to improve visual structure.

## Constructing a Divider

```rust,ignore
use vizia::prelude::*;

Divider::new(cx);

Divider::horizontal(cx);
Divider::vertical(cx);
```

Reactive orientation:

```rust,ignore
Divider::new(cx).orientation(is_vertical.map(|v| {
	if *v { Orientation::Vertical } else { Orientation::Horizontal }
}));
```

## Divider Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `orientation` | `impl Res<Orientation>` | Applies horizontal or vertical divider classes. | context/theme-defined |

## Components and Styling

| Selector | Description |
|---|---|
| `divider` | Root divider element. |
| `divider.horizontal` | Horizontal orientation class. |
| `divider.vertical` | Vertical orientation class. |
| `divider .divider-line` | Inner line element. |

## Accessibility

Divider is decorative. Use semantic labels/headings on surrounding content when separation needs to be conveyed to assistive technologies.

