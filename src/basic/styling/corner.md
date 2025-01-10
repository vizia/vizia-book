# Corner Properties

## Corner Radius

The `corner-radius` property rounds the corners of a view's outer border edge. You can set a single radius to make circular corners.

```css
/* Radius is set for all 4 sides */
corner-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
corner-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
corner-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
corner-radius: 1px 0 3px 4px;
```

Individual corner radii can be set using the `corner-top-left-radius`, `corner-top-right-radius`, `corner-bottom-left-radius`, and `corner-bottom-right-radius` properties.

A circular shape can be achieved by setting the corner radius to 50%:

```css
corner-radius: 50%;
```

## Corner Shape

