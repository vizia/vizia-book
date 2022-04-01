# Button

A control view which initiates an action when pressed.

The `Button` view is created with an action closure and a label closure, which must return another view. For example:

```rust
Button::new(cx, |cx| cx.emit(AppEvent::Update), |cx|{
    Label::new(cx, "Press Me")
});
```
The label closure can be used to specify a view which describes the buttons action. This could be a simple label, as above, or a composition of views such as an icon and a label:

```rust
Button::new(cx, |cx| cx.emit(AppEvent::AddItem), |cx|{
    HStack::new(cx, |cx|{
        Label::new(cx, ICON_PLUS);
        Label::new(cx, "Add");
    });
});