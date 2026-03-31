# Keyboard Shortcuts

Keyboard shortcuts let users trigger commands quickly without moving focus through controls.
In Vizia, shortcuts are typically handled with `Keymap`, while regular control interaction remains in the tab order.

For tab navigation and control activation behavior, see [Keyboard navigation](keyboard_navigation.md).

## When to add a shortcut

Good candidates for shortcuts:

- Frequent commands (`Save`, `Open`, `Close`).
- Navigation commands (`Next tab`, `Previous item`).
- Editing commands (`Undo`, `Redo`, `Copy`, `Paste`) when your view does not already provide them.

Avoid assigning shortcuts to one-off or destructive actions unless there is a clear confirmation flow.

## Defining a keymap

```rust,ignore
use vizia::prelude::*;

#[derive(Debug, PartialEq, Copy, Clone)]
enum AppAction {
	Save,
	Close,
}

Application::new(|cx| {
	Keymap::from(vec![
		(
			KeyChord::new(Modifiers::CTRL, Code::KeyS),
			KeymapEntry::new(AppAction::Save, |cx| cx.emit(AppEvent::Save)),
		),
		(
			KeyChord::new(Modifiers::CTRL, Code::KeyW),
			KeymapEntry::new(AppAction::Close, |cx| cx.emit(WindowEvent::WindowClose)),
		),
	])
	.build(cx);
});
```

On macOS, many apps map command keys through `Modifiers::SUPER`.
If you want consistent behavior across platforms, consider binding both `CTRL` and `SUPER` variants for primary commands.

## Shortcut design guidelines

- Keep shortcuts discoverable in visible labels or menus.
- Prefer common conventions (`Ctrl/Cmd+S` for save, `Ctrl/Cmd+Z` for undo).
- Avoid overriding `Tab`, `Shift+Tab`, `Enter`, and `Space` since they are central to keyboard accessibility.
- Ensure every shortcut action is also available from reachable UI controls.

## Scope and conflicts

Shortcuts should not break text entry workflows.
When the focused control is text-editing context, avoid intercepting expected typing or editing keystrokes.

A practical pattern is to keep global shortcuts for global commands and leave control-specific key handling inside the relevant view.

## Testing checklist

- The command works via shortcut and via a standard control.
- The shortcut does not prevent normal text input in `Textbox`.
- Focus location remains predictable after command execution.
- Shortcut behavior is documented in the UI.
