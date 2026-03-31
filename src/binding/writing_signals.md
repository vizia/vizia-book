# Writing Signals

Signals are updated using `set()` or `update()`.

## Setting a new value

Use `set()` when you already know the replacement:

```rust,ignore
self.count.set(42);
```

Note: `set()` triggers all reactive bindings and dependents, *even if the new value is identical to the old one*. Use `set_if_changed()` to skip updates when the value hasn't actually changed.

## Updating based on the current value

Use `update()` when the new value depends on the old one:

```rust,ignore
self.count.update(|n| *n += 1);
```

Like `set()`, `update()` always triggers dependents, regardless of whether the value changed.

This is the preferred pattern in event handlers:

```rust,ignore
impl Model for AppData {
    fn event(&mut self, _cx: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::Increment => self.count.update(|n| *n += 1),
            AppEvent::Decrement => self.count.update(|n| *n -= 1),
            AppEvent::Reset    => self.count.set(0),
        });
    }
}
```

## Writing through a reference

Use `write()` to obtain a mutable reference for in-place mutation of complex types:

```rust,ignore
self.items.write().push(new_item);
```

The change is committed and dependents are notified when the returned `WriteRef` is dropped.

## Setting only if changed

Use `set_if_changed()` to update only when the new value differs from the old:

```rust,ignore
self.count.set_if_changed(42);
```

This avoids triggering unnecessary reactivity when filtering or debouncing input. For types that don't implement `PartialEq`, this method won't be available.

## Write-only signals

Use `Signal::write_only()` to produce a `WriteSignal<T>` that cannot be read. Useful for passing update capability to a component without granting read access:

```rust,ignore
let write_count = count.write_only();

Button::new(cx, |cx| Label::new(cx, "Reset"))
    .on_press(move |_| write_count.set(0));
```

## Split signals

`Signal::new_split()` returns a separate `ReadSignal` and `WriteSignal` from the start:

```rust,ignore
let (read_count, write_count) = Signal::new_split(0i32);
```

## See also

- [Signals](./signals.md)
- [Reading Signals](./reading_signals.md)
- [Sync Signals](./sync_signals.md)
