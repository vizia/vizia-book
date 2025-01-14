# Alignment

The `alignment` property determines how the children will be aligned within a view. There are 9 options:

- `top-left`
- `top-center`
- `top-right`
- `left`
- `center`
- `right`
- `bottom-left`
- `bottom-center`
- `bottom-right`

Alignment also applies to text within a view, unless overridden by the `text-align` property.

![alignment](../layout/images/alignment.svg)

## 

The `alignment` of a view can be specified using the respective layout modifier:

```rust
VStack::new(cx, |cx|{
    Label::new(cx, "Hello");
    Label::new(cx, "World");
})
.alignment(Alignment::Center);
```

Or in CSS:

```css
.container {
    alignment: center;
}
```
