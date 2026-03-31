# Knob

A circular input for adjusting a normalized value.

## When To Use It

Use `Knob` for audio and media style controls (gain, pan, filter cutoff) where a compact circular control is preferred.

## Constructing a Knob

`Knob::new` binds to a normalized value in the range `0.0..=1.0`:

```rust,ignore
let value = Signal::new(0.5f32);

Knob::new(cx, 0.5, value, false)
	.on_change(|cx, normalized| cx.emit(AppEvent::SetNormalized(normalized)));
```

Custom content:

```rust,ignore
Knob::custom(cx, 0.5, value, |cx, value| {
	ZStack::new(cx, |cx| {
		ArcTrack::new(
			cx,
			false,
			Percentage(100.0),
			Percentage(15.0),
			-240.0,
			60.0,
			KnobMode::Continuous,
		)
		.value(value)
		.class("knob-track");
	})
})
.on_change(|cx, normalized| cx.emit(AppEvent::SetNormalized(normalized)));
```

## Knob Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_change` | `Fn(&mut EventContext, f32)` | Called with normalized value when control changes. | - |

## Components and Styling

| Selector | Description |
|---|---|
| `knob` | Root element. |
| `knob .knob-track` | Arc track element. |
| `knob .knob-head` | Rotating indicator container. |
| `knob .knob-tick` | Tick/marker on the knob head. |
| `arctrack` | Arc track view element (used by `ArcTrack`). |
| `ticks` | Tick marks container view element (used by `TickKnob`). |
| `tickknob` | Rotating knob head view element (used by `TickKnob`). |

## Accessibility

`Knob` exposes slider semantics (`Role::Slider`) with min/max numeric range.

Keyboard interaction:

| Key | Action |
|---|---|
| `ArrowUp` / `ArrowRight` | Increment normalized value |
| `ArrowDown` / `ArrowLeft` | Decrement normalized value |

Pointer interaction:

- Drag vertically to change value.
- Mouse wheel adjusts value.
- Double click resets to `normalized_default`.

