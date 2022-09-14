# Units

Many of the layout properties used in vizia use the `Units` type to specify their value. The `Units` type has four variants:

- Pixels
- Percentage
- Stretch
- Auto

## Pixels

The **pixels** variant allows space and size to be specified with a fixed number of logical pixels. The physical space or size is determined by the window scale factor:

```
physical_pixels = logical_pixels * scale_factor
```

## Percentage

The **percentage** variant allows space and size to be specified as a fraction of the parent size: 

```
computed_value = percentage_value * parent_size / 100.0
```

The dimension is consistent, so specifying the `left` space as a percentage will use the parent `width` to calculate the desired space.

## Stretch

The **stretch** variant allows space and size within a stack to be specified as a ratio of the remaining free space of the parent after subtracting any fixed-size space and size.

This is best understood with an example. For two views in a horizontal stack, the first with a width of stretch factor 1.0 and the second with a width of stretch factor 2.0, the first will occupy 1/3 of the horizontal space and the second will occupy 2/3 of the horizontal space.

// Image here

## Auto
