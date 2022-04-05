# Slider

A slider is a widget that lets you drag a knob to select a value in a continuous range of values.

The slider control consists of three main parts, a **thumb** element which can be moved between the extremes of a linear **track**, and an **active** element which fills the slider to indicate the current value.

The slider orientation is determined by its dimensions.
If the slider width is greater than the height then the thumb moves horizontally, whereas if the slider height is greater than the width the thumb moves vertically.

In the following example, a slider is bound to a value.
The `on_changing` callback is used to send an event to mutate the bound value when the slider thumb is moved, or if the track is clicked on.
```rust
# use vizia_core;
# use vizia_derive;
# let mut cx = &mut Context::new();
# #[derive(Lens)]
# pub struct AppData {
#     value: f32,
# }
Slider::new(cx, AppData::value)
    .on_changing(|cx, value| {
        cx.emit(WindowEvent::Debug(format!("Slider on_changing: {}", value)));
    });
```
