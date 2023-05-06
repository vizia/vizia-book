# Making the Counter Reusable

In this section we're going to turn our counter into a component by declaring a custom view. This will make our counter reusable so we can easily create multiple instances or export the counter as a component in a library.

## Step 1: Creating a custom view struct
First we declare a struct which will contain any view-specific state:

```rust
pub struct Counter {}
```

Although we could store the `count` value within the view, we've chosen instead to make this view 'stateless', and instead we'll provide it with a lens to bind to some external state (typically from a model).

## Step 2: Implementing the view trait
Next, we'll implement the `View` trait for the custom counter view:

```rust
impl View for Counter {}
```

The `View` trait has methods for responding to events and for custom drawing, but for now we'll leave this implementation empty.

## Step 3: Building the sub-components of the view
Then we'll implement a constructor for the counter view. To use our view in a vizia application, the constructor must build the view into the context, which returns a `Handle` we can use to apply modifiers on our view.

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
                Button::new(cx, |_|{}, |cx| Label::new(cx, "Decrement"))
                    .class("inc");
                Button::new(cx, |_|{}, |cx| Label::new(cx, "Increment"))
                    .class("dec");
                Label::new(cx, AppData::count)
                    .class("count");
            })
            .child_space(Stretch(1.0))
            .col_between(Pixels(20.0));
        })
    }
}
```

The label is currently using the `AppData::count` lens, however, this will only work if that specific lens is in scope. To make this component truly reusable we need to pass a lens in via the constructor. To do this we use a generic and constrain the type to implement the `Lens` trait. This trait has a `Target` associated type which we can use to specify that the binding is for an `i32` value:

```rust
impl Counter {
    pub fn new<L>(cx: &mut Context, lens: L) -> Handle<Self> 
    where
        L: Lens<Target = i32>,
    {
        Self {

        }.build(cx, |cx|{
            HStack::new(cx, |cx|{
                Button::new(cx, |_|{}, |cx| Label::new(cx, "Decrement"))
                    .class("inc");
                Button::new(cx, |_|{}, |cx| Label::new(cx, "Increment"))
                    .class("dec");
                Label::new(cx, lens)
                    .class("count");
            })
            .child_space(Stretch(1.0))
            .col_between(Pixels(20.0));
        })
    }
}
```
## Step 4: Using the custom view
Finally, we can use our custom view in the application:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

        cx.add_stylesheet("style.css").expect("Failed to load stylesheet");

        AppData { count: 0 }.build(cx);

        Counter::new(cx, AppData::lens);
    })
    .title("Counter")
    .inner_size((400, 100))
    .run();
}

```

We pass it the `AppData::lens`, but the custom view can accept any lens to an `i32` value.

When we run our app now it will seem like nothing has changed. However, now that our counter is a component, we could easily add multiple counters all bound to the same data (or different data):


```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

        cx.add_stylesheet("style.css").expect("Failed to load stylesheet");

        AppData { count: 0 }.build(cx);

        Counter::new(cx, AppData::lens);
        Counter::new(cx, AppData::lens);
        Counter::new(cx, AppData::lens);
    })
    .title("Counter")
    .inner_size((400, 100))
    .run();
}

```