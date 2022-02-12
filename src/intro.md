# VIZIA

# Quickstart

Vizia is a data-driven reactive framework, which means that the UI can be considered a mapping from application data to visuals. When the data is modified, either by a UI control or externally, the widgets in the application update to represent the new state.

Let's start by defining some data:

```rust
#[derive(Lens)]
pub struct AppData {
    count: i32,
}
```
The `Lens` generates for us a lens to each field of the application data. A lens is like a key which we can use to bind the UI controls to pieces of the application data.

To modify the application data we need to define some events which can be emitted by the UI controls:

```rust
#[derive(Debug)]
pub enum AppEvent {
    Increment,
    Decrement,
}
```

Then we implement the `Model` trait on our application data to process the events and modify the data:

```rust
impl Model for AppData {
    fn event(&mut self, cx: &mut Context, event: &mut Event) {
        if let Some(app_event) = event.message.downcast() {
            match app_event {
                AppEvent::Increment => {
                    self.count += *val;
                }

                AppEvent::Decrement => {
                    self.count -= *val;
                }
            }
        }
    }
}
```

Now let's build a simple application. We'll start with an empty window and set the window title and size. Then build our application data at the root of the visual tree.

```rust
fn main() {
    let window_description = WindowDescription::new().with_title("Counter").with_inner_size(400, 100);
    Application::new(window_description, |cx|{
        AppData {
            count: 0,
        }.build(cx);
    }).run();
}
```

Next we'll add some buttons, to increment and decrement the counter. Here a `HStack` view is used to lay out the controls in a row:

```rust
Application::new(window_description, |cx|{
    HStack::new(cx, |cx|{
        Button::new(cx, |cx| cx.emit(AppEvent::Increment), |cx| Label::new(cx, "Incrememnt"));
        Button::new(cx, |cx| cx.emit(AppEvent::Decrement), |cx| Label::new(cx, "Incrememnt"));
    });
}).run();
```

Buttons take an action callback and a label closure. For the action we emit the relevant event which will propagate up the tree to the application data model. The label closure allows us to  

