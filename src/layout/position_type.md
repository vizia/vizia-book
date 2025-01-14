# Position Type

The position type property determines whether a view should be positioned in-line with its siblings in a stack (`position-type: relative`), which is the default, or out-of-line and independently of its siblings (`position-type: absolute`).

![position-type](../layout/images/position_type.svg)

## 

The `position-type` of a view can be specified using the respective layout modifier:

```rust
VStack::new(cx, |cx|{
    Label::new(cx, "Hello");
    Label::new(cx, "World");
})
.position_type(PositionType::Absolute);
```

Or in CSS:

```css
.container {
    position-type: absolute;
}
```
