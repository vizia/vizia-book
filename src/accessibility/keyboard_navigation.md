# Keyboard navigation

Keyboard users should be able to reach and operate every interactive control without a mouse.
In Vizia, this is mainly driven by navigable views plus the standard window event handling for `Tab`, `Shift+Tab`, `Enter`, and `Space`.

## Default behavior

Most built-in interactive views are already keyboard navigable.
For example, `Button`, `Checkbox`, `RadioButton`, `Switch`, `Slider`, `Textbox`, and list-style controls participate in focus navigation out of the box.

The default interaction pattern is:

- `Tab` moves focus forward.
- `Shift+Tab` moves focus backward.
- `Enter` and `Space` activate the currently focused control when that control handles press/action events.

## Making custom controls keyboard navigable

If you build a custom interactive view from generic elements, opt it into keyboard navigation explicitly.

```rust,ignore
Element::new(cx)
	.navigable(true)
	.on_press(|cx| cx.emit(AppEvent::Refresh));
```

`navigable(true)` places the view in the tab order.

## Shortcuts versus navigation

Keyboard shortcuts are separate from focus navigation.
Use `Keymap` for app-level commands, and use navigable controls for normal interaction flow.

This distinction matters because a shortcut can trigger from anywhere, while keyboard navigation must still let users discover and operate the UI one control at a time.
