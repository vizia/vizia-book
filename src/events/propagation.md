# Propagation and Targeting

Event metadata controls where an event travels.

Vizia supports these propagation modes:

- `Propagation::Up`: from target upward through ancestors.
- `Propagation::Direct`: only the target entity receives the event.
- `Propagation::Subtree`: target entity and its descendants.

## `emit` vs `emit_to`

Use `emit` for the common bubble-up flow from the current entity:

```rust,ignore
cx.emit(AppEvent::Save);
```

Use `emit_to` to send directly to a known target entity:

```rust,ignore
let target: Entity = some_entity;
cx.emit_to(target, AppEvent::Save);
```

`emit_to` sends the event with direct propagation.

## Custom propagation

When you need precise control, build an `Event` manually and send it with `emit_custom`.

```rust,ignore
let custom = Event::new(AppEvent::Refresh)
    .target(target)
    .origin(cx.current)
    .propagate(Propagation::Subtree);

cx.emit_custom(custom);
```

## Consuming an event

Inside a handler, call `meta.consume()` to stop further propagation.

```rust,ignore
event.map(|app_event, meta| match app_event {
    AppEvent::OpenMenu => {
        meta.consume();
    }
});
```

This is useful when a child view handles an interaction and parent handlers should not react to the same event.
