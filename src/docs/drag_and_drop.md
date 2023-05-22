# Drag and Drop

```rust
// Define what data to store when a view is dragged.
Element::new(cx)
    .on_drag(|ex| ex.set_drop_data(ex.current()));

// Define what should happen if a view is dropped on.
Element::new(cx)
    .on_drop(|ex, drop_data|{
        if let DropData::Id(id) = drop_data {
            // Get the background color of the dragged view.
            let bg = ex.with_current(id, |ex| ex.background_color());
            // Set the background color of the drop target view 
            // to the background color of the dragged view.
            ex.set_background_color(bg);
        }
    })
```