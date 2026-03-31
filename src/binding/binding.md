# Data Binding

Data binding is the concept of linking model data to views, so that when the model data is changed, the views observing this data update automatically in response. Therefore, it is data binding which provides the mechanism for reactivity in Vizia.

In Vizia, data binding is achieved through signals. A signal is a piece of reactive state. Signals can be stored directly in models and passed to views and modifiers to create bindings.

## Signals

For example, given the following model data:

```rust,ignore
pub struct AppData {
    color: Signal<Color>,
}

impl Model for AppData {}
```

When `color` changes, any view or modifier bound to it updates automatically.

## Property Binding

We can use this signal with the `background_color` modifier of a view to set up a binding, so that when the data changes the background color is updated. Passing signals to modifiers is known as property binding.

```rust,ignore
pub struct AppData {
    color: Signal<Color>,
}

impl Model for AppData {}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx|{

        let color = Signal::new(Color::red());

        AppData { color }.build(cx);

        Label::new(cx, "Hello Vizia").background_color(color);
    }).run()
}
```

## View Binding 

Some views accept a signal as an input. When provided a signal, the view sets up a binding to the data. For example, `Label` accepts a signal to any type which implements `ToString`:

```rust,ignore
pub struct Person {
    pub name: Signal<String>,
}

impl Model for Person {}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx|{
        let name = Signal::new(String::from("Jeff"));

        Person { name }.build(cx);

        Label::new(cx, name);
    })
    .run()
}
```

When the `name` field changes, the text of the label updates to show the new value.

## See also

- [Signals](./signals.md)
- [Reading Signals](./reading_signals.md)
- [Writing Signals](./writing_signals.md)
- [Conditional views](./conditional_views.md)