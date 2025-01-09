# Gap

The `gap` property, shorthand for `horizontal-gap` and `vertical-gap`, determines the spacing between the children of a view. It can be specified as pixels, a percentage, or a stretch factor.  

![gap](../layout/images/gap.svg)

## Stretch Gap

Setting the gap to a stretch factor will result in evenly distributed space between children.

![stretch_gap](../layout/images/stretch_gap.svg)

## Negative Gap

A negative pixels value for gap can be used and results in the children of the view overlapping.

![negative_gap](../layout/images/negative_gap.svg)

## 

The `gap` of a view can be specified using the respective layout modifier:

```rust
VStack::new(cx, |cx|{
    Label::new(cx, "Hello");
    Label::new(cx, "World");
})
.gap(Pixels(20.0));
```

Or in CSS:

```css
.container {
    gap: 20px;
}
```

The `horizontal-gap` and `vertical-gap` can also be set independently:

```rust
VStack::new(cx, |cx|{
    Label::new(cx, "Hello");
    Label::new(cx, "World");
})
.horizontal_gap(Pixels(20.0))
.vertical_gap(Pixels(10.0));
```

Or in CSS:

```css
.container {
    horizontal-gap: 20px;
    vertical-gap: 10px;
}
```

