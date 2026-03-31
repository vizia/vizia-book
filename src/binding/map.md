# Derived Signals with `map()`

Signals can be transformed into derived values for binding. This is useful when the source state is not the exact shape you want to display.

## Creating a derived value with `map()`

For example, if we have a signal containing a full name, we can derive the first character for display:

```rust,ignore
use vizia::prelude::*;

pub struct AppData {
    pub name: Signal<String>,
}

impl Model for AppData {}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        let name = Signal::new(String::from("John Doe"));

        AppData { name }.build(cx);

        Label::new(cx, name.map(|name| name.chars().next().unwrap_or('?')));
    })
    .inner_size((400, 100))
    .run()
}
```

When `name` changes, the label updates automatically because the derived signal is still reactive.

Derived signals are also useful for:

- Converting numbers to formatted strings.
- Mapping enums to UI labels or colors.
- Computing booleans for `disabled`, `checked`, or class toggles.

## `map()` vs `Memo::new`

- Use `signal.map(...)` for simple one-signal transforms.
- Use `Memo::new(...)` when combining multiple signals, reusing the derived value, or when an explicit named derived value improves readability.

Internally, `map()` also produces a memoized derived value.

## See also

- [Memos](./derived.md)
- [Reading Signals](./reading_signals.md)
