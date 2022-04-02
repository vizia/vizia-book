# Textbox

It's time for the venerable textbox, prince of input methods.

The textbox is used by creating it bound to some data and then using the `on_edit` callback to send events updating that data.

```rust
Textbox::new(cx, AppData::my_text)
    .on_edit(|cx, text| cx.emit(AppEvent::SetText(text)));
```

The data the textbox is bound to doesn't have to be a string, it just has to implement `ToString`!
This means writing a number input is as simple as:

```rust
Textbox::new(cx, AppData::my_number)
    .on_edit(|cx, text| {
        if let Ok(num) = text.parse() {
            cx.emit(AppEvent::SetNumber(num));
        }
    });
```

If you're feeling very fancy, you can also emit events in the `else` case to do error reporting :)
