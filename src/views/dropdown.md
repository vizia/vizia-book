# Dropdown

A dropdown is an input element which shows some state, and when you click on it it opens a small view with options to change that state.
This is ususally used in the context of a "combo box" or "list picker" to allow the user to select from one of several discrete options.

The dropdown takes two closures, one which shows the current state regardless of whether the dropdown is open or closed, and one which shows the contents while it is open.
Here's an example:

```rust
Dropdown::new(
    cx,
    |cx| Label::new(cx, AppData::value),
    |cx| {
        for i in 0..5 {
            Label::new(cx, i).on_press(move |cx| {
                cx.emit(AppEvent::SetValue(i));
                cx.emit(PopupEvent::Close);  // close the popup
            });
        }
    },
);
```
