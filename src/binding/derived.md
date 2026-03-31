# Derived Signals with Memo

`Memo<T>` is a derived reactive value. It recomputes when tracked dependencies change, and only notifies dependents when the computed value is different from the previous value.

Use `Memo` when you want to:

- Derive one value from one or more signals.
- Share that derived value in multiple places.
- Avoid unnecessary downstream updates when the output did not change.

## Creating a memo

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        let count = Signal::new(0);

        let is_even = Memo::new(move |_| count.get() % 2 == 0);

        Label::new(cx, is_even.map(|even| {
            if *even { "Even" } else { "Odd" }
        }));
    })
    .run()
}
```

In this example, `is_even` tracks `count`. Whenever `count` changes, the memo recomputes, and the label updates only if the `bool` result changed.

## Memo from multiple signals

`Memo::new` can read from multiple signals and derive a single output:

```rust,ignore
use vizia::prelude::*;

let first_name = Signal::new(String::from("Ada"));
let last_name = Signal::new(String::from("Lovelace"));

let full_name = Memo::new(move |_| {
    format!("{} {}", first_name.get(), last_name.get())
});

Label::new(cx, full_name);
```

This pattern keeps formatting logic in one place and gives you a reusable derived value for views and modifiers.

## About the closure argument

The closure signature is `Fn(Option<&T>) -> T`. The parameter is the previous memo value, when available.

```rust,ignore
let memo = Memo::new(|previous: Option<&i32>| {
    let _old = previous.copied().unwrap_or_default();
    42
});
```

Most of the time you can ignore the argument with `_` and write `Memo::new(move |_| ...)`.

## See also

- [Derived signals with `map()`](./map.md)