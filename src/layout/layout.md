# Layout

The position and size of a view is determined by its layout properties. Vizia uses a custom layout system called [morphorm](https://github.com/vizia/morphorm) which can achieve similar results to flexbox.

The following sections details the functioning of the layout system:

- [Size](./size.md)
- [Layout Type](./layout_type.md)
- [Alignment](./alignment.md)
- [Padding](./padding.md)
- [Gap](./gap.md)
- [Wrap](./wrap.md)
- [Position Type](./position_type.md)
- [Spacing](./spacing.md)
- [Constraints](./constraints.md)
- [Grid](./grid.md)

## Units

Many of the layout properties used in vizia use the `Units` type to specify their value. The `Units` type has four variants:

- Pixels
- Percentage
- Stretch
- Auto

Not all variants may have an effect on a particular property. For example, the padding properties do not use the stretch or auto variants.

### Pixels

The **pixels** variant allows space and size to be specified with a fixed number of logical pixels. The physical space or size is determined by the window scale factor:

```text
physical_pixels = logical_pixels * scale_factor
```

### Percentage

The **percentage** variant allows space and size to be specified as a fraction of the parent size: 

```text
computed_value = percentage_value * parent_size / 100.0
```

The dimension is consistent, so specifying the `left` space as a percentage will use the parent `width` to calculate the desired space.

### Stretch

The **stretch** variant allows space and size within a stack to be specified as a ratio of the remaining free space of the parent after subtracting any fixed-size space and size.

This is best understood with an example. For two views in a horizontal stack, the first with a width of stretch factor 1.0 and the second with a width of stretch factor 2.0, the first will occupy 1/3 of the horizontal free space and the second will occupy 2/3 of the horizontal free space.

### Auto

The **auto** variant is typically the default value for a layout property and has no effect. The exception to this is with the size and size constraint properties, where an auto value represents the total size of the children of a view. So for example, setting the `width` to `auto` will cause the view to 'hug' its children in the horizontal direction.

## Layout Properties

This section provides a list of the currently supported style properties in vizia.

| Property                     | Type                 | Initial Value     | Inherited | Animatable |
|------------------------------|----------------------|-------------------|-----------|------------|
| `layout-type`                | `LayoutType`         | `column`          | No        | No         |
| `position-type`              | `PositionType`       | `relative`        | No        | No         |
| `alignment`                  | `Alignment`          | `stretch`         | No        | No         |
| `direction`                  | `Direction`          | `left-to-right`   | No        | No         |
| `wrap`                       | `LayoutWrap`         | `no-wrap`         | No        | No         |
| `grid-columns`               | `Vec<Units>`         | `-`               | No        | No         |
| `grid-rows`                  | `Vec<Units>`         | `-`               | No        | No         |
| `column-start`               | `usize`              | `1`               | No        | No         |
| `column-span`                | `usize`              | `1`               | No        | No         |
| `row-start`                  | `usize`              | `1`               | No        | No         |
| `row-span`                   | `usize`              | `1`               | No        | No         |
| `space`                      | shorthand            | `-`               | No        | Yes        |
| `left`                       | `Units`              | `auto`            | No        | Yes        |
| `right`                      | `Units`              | `auto`            | No        | Yes        |
| `top`                        | `Units`              | `auto`            | No        | Yes        |
| `bottom`                     | `Units`              | `auto`            | No        | Yes        |
| `size`                       | shorthand            | `-`               | No        | Yes        |
| `width`                      | `Units`              | `auto`            | No        | Yes        |
| `height`                     | `Units`              | `auto`            | No        | Yes        |
| `min-size`                   | shorthand            | `-`               | No        | Yes        |
| `min-width`                  | `Units`              | `auto`            | No        | Yes        |
| `min-height`                 | `Units`              | `auto`            | No        | Yes        |
| `max-size`                   | shorthand            | `-`               | No        | Yes        |
| `max-width`                  | `Units`              | `auto`            | No        | Yes        |
| `max-height`                 | `Units`              | `auto`            | No        | Yes        |
| `padding`                    | shorthand            | `-`               | No        | Yes        |
| `padding-left`               | `Units`              | `0px`             | No        | Yes        |
| `padding-right`              | `Units`              | `0px`             | No        | Yes        |
| `padding-top`                | `Units`              | `0px`             | No        | Yes        |
| `padding-bottom`             | `Units`              | `0px`             | No        | Yes        |
| `gap`                        | shorthand            | `-`               | No        | Yes        |
| `horizontal-gap`             | `Units`              | `0px`             | No        | Yes        |
| `vertical-gap`               | `Units`              | `0px`             | No        | Yes        |
| `min-gap`                    | shorthand            | `-`               | No        | Yes        |
| `min-horizontal-gap`         | `Units`              | `auto`            | No        | Yes        |
| `min-vertical-gap`           | `Units`              | `auto`            | No        | Yes        |
| `max-gap`                    | shorthand            | `-`               | No        | Yes        |
| `max-horizontal-gap`         | `Units`              | `auto`            | No        | Yes        |
| `max-vertical-gap`           | `Units`              | `auto`            | No        | Yes        |