# ProgressBar

A view for showing progress as a normalized value.

The progress source should resolve to an `f32` in the range `0.0..=1.0`.

## When To Use It

Use `ProgressBar` for non-interactive progress feedback such as loading, processing, upload/download status, and task completion.

## Constructing a ProgressBar

Horizontal progress bar:

```rust,ignore
use vizia::prelude::*;

ProgressBar::horizontal(cx, progress);
```

Vertical progress bar:

```rust,ignore
ProgressBar::vertical(cx, progress);
```

Generic constructor with orientation:

```rust,ignore
ProgressBar::new(cx, progress, Orientation::Horizontal);
```

## ProgressBar API Notes

- `ProgressBar::new(cx, signal, orientation)`
- `ProgressBar::horizontal(cx, signal)`
- `ProgressBar::vertical(cx, signal)`

## Components and Styling

| Selector | Description |
|---|---|
| `progressbar` | Root progress bar element. |
| `progressbar .progressbar-bar` | Filled bar segment representing current value. |

## Accessibility

- Uses role `ProgressIndicator`.
- Exposes min/max numeric range and current numeric value.
- Keep nearby text labels clear when multiple progress indicators are shown.

