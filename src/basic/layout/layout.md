# Layout

The position and size of a view is determined by its layout properties. Vizia uses a custom layout system called [morphorm](https://github.com/vizia/morphorm) which can acheive similar results to flexbox.


## Layout Type
By default, children of a view will be arranged one after another in a vertical stack. The `layout-type` property can be used to choose between a vertical `Column` stack, a horizontal `Row` stack, or a [`Grid`](grid.md).

```rust
// The `HStack` container will arrange its children in a row.
// However, the layout type of the `HStack` can be overridden 
// with the `layout_type` modifier. 
HStack::new(cx, |cx|{
    Label::new(cx, "Hello");
    Label::new(cx, "World");
})
.layout_type(LayoutType::Column);
```

## Position Type

The `position-type` property can be used on a child to specify whether the child should be `ParentDirected`, i.e. positioned by its parent to come after the previous child, or `SelfDirected`, i.e. ignore the position of its siblings and be positioned relative to the top left corner of the parent.

```rust
VStack::new(cx, |cx|{
    Label::new(cx, "Hello");
    Label::new(cx, "World")
        .position_type(PositionType::SelfDirected);
});
```
