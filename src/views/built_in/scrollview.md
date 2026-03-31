# ScrollView

A container that allows users to scroll overflowed content.

## When To Use It

Use `ScrollView` when content may exceed available width or height, such as long settings panes, docs panels, inspectors, and large custom layouts.

## Constructing a ScrollView

```rust,ignore
use vizia::prelude::*;

ScrollView::new(cx, |cx| {
	VStack::new(cx, |cx| {
		for i in 0..100 {
			Label::new(cx, format!("Row {}", i));
		}
	});
})
.show_horizontal_scrollbar(false)
.show_vertical_scrollbar(true)
.on_scroll(|cx, x, y| cx.emit(AppEvent::Scrolled(x, y)));
```

Programmatic scroll position:

```rust,ignore
ScrollView::new(cx, |cx| {
	Label::new(cx, "Content");
})
.scroll_x(0.0)
.scroll_y(0.5);
```

## ScrollView Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_scroll` | `Fn(&mut EventContext, f32, f32)` | Called when scroll changes. | - |
| `scroll_to_cursor` | `impl Res<bool>` | Jump scrollbar thumb toward cursor on press. | `false` |
| `scroll_x` | `impl Res<f32>` | Horizontal scroll progress from `0.0` to `1.0`. | `0.0` |
| `scroll_y` | `impl Res<f32>` | Vertical scroll progress from `0.0` to `1.0`. | `0.0` |
| `show_horizontal_scrollbar` | `impl Res<bool>` | Horizontal scrollbar visibility. | `true` |
| `show_vertical_scrollbar` | `impl Res<bool>` | Vertical scrollbar visibility. | `true` |

## Components and Styling

| Selector | Description |
|---|---|
| `scrollview` | Root scroll view element. |
| `scrollview.h-scroll` | Applied when horizontal overflow exists. |
| `scrollview.v-scroll` | Applied when vertical overflow exists. |
| `scroll-content` | Internal content container that is translated while scrolling. |
| `scrollbar` | Internal scrollbar views (when enabled). |

## Accessibility

- Keep scrollable regions labeled when context is unclear.
- Ensure keyboard focus can enter and leave nested scrollable content predictably.
- Pair with item-level controls (for example `List`) for keyboard-first navigation patterns.

