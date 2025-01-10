# Text Properties

## Font Family

The `font-family` property specifies a prioritized list of one or more font family names and/or generic family names for the selected view.

```css
/* A font family name and a generic family name */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
```

## Font Size

The `font-size` property sets the size of the font. 

```css
/* <absolute-size> values */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> values */
font-size: smaller;
font-size: larger;

/* <length> values */
font-size: 12px;
```

## Font Weight

The `font-weight` property determines the weight (or boldness) of the font. The weights available depend on the [`font-family`](#font-family) that is currently set.

```css
/* <font-weight-absolute> keyword values */
font-weight: normal;
font-weight: bold;

/* <font-weight-absolute> numeric values [1,1000] */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400; /* normal */
font-weight: 500;
font-weight: 600;
font-weight: 700; /* bold */
font-weight: 800;
font-weight: 900;
```

## Font Slant

The `font-slant` property determines whether a font should be styled with a normal, italic, or oblique face from its [`font-family`](#font-family).

```css
font-slant: normal;
font-slant: italic;
font-slant: oblique;
font-slant: oblique 10deg;
```

## Font Width

The `font-width` property selects a normal, condensed, or expanded face from a font.

```css
/* keyword values */
font-width: normal;
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;
```

## Font Variation Settings

The `font-variation-settings` property provides low-level control over variable font characteristics by letting you specify the four letter axis names of the characteristics you want to vary along with their values.

```css
/* Set values for variable font axis names */
font-variation-settings: "xhgt" 0.7;
```