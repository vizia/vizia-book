# A closer look at lenses

The `Lens` derive macro generates a type for each of the fields of the struct, and then a constant instance of each type is created with the same name as the field, within a module with the same name as the struct.

```rust
#[derive(Lens)]
pub struct Person {
    pub name: String,
}

impl Model for Person {}
```

Each generated type implements the `Lens` trait, which looks something like this:

```rust
pub trait Lens {
    type Source;
    type Target;

    fn view(&self, &Self::Source) -> &Self::Target;
}
```
> NOTE - The above code is a simplification.

The view method of the lens takes a reference to a `Source` type and produces a reference to a `Target` type. For the `Person::name` lens, the source is `Person` and the target is `String`. The view method, given a reference to `Person`, returns a reference to the `name`.

## A closer look at binding

