# State and Data Binding

Vizia uses a concept called **data binding** to provide reactivity. 

## Models
Application data is stored in a **Model**, which is any type which implments the `Model` trait. For example:

```rust
#[derive(Lens)]
struct AppData {
    count: i32,
}
```

In order to be able to bind our views to the data we need to derive `Lens` on the model, which generates for us lenses for each of the fields of the struct.