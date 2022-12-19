# Inline Styling (Style Modifiers)
Inline styling refers to applying style modifiers directly on views in Rust code. 

The following example shows how the background color of a view can be modified by a call to a function directly on the view.
```rust
Element::new(cx).background_color(Color::red());
```

Inline style properties override any shared styling which targets the same view.

As initially shown in the [modifiers section](../views/modifiers.md), and detailed in the [property binding section](../binding/property_binding.md), most style modifiers accept a lens as input, which sets up a binding to the corresponding model data.