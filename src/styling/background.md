# Background Properties

## Background Color

Sets the `background-color` of a view.

```css
/* Keyword values */
background-color: red;
background-color: indigo;

/* Hexadecimal value */
background-color: #bbff00; /* Fully opaque */
background-color: #bf0; /* Fully opaque shorthand */
background-color: #11ffee00; /* Fully transparent */
background-color: #1fe0; /* Fully transparent shorthand */
background-color: #11ffeeff; /* Fully opaque */
background-color: #1fef; /* Fully opaque shorthand */

/* RGB value */
background-color: rgb(255 255 128); /* Fully opaque */
background-color: rgb(117 190 218 / 50%); /* 50% transparent */

/* HSL value */
background-color: hsl(50 33% 25%); /* Fully opaque */
background-color: hsl(50 33% 25% / 75%); /* 75% opaque, i.e. 25% transparent */

```

The background color is rendered behind any [`background-image`](#background-image) but will show through any transparency in the image.

## Background Image

The `background-image` property sets one or more background images on a view.

```css
/* single image */
background-image: linear-gradient(black, white);
background-image: url("cat-front.png");

/* multiple images */
background-image: radial-gradient(circle, #0000 45%, #000f 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);
```

## Background Size

The `background-size` property sets the size of the view's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

```css
/* Keyword values */
background-size: cover;
background-size: contain;

/* One-value syntax */
/* the width of the image (height becomes 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Multiple backgrounds */
background-size: auto, auto; /* Not to be confused with `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;
```

## Background Position

The `background-position` CSS property sets the initial position for each background image.

```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;
```