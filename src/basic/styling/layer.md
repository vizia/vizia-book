# Layer Properties

## Visibility

The visibility property shows or hides a view without affecting its layout.

```css
/* Keyword values */
visibility: visible;
visibility: hidden;
```

## Opacity

The `opacity` property determines how much of the content behind a view can be seen.

```css
opacity: 0.9;

opacity: 90%;
```

## Blend mode

The `blend-mode` property determines how a view's content should blend with the content of the view's behind it.

```css
/* Keyword values */
blend-mode: normal;
blend-mode: multiply;
blend-mode: screen;
blend-mode: overlay;
blend-mode: darken;
blend-mode: lighten;
blend-mode: color-dodge;
blend-mode: color-burn;
blend-mode: hard-light;
blend-mode: soft-light;
blend-mode: difference;
blend-mode: exclusion;
blend-mode: hue;
blend-mode: saturation;
blend-mode: color;
blend-mode: luminosity;
blend-mode: plus;
```

## Z-Index

The `z-index` property determines the z-order of a view and its descendants. Overlapping elements with a larger z-index cover those with a smaller one.

## Overflow

The overflow shorthand property sets the desired behavior when content does not fit in the view's bounds in the horizontal and/or vertical direction.

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: hidden visible;
```

The overflow can be set for each axis using the `overflow-x` and `overflow-y` properties.

## Clip Path

The `clip-path` property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

```css
/* Keyword values */
clip-path: auto;

/* <basic-shape> values */
clip-path: inset(100px 50px);
clip-path: rect(5px 5px 160px 145px);
```