# Rating

A star-based control for selecting a numeric rating.

## When To Use It

Use `Rating` when users should choose a discrete score within a bounded range, such as product ratings, feedback quality, or priority scales.

## Constructing a Rating

```rust,ignore
use vizia::prelude::*;

let rating = Signal::new(3u32);

Rating::new(cx, 5, rating)
	.on_change(|cx, value| cx.emit(AppEvent::SetRating(value)));
```

## Rating Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_change` | `Fn(&mut EventContext, u32)` | Called when rating is emitted/changed. | - |

## Components and Styling

| Selector | Description |
|---|---|
| `rating` | Root rating group element. |
| `rating svg` | Individual star items. |
| `rating svg:checked` | Filled/active stars at or below selected value. |

## Accessibility

- Uses role `RadioGroup` for the container and `RadioButton` roles for stars.
- Supports keyboard adjustment:

| Key | Action |
|---|---|
| `ArrowRight` | Increment rating |
| `ArrowLeft` | Decrement rating |

Ensure surrounding text clarifies rating scale meaning (for example 1 to 5 stars).

