# Chip

A compact label-like component for tags, filters, and selected tokens.

## When To Use It

Use `Chip` to represent categorical metadata or user-selectable tags in a dense, readable format.

## Constructing a Chip

```rust,ignore
use vizia::prelude::*;

Chip::new(cx, "Audio")
	.variant(ChipVariant::Filled);
```

Closable chip:

```rust,ignore
Chip::new(cx, "Filter: Active")
	.variant(ChipVariant::Outline)
	.on_close(|cx| cx.emit(AppEvent::RemoveFilter("active".into())));
```

## Chip Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_close` | `Fn(&mut EventContext)` | Shows close button and triggers callback when pressed. | hidden |
| `variant` | `impl Res<impl Into<ChipVariant>>` | Visual style (`Filled` or `Outline`). | `Filled` |

## Components and Styling

| Selector | Description |
|---|---|
| `chip` | Root chip element. |
| `chip.outline` | Outline variant class. |
| `chip.close` | Applied when close button is present. |
| `chip .close-icon` | Close button/icon element. |

## Accessibility

- Ensure closable chips expose clear meaning (for example via nearby text context).
- For icon-only close affordances, provide enough context so assistive tech users understand what will be removed.

