# Making the Counter Reusable

In this section we're going to turn our counter into a component by declaring a custom view. This will make our counter reusable so we can easily create multiple instances or export the counter as a component in a library.

## Step 1: Creating a custom view struct
First we declare a struct which will contain any view-specific state:

```rust
pub struct Counter {}
```

Although we could store the `count` value within the view, we've chosen instead to make this view 'stateless', and instead we'll provide it with a lens to bind to some external state (typically from a model), and some callbacks for emitting events when the buttons are pressed.

## Step 2: Implementing the view trait
Next, we'll implement the `View` trait for the custom counter view:

```rust
impl View for Counter {}
```

The `View` trait has methods for responding to events and for custom drawing, but for now we'll leave this implementation empty.

## Step 3: Building the sub-components of the view
Next we'll implement a constructor for the counter view. To use our view in a vizia application, the constructor must build the view into the context, which returns a `Handle` we can use to apply modifiers on our view.

```rust
impl Counter {
    pub fn new(cx: &mut Context) -> Handle<Self> {
        Self {

        }.build(cx, |cx|{

        })
    }
}
```

The `build()` function, provided by the `View` trait, takes a closure which we can use to construct the content of the custom view. Here we move the code which makes up the counter:

```rust
impl Counter {
    pub fn new(cx: &mut Context) -> Handle<Self> {
        Self {

        }.build(cx, |cx|{
            HStack::new(cx, |cx|{
                Button::new(cx, |cx| Label::new(cx, "Decrement"))
                    .on_press(|ex| ex.emit(AppEvent::Decrement))
                    .class("dec");

                Button::new(cx, |cx| Label::new(cx, "Increment"))
                    .on_press(|ex| ex.emit(AppEvent::Increment))
                    .class("inc");
                
                Label::new(cx, AppData::count)
                    .class("count");
            })
            .class("row");
        })
    }
}
```
## Step 4: User-configurable binding

The label within the counter is currently using the `AppData::count` lens, however, this will only work if that specific lens is in scope. To make this component truly reusable we need to pass a lens in via the constructor. To do this we use a generic and constrain the type to implement the `Lens` trait. This trait has a `Target` associated type which we can use to specify that the binding is for an `i32` value. Then we simply pass the lens directly to the constructor of the label:

```rust
impl Counter {
    pub fn new<L>(cx: &mut Context, lens: L) -> Handle<Self> 
    where
        L: Lens<Target = i32>,
    {
        Self {

        }.build(cx, |cx|{
            HStack::new(cx, |cx|{
                Button::new(cx, |cx| Label::new(cx, "Decrement"))
                    .on_press(|ex| ex.emit(AppEvent::Decrement))
                    .class("dec");

                Button::new(cx, |cx| Label::new(cx, "Increment"))
                    .on_press(|ex| ex.emit(AppEvent::Increment))
                    .class("inc");
                
                Label::new(cx, lens)
                    .class("count");
            })
            .class("row");
        })
    }
}
```

## Step 5 - User-configurable events

The last part required to make the counter truly reusable is to remove the dependency on `AppEvent`. To do this we'll add a couple of callbacks to the counter to allow the user to emit their own events when the buttons are presses. 

### Adding callbacks to the view

First, change the `Counter` struct to look like this:

```rust
pub struct Counter {
    on_increment: Option<Box<dyn Fn(&mut EventContext)>>,
    on_decrement: Option<Box<dyn Fn(&mut EventContext)>>,
}
```

These boxed function pointers provide the callbacks that will be called when the increment and decrement buttons are pressed. 

Before moving on, we need to assign initial field values to the Counter 
instance that was created earlier:

```rust
impl Counter {
    pub fn new<L>(cx: &mut Context, lens: L) -> Handle<Self> 
    where
        L: Lens<Target = i32>,
    {
        Self {
            on_decrement: None,
            on_increment: None,
        }.build(cx, |cx|{
            HStack::new(cx, |cx|{
                Button::new(cx, |cx| Label::new(cx, "Decrement"))
                    .on_press(|ex| ex.emit(AppEvent::Decrement))
                    .class("dec");

                Button::new(cx, |cx| Label::new(cx, "Increment"))
                    .on_press(|ex| ex.emit(AppEvent::Increment))
                    .class("inc");
                
                Label::new(cx, lens)
                    .class("count");
            })
            .class("row");
        })
    }
}
```

