# Lenses

## The Lens trait
A lens is essentially a mapping from some data to a piece of 

## The Lens derive macro 
The `Lens` derive macro is used to generate lenses for each field of a struct definition. For example:

```rust
#[derive(Lens)]
struct AppData {
    count: i32,
    name: String,
}
```

This will generate a zero-sized type, which implements the `Lens` tait, for each field of the struct. 

A static instance, with the same name as the field, is then initialized for each generated type within a module with the same name as the struct. 

This allows the lens to used with the following syntax:

```rust
AppData::count
```

## Data Binding
A binding creates a `LensWrap` 
