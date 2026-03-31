# List of supported style properties

This section provides a list of the currently supported style properties in vizia. This excludes layout properties which are detailed in the [layout section](../layout/layout.md) of this guide.

For the corresponding modifier name, replace any hyphens with underscores. For example, `background-color` in CSS becomes the `background_color()` modifier in Rust.

| Property                     | Type                 | Initial Value     | Inherited | Animatable |
|------------------------------|----------------------|-------------------|-----------|------------|
| `display`                    | `Display`            | `flex`            | No        | Yes        |
| `visibility`                 | `Visibility`         | `visible`         | No        | No         |
| `overflow`                   | `Overflow`           | `visible`         | No        | No         |
| `overflow-x`                 | `Overflow`           | `visible`         | No        | No         |
| `overflow-y`                 | `Overflow`           | `visible`         | No        | No         |
| `clip-path`                  | `ClipPath`           | `none`            | No        | Yes        |
| `opacity`                    | `Opacity`            | `1.0`             | No        | Yes        |
| `z-index`                    | `i32`                | `0`               | No        | No         |
| `blend-mode`                 | `BlendMode`          | `normal`          | No        | No         |
| `backdrop-filter`            | `Filter`             | `none`            | No        | Yes        |
| `filter`                     | `Filter`             | `none`            | No        | Yes        |
| `background-color`           | `Color`              | `transparent`     | No        | Yes        |
| `background-image`           | `Vec<BackgroundImage>` | `none`          | No        | Yes        |
| `background-size`            | `Vec<BackgroundSize>` | `auto auto`      | No        | Yes        |
| `fill`                       | `Color`              | `transparent`     | No        | Yes        |
| `border`                     | shorthand            |                   |           |            |
| `border-color`               | `Color`              | `transparent`     | No        | Yes        |
| `border-style`               | `BorderStyle`        | `solid`           | No        | No         |
| `border-width`               | `BorderWidth`        | `0`               | No        | Yes        |
| `caret-color`                | `Color`              | `transparent`     | Yes       | Yes        |
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
| `font-family`                | `FontFamily`         |                   | Yes       | No         |
| `font-size`                  | `FontSize`           | `16`              | Yes       | Yes        |
| `font-slant`                 | `FontSlant`          | `normal`          | Yes       | No         |
| `font-weight`                | `FontWeight`         | `regular`         | Yes       | No         |
| `font-width`                 | `FontWidth`          | `normal`          | Yes       | No         |
| `font-variation-settings`    | `Vec<FontVariation>` | `none`            | Yes       | No         |
| `line-clamp`                 | `LineClamp`          | `none`            | No        | No         |
| `outline`                    | shorthand            |                   | No        |            |
| `outline-color`              | `Color`              | `transparent`     | No        | Yes        |
| `outline-offset`             | `LengthOrPercentage` | `0`               | No        | Yes        |
| `outline-width`              | `BorderWidth`        | `0`               | No        | Yes        |
| `pointer-events`             | `PointerEvents`      | `auto`            | No        | No         |
| `rotate`                     | `Angle`              | `0`               | No        | Yes        |
| `scale`                      | `Scale`              | `1`               | No        | Yes        |
| `selection-color`            | `Color`              | `transparent`     | Yes       | Yes        |
| `shadow`                     | `Shadow`             |                   | No        | Yes        |
| `text-align`                 | `TextAlign`          | `left`            | No        | No         |
| `text-decoration`            | shorthand            |                   |           |            |
| `text-decoration-line`       | `TextDecorationLine` | `none`            | Yes       | No         |
| `text-overflow`              | `TextOverflow`       | `clip`            | No        | No         |
| `text-stroke`                | `TextStroke`         | `none`            | Yes       | No         |
| `text-stroke-width`          | `Length`             | `0`               | Yes       | No         |
| `text-stroke-style`          | `TextStrokeStyle`    | `solid`           | Yes       | No         |
| `text-wrap`                  | `bool`               | `true`            | No        | No         |
| `underline-style`            | `TextDecorationStyle` | `solid`          | Yes       | No         |
| `underline-thickness`        | `LengthOrPercentage` | `auto`            | Yes       | No         |
| `underline-color`            | `Color`              | `currentColor`    | Yes       | Yes        |
| `overline-style`             | `TextDecorationStyle` | `solid`          | Yes       | No         |
| `overline-thickness`         | `LengthOrPercentage` | `auto`            | Yes       | No         |
| `overline-color`             | `Color`              | `currentColor`    | Yes       | Yes        |
| `strikethrough-style`        | `TextDecorationStyle` | `solid`          | Yes       | No         |
| `strikethrough-thickness`    | `LengthOrPercentage` | `auto`            | Yes       | No         |
| `strikethrough-color`        | `Color`              | `currentColor`    | Yes       | Yes        |
| `transform`                  | `Vec<Transform>`     | `none`            | No        | Yes        |
| `transform-origin`           | `Position`           |                   | No        | Yes        |
| `transition`                 | `Vec<Transition>`    | `none`            | No        | No         |
| `translate`                  | `Translate`          |                   | No        | Yes        |