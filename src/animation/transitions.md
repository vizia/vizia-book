# Transitions

Transitions are animations applied to CSS properties when a view changes state. They are defined using the `transition` CSS property and require a property name and a duration, plus an optional delay and easing function.

## Defining transitions

Transitions are specified in CSS and applied when state changes such as `:hover` occur:

```css
.button {
    background-color: var(--primary);
    transition: background-color 200ms ease;
}

.button:hover {
    background-color: var(--primary-hover);
}
```

When the cursor enters the button, the background animates over 200ms using the `ease` timing function.

## Transitioning back

To animate when leaving a state as well as entering it, add a `transition` to both rules:

```css
.card {
    background-color: var(--secondary);
    transition: background-color 150ms ease-out;
}

.card:hover {
    background-color: var(--accent);
    transition: background-color 150ms ease-in;
}
```

## Multiple transitions

Separate multiple property transitions with commas:

```css
.card {
    opacity: 1.0;
    transform: translate(0px, 0px);
    transition: opacity 150ms ease-out, transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card:hover {
    opacity: 0.8;
    transform: translate(0px, -4px);
}
```

## Timing functions

| Value | Description |
|---|---|
| `linear` | Constant rate. |
| `ease` | Slow start, fast middle, slow end. |
| `ease-in` | Slow start. |
| `ease-out` | Slow end. |
| `ease-in-out` | Slow start and end. |
| `cubic-bezier(x1, y1, x2, y2)` | Custom curve. |

## Transition delay

Use a second time value to delay the start:

```css
.popover {
    opacity: 0.0;
    transition: opacity 200ms ease 50ms;
}

.popover:checked {
    opacity: 1.0;
}
```

The popover waits 50ms before beginning to fade in.

## See also

- [Animations](./animations.md) — keyframe-based animations controlled from Rust.
- [CSS Animations](./css_animations.md) — `@keyframes`-based CSS animations.
- [Transitions (Styling)](../styling/transitions.md) — transitions reference in the styling chapter.
