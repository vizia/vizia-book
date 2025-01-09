# List of supported style properties

This section provides a list of the currently supported style properties in vizia. This excludes layout properties which are detailed in the [layout section](../layout/layout.md) of this guide.

For the corresponding modifier name, replace any hyphens with underscores. For example, `background-color` in CSS becomes the `background_color()` modifier in Rust.

| Property                     | Type                 | Initial Value     | Inherited | Animatable |
|------------------------------|----------------------|-------------------|-----------|------------|
| `backdrop-filter`            | `Filter`             | `none`            | No        | Yes        |
| `background-color`           | `Color`              | `transparent`     | No        | Yes        |
| `background-image`           | `BackgroundImage`    | `none`            | No        | No         |
| `background-size`            | `BackgroundSize`     | `auto auto`       | No        | Yes        |
| `blend-mode`                 | `BlendMode`          | `normal`          | No        | No         |
| `border`                     | shorthand            |                   |           |            |
| `border-color`               | `Color`              | `transparent`     | No        | Yes        |
| `border-style`               | `BorderStyle`        | `solid`           | No        | No         |
| `border-width`               | `LengthOrPercentage` | `0`               | No        | Yes        |
| `caret-color`                | `Color`              | `transparent`     | Yes       | Yes        |
| `clip-path`                  | `ClipPath`           | `none`            | No        | Yes        |
| `color`                      | `Color`              | `transparent`     | Yes       | Yes        |
| `corner-radius`              | `CornerRadius`       | `0`               | No        | Yes        |
| `corner-top-left-radius`     | `LengthOrPercentage` | `0`               | No        | Yes        |
| `corner-top-right-radius`    | `LengthOrPercentage` | `0`               | No        | Yes        |
| `corner-bottom-left-radius`  | `LengthOrPercentage` | `0`               | No        | Yes        |
| `corner-bottom-right-radius` | `LengthOrPercentage` | `0`               | No        | Yes        |
| `corner-shape`               | `Rect<CornerShape>`  | `round`           | No        | No         |
| `corner-top-left-shape`      | `CornerShape`        | `round`           | No        | No         |
| `corner-top-right-shape`     | `CornerShape`        | `round`           | No        | No         |
| `corner-bottom-left-shape`   | `CornerShape`        | `round`           | No        | No         |
| `corner-bottom-right-shape`  | `CornerShape`        | `round`           | No        | No         |
| `cursor`                     | `CursorIcon`         | `default`         | No        | No         |
| `display`                    | `Display`            | `flex`            | No        | Yes        |
| `font-family`                | `FontFamily`         |                   | Yes       | No         |
| `font-size`                  | `FontSize`           | `16`              | Yes       | Yes        |
| `font-slant`                 | `FontSlant`          | `normal`          | Yes       | No         |
| `font-weight`                | `FontWidth`          | `regular`         | Yes       | Yes        |
| `font-width`                 | `FontWeight`         | `normal`          | Yes       | Yes        |
| `font-variation-settings`    | `FontVariation`      | `none`            | Yes       |            |
| `line-clamp`                 | `u32`                | `1`               | No        | No         |
| `opacity`                    | `f32`                | `1.0`             | No        | Yes        |
| `outline`                    | shorthand            |                   | No        |            |
| `outline-color`              | `Color`              | `transparent`     | No        | Yes        |
| `outline-offset`             | `LengthOrPercentage` | `0`               | No        | Yes        |
| `outline-width`              | `LengthOrPercentage` | `0`               | No        | Yes        |
| `overflow`                   | `Overflow`           | `visible`         | No        | No         |
| `overflow-x`                 | `Overflow`           | `visible`         | No        | No         |
| `overflow-y`                 | `Overflow`           | `visible`         | No        | No         |
| `pointer-events`             | `PointerEvents`      | `auto`            | No        | No         |
| `rotate`                     | `Angle`              | `0`               | No        | Yes        |
| `scale`                      | `Scale`              | `1`               | No        | Yes        |
| `selection-color`            | `Color`              | `transparent`     | Yes       | Yes        |
| `shadow`                     | `Shadow`             |                   | No        | Yes        |
| `text-align`                 | `TextAlign`          | `left`            | No        | No         |
| `text-decoration`            | shorthand            |                   |           |            |
| `text-decoration-line`       |                      |                   | Yes       | No         |
| `text-overflow`              |                      | `clip`            | No        | No         |
| `text-wrap`                  | `bool`               | `true`            | No        | No         |
| `transform`                  | `Transform`          |                   | No        | Yes        |
| `transform-origin`           | `Position`           |                   | No        | Yes        |
| `transition`                 |                      |                   |           |            |
| `translate`                  | `Translate`          |                   | No        | Yes        |
| `visibility`                 | `Visibility`         |                   | No        | No         |
| `z-index`                    | `i32`                | `0`               | No        | No         |