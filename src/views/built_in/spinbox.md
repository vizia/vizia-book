# Spinbox

An input for incrementing and decrementing numeric values.

## When To Use It

Use `Spinbox` when users need precise step-by-step numeric control, especially where keyboard control and min/max bounds are important.

## Constructing a Spinbox

`Spinbox` binds to a numeric value and emits changes through callbacks:

```rust,ignore
let value = Signal::new(12.0f64);

Spinbox::new(cx, value)
	.min(0.0)
	.max(100.0)
	.on_change(|cx, val| cx.emit(AppEvent::SetValue(val)));
```

Vertical orientation with plus/minus icons:

```rust,ignore
Spinbox::new(cx, value)
	.orientation(Orientation::Vertical)
	.icons(SpinboxIcons::PlusMinus)
	.on_increment(|cx| cx.emit(AppEvent::Increment))
	.on_decrement(|cx| cx.emit(AppEvent::Decrement));
```

## Spinbox Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_change` | `Fn(&mut EventContext, f64)` | Called when value changes from increment/decrement/set-min/set-max. | - |
| `on_increment` | `Fn(&mut EventContext)` | Called when increment action is triggered. | - |
| `on_decrement` | `Fn(&mut EventContext)` | Called when decrement action is triggered. | - |
| `orientation` | `impl Res<Orientation>` | `Horizontal` or `Vertical` button layout. | `Horizontal` |
| `icons` | `impl Res<SpinboxIcons>` | Icon set for buttons (`Chevrons`, `PlusMinus`). | `Chevrons` |
| `min` | `impl Res<impl Into<f64>>` | Minimum allowed value. | none |
| `max` | `impl Res<impl Into<f64>>` | Maximum allowed value. | none |

## Components and Styling

| Selector | Description |
|---|---|
| `spinbox` | Root element. |
| `spinbox.horizontal` | Horizontal orientation class. |
| `spinbox.vertical` | Vertical orientation class. |
| `spinbox .spinbox-button` | Increment/decrement buttons. |
| `spinbox .spinbox-value` | Internal textbox showing value. |

## Accessibility

The internal value control is exposed with role `SpinButton`.

Keyboard interaction:

| Key | Action |
|---|---|
| `ArrowUp` / `ArrowRight` | Increment |
| `ArrowDown` / `ArrowLeft` | Decrement |
| `Home` | Set to min (if set) |
| `End` | Set to max (if set) |