### Custom modifiers

Next we'll need to add some custom modifiers so the user can configure these callbacks. To do this we can define a trait and implement it on `Handle<'_, Counter>`:

```rust
pub trait CounterModifiers {
    fn on_increment<F: Fn(&mut EventContext) + 'static>(self, callback: F) -> Self;
    fn on_decrement<F: Fn(&mut EventContext) + 'static>(self, callback: F) -> Self;
}
```

We can use the `modify()` method on `Handle` to directly set the callbacks when implementing the modifiers:

```rust
impl<'a> CounterModifiers for Handle<'a, Counter> {
    fn on_increment<F: Fn(&mut EventContext) + 'static>(self, callback: F) -> Self {
        self.modify(|counter| counter.on_increment = Some(Box::new(callback)))
    }

    fn on_decrement<F: Fn(&mut EventContext) + 'static>(self, callback: F) -> Self {
        self.modify(|counter| counter.on_decrement = Some(Box::new(callback)))
    }
}
```

### Internal event handling

Unfortunately we can't just call these callbacks from the action callback of the buttons. Instead we'll need to emit some internal events which the counter can receive, and then the counter can call the callbacks. Define an internal event enum for the counter like so: 

```rust
pub enum CounterEvent {
    Decrement,
    Increment,
}
```

We can then use this internal event with the buttons:
```rust
Button::new(
    cx, 
    |ex| ex.emit(CounterEvent::Decrement), 
    |cx| Label::new(cx, "Decrement")
)
.class("dec");

Button::new(
    cx, 
    |ex| ex.emit(CounterEvent::Increment), 
    |cx| Label::new(cx, "Increment")
)
.class("inc");
```

Finally, we respond to these events in the `event()` method of the `View` trait for the `Counter`, calling the appropriate callback:

```rust
impl View for Counter {
    fn event(&mut self, cx: &mut EventContext, event: &mut Event) {
        event.map(|counter_event, meta| match counter_event{
            CounterEvent::Increment => {
                if let Some(callback) = &self.on_increment {
                    (callback)(cx);
                }
            }

            CounterEvent::Decrement => {
                if let Some(callback) = &self.on_decrement {
                    (callback)(cx);
                }
            }
        });
    }
}
```

To recap, now when the user presses on one of the buttons, the button will emit an internal `CounterEvent`, which is then handled by the `Counter` view to call the appropriate callback, which the user can set using the custom modifiers we added using the `CounterModifiers` trait.

## Step 6: Using the custom view
Finally, we can use our custom view in the application:

```rust
fn main() -> Result<(), ApplicationError> {
    Application::new(|cx|{

        cx.add_stylesheet(include_style!("src/style.css"))
            .expect("Failed to load stylesheet");

        AppData { count: 0 }.build(cx);

        Counter::new(cx, AppData::count)
            .on_increment(|cx| cx.emit(AppEvent::Increment))
            .on_decrement(|cx| cx.emit(AppEvent::Decrement));
    })
    .title("Counter")
    .inner_size((400, 150))
    .run()
}

```

We pass it the `AppData::count`, but the custom view can accept any lens to an `i32` value. We also provide it with callbacks that should trigger when the increment and decrement buttons are pressed. In this case the callbacks will emit `AppEvent` events to mutate the model data. 

When we run our app now it will seem like nothing has changed. However, now that our counter is a component, we could easily add multiple counters all bound to the same data (or different data):


```rust
fn main() {
    Application::new(|cx|{

        cx.add_stylesheet(include_style!("src/style.css"))
            .expect("Failed to load stylesheet");

        AppData { count: 0 }.build(cx);

        Counter::new(cx, AppData::count)
            .on_increment(|cx| cx.emit(AppEvent::Increment))
            .on_decrement(|cx| cx.emit(AppEvent::Decrement));
        Counter::new(cx, AppData::count)
            .on_increment(|cx| cx.emit(AppEvent::Increment))
            .on_decrement(|cx| cx.emit(AppEvent::Decrement));
        Counter::new(cx, AppData::count)
            .on_increment(|cx| cx.emit(AppEvent::Increment))
            .on_decrement(|cx| cx.emit(AppEvent::Decrement));
    })
    .title("Counter")
    .inner_size((400, 150))
    .run();
}

```

<p align="center">
<img src="img/component.png" alt="Vizia app with three counter components"/>
</p>