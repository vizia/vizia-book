# Inline Styling (View Modifiers)
Inline styling refers to applying style modifiers directly on views in Rust code. 

The following example shows how the background color of a view can be modified by a call to a function directly on the view.
```rust
Element::new(cx).background_color(Color::red());
```

> Inline style properties override any shared styling which targets the same view.

## Property Bindings
As well as values, like `Color` or `Units`, style modifiers can also take a lens as input, which sets up a *property binding*. This allows the style properties of a view to update in response to changes in application data without having to rebuild the entire view. 

For example, if we have an `AppData` model with a `custom_color` field of type `Color`, we can bind this directly to the background color of a view like so:

```rust
Element::new(cx).background_color(AppData::custom_color);
```

Then, when the `custom_color` value is changed in the `AppData` model, the background color of the element will update accordingly.