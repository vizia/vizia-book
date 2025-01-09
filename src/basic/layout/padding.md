# Padding

The `padding` property, Shorthand for `padding-left`, `padding-top`, `padding-right`, and `padding-bottom`, determines the spacing between the parent bounds and the children of a view. It can be specified as pixels or a percentage.

![padding](../layout/images/padding.svg)

## 

The `padding-left`, `padding-top`, `padding-right`, and `padding-bottom` of a view can be specified using the respective layout modifiers:

```rust
Label::new(cx, "Hello World")
    .background_color(Color::gray())
    .padding_left(Pixels(5.0))
    .padding_top(Pixels(10.0))
    .padding_right(Pixels(15.0))
    .padding_bottom(Pixels(20.0));
```

The `padding` modifier can also be used to set all four sides simultaneously:

```rust
Label::new(cx, "Hello World")
    .background_color(Color::gray())
    .padding(Pixels(20.0));
```

Or in CSS:

```css
.hello_label {
    padding_left: 5px;
    padding_top: 10px;
    padding_right: 15px;
    padding_bottom: 20px;
}
```