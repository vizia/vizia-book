# Effects

## Shadows

The `shadow` property adds shadow effects around a view's frame. You can set multiple shadows separated by commas. A shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

```css
/* A color and two length values */
/* <color> | <length> | <length> */
shadow: red 60px -16px;

/* Three length values and a color */
/* <length> | <length> | <length> | <color> */
shadow: 10px 5px 5px black;

/* Four length values and a color */
/* <length> | <length> | <length> | <length> | <color> */
shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset, length values, and a color */
/* <inset> | <length> | <length> | <color> */
shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
shadow:
  3px 3px red inset,
  -1em 0 0.4em olive;
```

## Backdrop Filter

The `backdrop-filter` property allows you apply a blur effect to the area behind a view. Because it applies to everything behind the view, to see the effect the view or its background needs to be transparent or partially transparent.

```css
backdrop-filter: blur(2px);
```

