# CSS Animations

Vizia supports CSS keyframe animations defined with `@keyframes` rules and the `animation` property. These run entirely in CSS and do not require Rust code to play.

## Defining a keyframe animation

Declare `@keyframes` in a stylesheet and attach the animation with the `animation` property:

```rust,ignore
use vizia::prelude::*;

const STYLE: &str = r#"
    @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
    }

    .spinner {
        animation: spin 1s linear infinite;
    }
"#;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(STYLE).unwrap();

        Element::new(cx)
            .class("spinner")
            .size(Pixels(32.0));
    })
    .run()
}
```

## Animation shorthand

The `animation` shorthand accepts: `name duration timing-function delay iteration-count direction fill-mode`.

```css
.fade-in {
    animation: fadeIn 300ms ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
```

## Iteration count

| Value | Description |
|---|---|
| `1` | Plays once. |
| `3` | Plays three times. |
| `infinite` | Loops forever. |

## Direction

| Value | Description |
|---|---|
| `normal` | Plays forward each iteration. |
| `reverse` | Plays backward each iteration. |
| `alternate` | Alternates forward and backward. |
| `alternate-reverse` | Alternates backward then forward. |

## Fill mode

| Value | Description |
|---|---|
| `none` | Returns to pre-animation state after end. |
| `forwards` | Keeps the final keyframe state. |
| `backwards` | Applies the first keyframe before the delay elapses. |
| `both` | Applies `forwards` and `backwards` together. |

## Multiple keyframe stops

Use percentage-based keyframes for fine-grained control:

```css
@keyframes bounce {
    0%   { transform: translateY(0px); }
    40%  { transform: translateY(-20px); }
    60%  { transform: translateY(-10px); }
    80%  { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
}
```

## See also

- [Animations](./animations.md) — Rust API animations with `AnimationBuilder`.
- [Transitions](./transitions.md) — property transitions triggered by state changes.
