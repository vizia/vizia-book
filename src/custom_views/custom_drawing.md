# Custom Drawing

Custom drawing lets you paint arbitrary graphics onto a view's canvas using `vizia::vg` primitives.

## Implementing draw

Override `draw` in your `View` implementation to take full control of rendering:

```rust,ignore
use vizia::prelude::*;
use vizia::vg;

pub struct CircleView;

impl CircleView {
    pub fn new(cx: &mut Context) -> Handle<Self> {
        Self.build(cx, |_cx| {})
    }
}

impl View for CircleView {
    fn element(&self) -> Option<&'static str> {
        Some("circle_view")
    }

    fn draw(&self, cx: &mut DrawContext, canvas: &mut Canvas) {
        let bounds = cx.bounds();
        let cx_f = bounds.x + bounds.w / 2.0;
        let cy_f = bounds.y + bounds.h / 2.0;
        let radius = bounds.w.min(bounds.h) / 2.0 - 2.0;

        let mut path = vg::Path::new();
        path.circle(cx_f, cy_f, radius);
        canvas.fill_path(
            &mut path,
            &vg::Paint::color(Color::rgb(100, 149, 237).into()),
        );
    }
}
```

## Using bounds

`cx.bounds()` returns a `BoundingBox` with `x`, `y`, `w`, and `h` in logical pixels describing the view's position and size.

## Drawing primitives

Build paths using `vg::Path`:

| Method | Description |
|---|---|
| `path.rect(x, y, w, h)` | Axis-aligned rectangle. |
| `path.circle(cx, cy, r)` | Circle. |
| `path.move_to(x, y)` | Move pen without drawing. |
| `path.line_to(x, y)` | Draw a straight line. |
| `path.bezier_to(c1x, c1y, c2x, c2y, x, y)` | Cubic bezier segment. |
| `path.close()` | Close the current subpath. |

## Filling and stroking

```rust,ignore
// Fill
canvas.fill_path(&mut path, &vg::Paint::color(Color::red().into()));

// Stroke
let mut stroke = vg::Paint::color(Color::black().into());
stroke.set_line_width(2.0);
canvas.stroke_path(&mut path, &stroke);
```

## Composing with default rendering

To layer custom graphics with the standard background, border, and text rendering, call the default draw helpers:

```rust,ignore
fn draw(&self, cx: &mut DrawContext, canvas: &mut Canvas) {
    cx.draw_background(canvas);
    cx.draw_shadows(canvas);
    // ... custom drawing here ...
    cx.draw_border(canvas);
    cx.draw_text(canvas);
}
```

## See also

- [Custom Views](./custom_views.md)
- [Composition](./custom_view_composition.md)
