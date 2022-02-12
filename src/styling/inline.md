# Inline Styling

Views can be styled by applying style modifiers to them. For example, to set the background color of a `HStack`:

```rust
HStack::new(cx, |cx|{
    ...
}).background_color(Color::red());
```
Inline style properties override any shared styling which targets the same view.

## Background Color
The `background-color` property can be applied to any view. The color can be specified as `rgb`, `rgba`, a color keyword, or `hex` code.

```rust
Element::new(cx).background_color(Color::red());
```

## Border Color
The `border-color` property can be applied to any view but is only visible with a non-zero `border-width`. The color can be specified as `rgb`, `rgba`, a color keyword, or `hex` code.

```rust
Element::new(cx)
    .border_width(Pixels(1.0))
    .border_color(Color::blue());
```

## Border Width
The `border-width` property can be applied to any view or control. However, by default, the `border-color` is transparent, so a border color must be specified to observe a border. 

```rust
Label::new(cx, "Hello World")
    .border_width(Pixels(1.0))
    .border_color(Color::blue());
```



