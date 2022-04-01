# Style Properties

## Background

### Background Color
The `background-color` property can be applied to any view. The color can be specified as `rgb`, `rgba`, a color keyword, or `hex` code.
```rust
Element::new(cx).background_color(Color::red());
```
```css
element {
    background-color: red;
}
```

### Background Gradient

### Background Image

## Border
### Border Color
The `border-color` property can be applied to any view but is only visible with a non-zero `border-width`. The color can be specified as `rgb`, `rgba`, a color keyword, or `hex` code.

```rust
Element::new(cx)
    .border_width(Pixels(1.0))
    .border_color(Color::blue());
```
```css
element {
    border-width: 1px;
    border-color: blue;
}
```

### Border Width
The `border-width` property can be applied to any view or control. However, by default, the `border-color` is transparent, so a border color must be specified to observe a border. 

```rust
Element::new(cx)
    .border_width(Pixels(1.0))
    .border_color(Color::blue());
```
```css
element {
    border-width: 1px;
    border-color: blue;
}
```
### Border Radius
```rust
Element::new(cx).border_radius(Pixels(5.0));
```

The border radius can also be set on individual corners:
- border_radius_top_left
- border_radius_top_right
- border_radius_bottom_left
- border_radius_bottom_right

```rust
Element::new(cx)
    .border_radius_top_left(Pixels(5.0))
    .border_radius_bottom_right(Pixels(5.0));
```
// Image here

### Border Corner Shape

The border corner shape can also be set on individual corners:
- border_shape_top_left
- border_shape_top_right
- border_shape_bottom_left
- border_shape_bottom_right

```rust
Element::new(cx)
    .border_shape_top_left(Pixels(5.0))
    .border_shape_bottom_right(Pixels(5.0));
```
// Image here


