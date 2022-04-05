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

# Radio Buttons

A radio button is just like a checkbox from the point of view of the GUI - you just have to bind it to some exclusive aspect of data so it gets unchecked when you click some other element.

```rust
VStack::new(cx, |cx| {
    HStack::new(cx, |cx| {
        RadioButton::new(cx, AppData::value.map(|v| v == 0))
            .on_select(|cx| cx.emit(AppEvent::SetValue(0)));
        Label::new(cx, "Option 1");
    });
    HStack::new(cx, |cx| {
        RadioButton::new(cx, AppData::value.map(|v| v == 1))
            .on_select(|cx| cx.emit(AppEvent::SetValue(0)));
        Label::new(cx, "Option 2");
    });
});
```
