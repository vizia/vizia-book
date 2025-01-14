# Layout

The position and size of a view is determined by its layout properties. Vizia uses a custom layout system called [morphorm](https://github.com/vizia/morphorm) which can achieve similar results to flexbox.

The following sections details the functioning of the layout system:

- [Size](./size.md)
- [Layout Type](./layout_type.md)
- [Alignment](./alignment.md)
- [Padding](./padding.md)
- [Gap](./gap.md)
- [Position Type](./position_type.md)
- [Spacing](./spacing.md)
- [Constraints](./constraints.md)

## Units

Many of the layout properties used in vizia use the `Units` type to specify their value. The `Units` type has four variants:

- Pixels
- Percentage
- Stretch
- Auto

Not all variants may have an effect on a particular property. For example, the padding properties do not use the stretch or auto variants.

### Pixels

The **pixels** variant allows space and size to be specified with a fixed number of logical pixels. The physical space or size is determined by the window scale factor:

```
physical_pixels = logical_pixels * scale_factor
```

### Percentage

The **percentage** variant allows space and size to be specified as a fraction of the parent size: 

```
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
| `gap`                        | shorthand            |                   |           |            |
| `horizontal-gap`             | `Units`              | `auto`            | No        | Yes        |
| `vertical-gap`               | `Units`              | `auto`            | No        | Yes        |
| `min-gap`                    | shorthand            |                   |           |            |
| `min-horizontal-gap`         | `Units`              | `auto`            | No        | Yes        |
| `min-vertical-gap`           | `Units`              | `auto`            | No        | Yes        |
| `max-gap`                    | shorthand            |                   |           |            |
| `max-horizontal-gap`         | `Units`              | `0px`             | No        | Yes        |
| `max-vertical-gap`           | `Units`              | `solid`           | No        | Yes        |
| `padding`                    | shorthand            |                   |           |            |
| `padding-left`               | `Units`              | `auto`            | No        | Yes        |
| `padding-right`              | `Units`              | `auto`            | No        | Yes        |
| `padding-top`                | `Units`              | `auto`            | No        | Yes        |
| `padding-bottom`             | `Units`              | `auto`            | No        | Yes        |
| `size`                       | shorthand            |                   |           |            |
| `width`                      | `Units`              | `1s`              | No        | Yes        |
| `height`                     | `Units`              | `1s`              | No        | Yes        |
| `min-size`                   | shorthand            |                   |           |            |
| `min-width`                  | `Units`              | `auto`            | No        | Yes        |
| `min-height`                 | `Units`              | `auto`            | No        | Yes        |
| `max-size`                   | shorthand            |                   |           |            |
| `max-width`                  | `Units`              | `auto`            | No        | Yes        |
| `max-height`                 | `Units`              | `auto`            | No        | Yes        |
| `space`                      | shorthand            |                   |           |            |
| `left`                       | `Units`              | `auto`            | No        | Yes        |
| `right`                      | `Units`              | `auto`            | No        | Yes        |
| `top`                        | `Units`              | `auto`            | No        | Yes        |
| `bottom`                     | `Units`              | `auto`            | No        | Yes        |