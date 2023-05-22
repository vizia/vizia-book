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

While the space affects individual elements within a stack or grid, the child-space is a property on the parent which affects all of the children of an element, as long as the corresponding individual space of the child is set to `Auto` units.

For example, setting the `child-left` property of a `VStack` will add space to the left side of each of its children (as long as those children have a `left` property set to `auto`, which it is by default). However, setting the `child-top` of a `VStack` will only apply to the top side of the first element in the column.

We can use the `child-space` property to center the children of a container by using the `Stretch` unit variant:
```rust
VStack::new(cx, |cx|{
    Label::new(cx, "Hello");
    LAbel::new(cx, "World");
})
.child_space(Stretch(1.0));
```

There are two additional properties for affecting the space between elements in a stack. The `row-between` property affects the vertical space between elements stacked vertically in rows (e.g. a `VStack`), and the `col-between` property affects the horizontal space between elements stacked horizontally in columns (e.g. a `HStack`).

// Image here