# Signals

Signals are values with change tracking built in. In practice, this means you create a signal once, bind it to views and modifiers, and then update it as application state changes.

## Creating a signal

```rust,ignore
let count = Signal::new(0);
```

Signals are `Copy`, so you can pass them into bindings and callbacks without cloning or borrowing state.

Signals are commonly stored on a model:

```rust,ignore
pub struct AppData {
    count: Signal<i32>,
}

impl Model for AppData {}
```

Signals are lightweight handles and are `Copy`, so you can pass them into bindings and callbacks without cloning or borrowing state.

## Where to read and write

- For read patterns (`get`, `with`, `map`, `SignalGet`), see [Reading Signals](./reading_signals.md).
- For write patterns (`set`, `update`, `set_if_changed`, `write`), see [Writing Signals](./writing_signals.md).

## Capturing signals in closures

When a closure captures a signal, prefer `move`:

```rust,ignore
Binding::new(cx, count, move |cx| {
    if count.get(cx) > 10 {
        Label::new(cx, "Large value");
    }
});
```

Because signals are `Copy`, moving a signal into the closure just copies the handle.

## See also

- [Data binding](./binding.md)
- [Reading Signals](./reading_signals.md)
- [Writing Signals](./writing_signals.md)
- [Derived Signals with Memo](./derived.md)
- [Derived Signals with `map()`](./map.md)
- [Sync Signals](./sync_signals.md)

