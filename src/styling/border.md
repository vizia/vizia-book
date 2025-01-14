# Border Properties

## Border (shorthand)

The border property is shorthand for [`border-width`](#border-width), [`border-style`](#border-style), and [`border-color`](#border-color), and sets the border of a view.

```css
/* style */
border: solid;

/* width | style */
border: 2px dashed;

/* style | color */
border: solid red;

/* width | style | color */
border: 5px dashed green;
```

## Border Width

The [`border-width`](https://docs.vizia.dev/vizia/modifiers/trait.StyleModifiers.html#method.border_width) property sets the width of a view's border.

```css
border-width: 5px;
border-width: 20%;
```

## Border Style

The [`border-style`](https://docs.vizia.dev/vizia/modifiers/trait.StyleModifiers.html#method.border_style) property sets the style of a view's border.

```css
border-style: none;
border-style: solid;
border-style: dashed;
border-style: dotted;
```

## Border Color

The [`border-color`](https://docs.vizia.dev/vizia/modifiers/trait.StyleModifiers.html#method.border_color) property sets the color of a view's border.

```css
border-color: red;
border-color: #566;
```