# Layout Type (Direction)

The `layout-type` determines the direction which a parent will stack its children. A parent element can arrange its children into a vertical stack (`layout-type: column`) or a horizontal stack (`layout-type: row`).

![layout_type](../layout/images/layout_type.svg)

## 

The `layout-type` of a view can be specified using the respective layout modifier:

```rust
VStack::new(cx, |cx|{
    Label::new(cx, "Hello");
    Label::new(cx, "World");
})
.layout_type(LayoutType::Row);
```

Or in CSS:

```css
.container {
    layout-type: row;
}
```
