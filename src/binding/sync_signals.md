# Sync Signals

`SyncSignal<T>` is a thread-safe version of `Signal<T>`. Use it when you need to read or write reactive state from outside the main UI thread.

## Creating a sync signal

```rust,ignore
use vizia::prelude::*;

let progress = SyncSignal::new(0.0f32);
```

## Sending updates from a background thread

`SyncSignal` implements `Send + Sync`, so it can be moved into threads and async tasks:

```rust,ignore
let progress = SyncSignal::new(0.0f32);

std::thread::spawn(move || {
    for i in 0..=100 {
        progress.set(i as f32 / 100.0);
        std::thread::sleep(std::time::Duration::from_millis(50));
    }
});

// Bind to the signal in the UI
Application::new(|cx| {
    ProgressBar::horizontal(cx, progress);
}).run();
```

Updates from the background thread are picked up on the next frame.

## Read-only and write-only variants

Just like `Signal`, `SyncSignal` can be split:

```rust,ignore
let read = progress.read_only();   // SyncReadSignal<f32>
let write = progress.write_only(); // SyncWriteSignal<f32>
```

Share `write` with background threads and keep `read` in the UI.

## When to use SyncSignal vs Signal

- Use `Signal<T>` for state that is only ever read and written from the UI thread.
- Use `SyncSignal<T>` when a background thread or async task needs to push updates.

## See also

- [Signals](./signals.md)
- [Writing Signals](./writing_signals.md)
