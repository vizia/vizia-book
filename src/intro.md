# Vizia

# Quickstart

Vizia is a data-driven reactive framework, which means that the UI can be considered a mapping from application data to graphical elements called views. When the data is modified, either by interacting with a view or externally, such as a mouse or keyboard event, the views in the application update to present the new state.

Let's start by defining some data for our application:

```rust
#[derive(Lens)]
pub struct AppData {
    count: i32,
}
```
The `Lens` derive macro generates for us a lens to each field of the application data. A lens is like a key which we can use to bind the UI controls to pieces of the application data.

To modify the application data we need to define some events which can be emitted by the UI views:

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

        event.map(|msg, _| match msg {
            AppEvent::Increment => {
                self.count += *val;
            }

            AppEvent::Decrement => {
                self.count -= *val;
            }
        });
    }
}
```

Now let's build some views for the application. We'll start by building the application data at the root of the visual tree, with an initial value for the count.

```rust
fn main() {
    Application::new(|cx|{
        AppData {
            count: 0,
        }.build(cx);
    }).run();
}
```

Next we'll add some buttons to increment and decrement the counter. Here a `HStack` view is used to arrange the buttons into a row:

```rust
Application::new(|cx|{

    AppData {
        count: 0,
    }.build(cx);


    HStack::new(cx, |cx|{
        Button::new(cx, |cx| cx.emit(AppEvent::Increment), |cx| Label::new(cx, "Incrememnt"));
        Button::new(cx, |cx| cx.emit(AppEvent::Decrement), |cx| Label::new(cx, "Decrement"));
    });
}).run();
```

Each button takes two closures. 

The first allows us to provide an action which will occur when the button is pressed. In this case we emit the relevant event, which will propagate up the tree to the application data model. 

The second closure allows us to customize what will be shown on top of the button to indicate its action. In this case we provide a label view with some appropriate text. 

