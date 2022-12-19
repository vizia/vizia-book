# Data Binding

Data binding is the concept of linking model data to views, so that when the model data is changed, the views observing this data update in response. 

<!-- Therefore, it is data binding which provides the mechanism for reactivity in Vizia. -->

In Vizia, data binding is achieved through the use of lenses. A lens is an object which allows you to *select* some part of a model and inspect its value. These lens objects are then used to form a binding between views and these parts of the model, updating when only these specific parts have changed.

The `Lens` derive macro can be used to generate a lens for each field of a struct. These lenses can then be used to transform a reference to the struct into a reference to each of its fields. The generated lenses are given the same name as the field and placed in a module with the same name as the struct. For example, given the following definition of some model data:

```rust
use vizia::prelude::*;

#[derive(Lens)]
pub struct AppData {
    name: String,
}

impl Model for AppData {}

fn main() {
    Application::new(|cx|{

    }).run();
}
```

A lens to the `name` field is generated as `AppData::name`. We can then use this lens with the `Label` view to set up a binding between the label and the name field.

```rust
use vizia::prelude::*;

#[derive(Lens)]
pub struct AppData {
    name: String,
}

impl Model for AppData {}

fn main() {
    Application::new(|cx|{
        Label::new(cx, AppData::name);
    }).run();
}
```

The `Label` view accepts a lens to any type which implements the `ToString` trait.

// end here



A lens is a type which implements the `Lens` trait, which has a `Source` associated type, a `Target` associated type, and a `view` method. There are a few different types of lenses, but the simplest type transforms a reference to the `Source` into a reference to the `Target`.

Let's see how this is used to bind a `Label` view to a string property in the model data.




Ths trait has a function which returns some data derived from the 

This trait describes how to extract a reference to some part of the model data. For example, given a reference to the model data, a lens could 

This trait defines a `Source` type and a `Target` type, and a `view` function which, given a reference to the source, returns some output .  

## View Binding 

Some views accept a [lens](./lenses.md), as well as a value, as an input. When provided a lens, the view sets up a binding to the data.

For example, the `Label` view accepts a lens to any type which implements `ToString`:

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
Note the `Lens` derive, which allows us to bind to a field of the model data. When the `name` field changes, the text of the label updates to show the new value.

## The `Binding` View
There is a special container view in Vizia called the `Binding` view. This view binds to some data and will remove and then rebuild its contents if the data changes.

The following code produces the same result as passing the lens directly to the label, however, the binding view will rebuild the label when the name changes, which is unnecessary. The binding view is useful for [constructing views conditionally](conditional_views.md).

```rust
pub struct Person {
    pub name: String,
}

impl Model for Person {}

Application::new(|cx|{
    Binding::new(cx, Person::name, |cx, name|{
        Label::new(cx, &name.get(cx));
    });
})
.run()
```