# Space

The spacing of an element determines its position relative to its normal stack position if parent-directed, or relative to the top left of its parent if self directed.

The space is specified with [`Units`](units.md) and is conceptually similar to margins.

The spacing can be specified for individual sides using the `left`, `right`, `top`, and `bottom` properties. For example:

```rust
Element::new(cx).left(Pixels(50.0));
```

Additionally, spacing can be applied to all sides simultaneously using the `space` property:

```rust
Element::new(cx).space(Pixels(50.0));
```

# Child Space

While the space affects individual elements within a stack or grid, the child-space affects all of the children of an element, as long as the corresponding individual space of the child is set to `Auto` units.

// Image here

There are two additional properties for affecting the space between elements in a stack. The `row-between` property affects the vertical space between elements stacked vertically in rows (e.g. a `VStack`), and the `col-beween` property affects the horizontal space between elements stacked horizontally in columns (e.g. a `HStack`).

// Image here