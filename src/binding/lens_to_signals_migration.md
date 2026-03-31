# Migrating from Lenses to Signals

Vizia's primary app-state pattern is signal-driven. If you are updating older lens-based examples, use the steps below.

## What Changed

- Reactive app state is represented with `Signal<T>` fields.
- You usually create signals first with `Signal::new(...)`, then pass those signals into models and views.
- Signal writes use `.set(...)` and `.update(...)`.
- Lens-style widget inputs such as `AppData::field` should be replaced with signal handles.

## Core Migration Steps

1. Replace plain reactive fields with `Signal<T>`.
2. Initialize signals before building the model.
3. Pass signal handles to views/modifiers.
4. Replace assignment-style writes with signal mutation APIs.

## Before and After

```rust,ignore
// Before
#[derive(Lens)]
struct AppData {
	count: i32,
}

Label::new(cx, AppData::count);
self.count += 1;
```

```rust,ignore
// After
struct AppData {
	count: Signal<i32>,
}

let count = Signal::new(0);
AppData { count }.build(cx);

Label::new(cx, count);
self.count.update(|count| *count += 1);
```

## Derived Values

- Use `signal.map(...)` for simple projections from one signal.
- Use `Memo::new(...)` for multi-signal or reusable computed state.

## When Setup and Usage Are Split

If signal creation and view construction happen in different modules, read the signal from your model through `cx.data()` and pass it along explicitly.

For a complete migration reference, see the repo guide at `vizia/MIGRATION_LENS_TO_SIGNALS.md`.
