# Custom View Modifiers

To create a set of custom view modifiers, first declare a trait with the desired modifier functions. The modifier functions must take `self` by value and return `Self`.

```rust
pub trait CustomModifiers:  {
    fn title(self) -> Self;
}
```

Next, we can implement the custom modifiers for all views like so:

```rust
impl<'a, V: View> CustomModifiers for Handle<'a, V> {
    fn title(self) -> Self {
        self.font_size(24.0).font_weight(FontWeight::Bold)
    }
}
```

Sometimes it may be more appropriate to implement the custom modifiers for specific views. For example, we can implement the custom modifiers just the `Label` view like so:

```rust
impl<'a> CustomModifiers for Handle<'a, Label> {
    fn title(self) -> Self {
        self.font_size(24.0).font_weight(FontWeightKeyword::Bold)
    }
}
```

As long as `CustomModifiers` is imported we can then use the custom `title()` modifier like any other modifier on a label:

```rust
Label::new("Some Kind of Title").title();
```