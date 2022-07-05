# Binding

Binding is the concept of updating views in response to changes in model data.

## View Binding 

Some views accept a lens as well as a value as an input. When provided a lens, the view sets up a binding to the data.

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
Note the `Lens` derive, which allows us to bind to pieces, in this case a field, of the model data.

When the `name` changes, the text of the label updates to show the new value.

## The `Binding` View
There is a special container view in Vizia called the `Binding` view. This view binds to some data and will rebuild its contents if the data changes.

The following code produces the same result as passing the lens directly to the label, however, the binding view will rebuild the label when the name changes, which is unnecessary. 

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