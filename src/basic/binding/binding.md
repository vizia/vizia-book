# Data Binding

Data binding is the concept of linking model data to views, so that when the model data is changed, the views observing this data update in response. 

<!-- Therefore, it is data binding which provides the mechanism for reactivity in Vizia. -->

In Vizia, data binding is achieved through the use of lenses. A lens is an object which allows you to *select* some part of a model and inspect its value. These lens objects are then used to form a binding between views and these parts of the model, updating when only these specific parts have changed.

## Lenses

The `Lens` derive macro can be used to generate a lens for each field of a struct. These lenses can then be used to transform a reference to the struct into a reference to each of its fields. The generated lenses are given the same name as the field and placed in a module with the same name as the struct. For example, given the following definition of some model data:

```rust
#[derive(Lens)]
pub struct AppData {
    color: Color,
}

impl Model for AppData {}
```

A lens to the `color` field of the `AppData` struct is generated as `AppData::color`. 

## Property Binding

We can then use this lens with the `background_color` modifier of a view to set up a binding, so that when the data changes the background color is updated. Passing lenses to modifiers is known as *property binding*.

```rust
#[derive(Lens)]
pub struct AppData {
    color: Color,
}

impl Model for AppData {}

fn main() {
    Application::new(|cx|{
        Label::new(cx, "Hello Vizia").background_color(AppData::color);
    }).run();
}
```


## View Binding 

Some views accept a lens as an input. When provided a lens, the view sets up a binding to the data. For example, the `Label` view accepts a lens to any type which implements `ToString`:

```rust
#[derive(Lens)]
pub struct Person {
    pub name: String,
}

impl Model for Person {}

Application::new(|cx|{
    Label::new(cx, Person::name);
})
.run()
```
When the `name` field changes, the text of the label updates to show the new value.