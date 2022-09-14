# The Data Trait

When views bind to model data the binding system must determine whether the data has changed. To do this it stores a copy of the data for each binding. To be able to compare the previous data to the new version, the data type must implement the `Data` trait.

Note that this is only required for the data types which are bound to. The model itself does not need to implement `Data` unless a view is to bind to the entire model and not just a field within.

Most simple types already implement the `Data` trait, but for custom types there is a derive macro that can be used as long as the field types also implement the `Data` trait:

```rust
#[derive(Clone, Data)]
pub struct CustomData {
    text: String,
} 
```

