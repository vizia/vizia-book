# Collapsible

A container that can expand and collapse to show or hide content.

## When To Use It

Use `Collapsible` for progressive disclosure of secondary content, such as advanced settings, details panels, and grouped sections in forms.

## Constructing a Collapsible

`Collapsible::new` takes a header builder and a content builder.

```rust,ignore
use vizia::prelude::*;

Collapsible::new(
	cx,
	|cx| Label::new(cx, "Advanced settings"),
	|cx| {
		VStack::new(cx, |cx| {
			Label::new(cx, "Extra option A");
			Label::new(cx, "Extra option B");
		});
	},
)
.on_toggle(|cx, is_open| cx.emit(AppEvent::SetAdvancedOpen(is_open)));
```

Controlled open state:

```rust,ignore
Collapsible::new(cx, |cx| Label::new(cx, "Section"), |cx| {
	Label::new(cx, "Section content");
})
.open(is_open_signal);
```

## Collapsible Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `open` | `impl Res<bool>` | Controls whether the collapsible is open. | `false` |
| `on_toggle` | `Fn(&mut EventContext, bool)` | Called when open state changes. | - |

## Components and Styling

| Selector | Description |
|---|---|
| `collapsible` | Root collapsible element. |
| `collapsible.open` | Applied when section is expanded. |
| `collapsible .header` | Header row that toggles expansion. |
| `collapsible .content` | Content container. |
| `collapsible .expand-icon` | Chevron icon in header. |

## Accessibility

- Header row is navigable and uses button semantics.
- Keep header text descriptive so users understand hidden content before expanding.

