# TabView

A container that displays one panel at a time, selected by tab headers.

## When To Use It

Use `TabView` when multiple related panels share the same area and users need quick switching between them (for example General/Audio/Advanced settings pages).

## Constructing a TabView

`TabView::new` takes a list and a builder that returns `TabPair` for each item.

```rust,ignore
#[derive(Clone)]
struct SettingsTab {
	title: String,
}

let tabs = Signal::new(vec![
	SettingsTab { title: String::from("General") },
	SettingsTab { title: String::from("Audio") },
]);

TabView::new(cx, tabs, |_, _index, tab| {
	TabPair::new(
		move |cx| Label::new(cx, tab.title.clone()),
		move |cx| Label::new(cx, format!("{} content", tab.title)),
	)
})
.on_select(|cx, index| cx.emit(AppEvent::SelectTab(index)));
```

Vertical layout and externally controlled selection:

```rust,ignore
TabView::new(cx, tabs, |_, index, tab| {
	TabPair::new(
		move |cx| Label::new(cx, tab.title.clone()),
		move |cx| Label::new(cx, format!("Panel {}", index)),
	)
})
.vertical()
.with_selected(selected_tab_index);
```

## TabView Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `vertical` | `fn vertical(self) -> Self` | Switches tab layout to vertical mode (no argument). | horizontal |
| `on_select` | `Fn(&mut EventContext, usize)` | Called when selected tab changes. | - |
| `with_selected` | `impl Res<impl Into<usize>>` | Programmatically sets selected tab index. | `0` |

## Components and Styling

| Selector | Description |
|---|---|
| `tabview` | Root tab view element. |
| `tabview.vertical` | Vertical orientation class on root. |
| `tabview .tabview-header` | Header scroll area container. |
| `tabview .tabview-content-wrapper` | Active panel content container. |
| `tabheader` | Individual tab header item. |
| `tabheader:checked` | Active tab header state. |
| `tabheader.vertical` | Vertical tab header class. |

## Accessibility

- Keep tab labels short and unique.
- Track selected index in app state via `on_select` or `with_selected`.
- Ensure focus order remains clear when switching tabs.

