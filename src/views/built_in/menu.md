# Menu

Vizia menus are built from three views:

- `MenuBar` for top-level horizontal menu groups.
- `Submenu` for nested menu popups.
- `MenuButton` for actionable leaf items.

## When To Use It

Use menu views for command-heavy desktop interfaces where users expect grouped actions (for example File/Edit/View) and nested command hierarchies.

## Constructing Menus

Top-level menubar with a submenu and menu buttons:

```rust,ignore
MenuBar::new(cx, |cx| {
	Submenu::new(
		cx,
		|cx| Label::new(cx, "File"),
		|cx| {
			MenuButton::new(
				cx,
				|cx| cx.emit(AppEvent::NewProject),
				|cx| Label::new(cx, "New"),
			);

			MenuButton::new(
				cx,
				|cx| cx.emit(AppEvent::OpenProject),
				|cx| Label::new(cx, "Open"),
			);
		},
	);
});
```

Nested submenu:

```rust,ignore
Submenu::new(
	cx,
	|cx| Label::new(cx, "Export"),
	|cx| {
		MenuButton::new(
			cx,
			|cx| cx.emit(AppEvent::ExportPng),
			|cx| Label::new(cx, "PNG"),
		);
	},
);
```

## API Notes

- `MenuBar::new(cx, content)` manages top-level open/close behavior.
- `Submenu::new(cx, content, menu)` renders a pressable row and popup content.
- `MenuButton::new(cx, action, content)` triggers action and closes open menus.
- Menu open state is coordinated with `MenuEvent::{Open, Close, CloseAll, ToggleOpen}`.

## Components and Styling

| Selector | Description |
|---|---|
| `menubar` | Root element for top-level horizontal menus. |
| `menu` | Popup container holding the list of menu items. |
| `submenu` | Pressable row that controls submenu popup. |
| `submenu .arrow` | Chevron shown for submenu rows. |
| `menubutton` | Pressable leaf action item. |
| `submenu:checked` | Open/checked submenu state. |

## Accessibility

- `MenuButton` uses role `MenuItem` and is keyboard navigable.
- Keep menu labels concise and ensure command text is descriptive.
- Close menus after command activation for predictable focus behavior.

### Keyboard Interaction

When a menu popup is open:

| Key | Action |
|---|---|
| `ArrowDown` / `ArrowUp` | Move focus to the next/previous menu item. |
| `Home` / `End` | Move focus to the first/last menu item. |
| `ArrowLeft` | Close the current submenu level (or move toward parent menu context). |
| `Escape` | Close the active menu and return focus to the trigger. |
| `Tab` | Close all open menus and continue normal focus traversal. |

When focus is on a submenu trigger row:

| Key | Action |
|---|---|
| `ArrowDown` / `Enter` / `Space` | Open the submenu. |
| `ArrowRight` | Navigate/open submenu to the right when applicable. |

