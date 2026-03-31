# Reading Signals

Signals can be read in several ways depending on where the read takes place.

## Reading inside reactive contexts

Use `get()` to read the current value of the signal:

```rust,ignore
fn event(&mut self, _cx: &mut EventContext, event: &mut Event) {
    event.map(|app_event, _| match app_event {
        AppEvent::Check => {
            let current = self.count.get();
            if current > 10 {
                // ...
            }
        }
    });
}
```

Note: `get()` clones the inner value, so for large types or frequent reads, consider using `with()` instead.


## Reading with `with`

`with()` lets you work with the signal's value without cloning it. Pass a closure that receives a reference:

```rust,ignore
let list_len = self.list.with(|list| list.len());
```

This is useful when the inner type is expensive to clone, or when you just need to inspect or transform a piece of the value.


## Reading with `read()`

`read()` gives direct access to the signal value through a read guard (`ReadRef`) instead of cloning.

```rust,ignore
let count_ref = self.count.read();
if *count_ref > 10 {
    // ...
}
```

Use this when you want borrow-style access to the value. Like other tracked reads, `read()` subscribes the current reactive context.


## Read-only signals

When a part of your code should only read a signal, pass a `ReadSignal<T>` instead of `Signal<T>`.

You can create one with `read_only()`:

```rust,ignore
let count: Signal<i32> = Signal::new(0);
let count_read: ReadSignal<i32> = count.read_only();
```

Or split a signal into read and write handles with `new_split()`:

```rust,ignore
let (count_read, count_write) = Signal::new_split(0);
```

`ReadSignal<T>` supports reading methods like `get()`, `with()`, and `read()`, but cannot be used to write. This helps make APIs clearer and prevents accidental mutation.



## See also

- [Signals](./signals.md)
- [Writing Signals](./writing_signals.md)
- [Derived Signals](./derived.md)
