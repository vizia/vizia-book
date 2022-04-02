# Checkbox

A checkbox lets you show and toggle a piece of boolean state.
For example:

```rust
Checkbox::new(cx, AppData::value)
    .on_toggle(|cx| cx.emit(AppEvent::ToggleValue));
})
```

The checkbox cannot be used without being bound to some data - it will not accept a raw bool as an argument.

If you need to have access to the exact value of the checkbox during the toggle event, consider `get`ting the lens you used to create it.
For example:

```rust
Checkbox::new(cx, AppData::value)
    .on_toggle(|cx| cx.emit(AppEvent::SetValue(*AppData::value.get(cx)));
})
```
