# Transform Properties

Transforms are a post-layout effect and therefore affect the rendering of a view but not its layout.

## Transform

The `transform` property lets you rotate, scale, skew, or translate a view.

```css
/* Function values */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: rotate(0.5turn);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
```

## Transform Origin

The `transform-origin` property determines the origin for a view's transformations.

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;
```

## Translate

The `translate` property allows you to specify translation transforms individually and independently of the [`transform`](#transform) property.

```css
/* Single values */
translate: 100px;
translate: 50%;

/* Two values */
translate: 100px 200px;
translate: 50% 105px;
```

## Rotate

The `rotate` property allows you to specify rotation transforms individually and independently of the [`transform`](#transform) property.

```css
/* Angle value */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;
```

## Scale

The `scale` property allows you to specify scale transforms individually and independently of the [`transform`](#transform) property.

```css
/* Single values */
/* values of more than 1 or 100% make the element grow */
scale: 2;
/* values of less than 1 or 100% make the element shrink */
scale: 50%;

/* Two values */
scale: 2 0.5;
```


