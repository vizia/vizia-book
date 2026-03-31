# Custom View Modifiers

Custom modifiers make your component API ergonomic and expressive.

## Define a trait

```rust,ignore
use vizia::prelude::*;

pub trait StatCardModifiers {
	fn highlighted(self, flag: impl Res<bool> + 'static) -> Self;
}
```

## Implement for a specific handle type

```rust,ignore
impl<'a> StatCardModifiers for Handle<'a, StatCard> {
	fn highlighted(self, flag: impl Res<bool> + 'static) -> Self {
		self.toggle_class("highlighted", flag)
	}
}
```

This keeps the modifier scoped to `StatCard` handles.

## Use the modifier

```rust,ignore
let is_hot = Signal::new(true);

StatCard::new(cx, "CPU", Signal::new(42))
	.highlighted(is_hot);
```

## Modifier design tips

1. Use descriptive names (`highlighted`, `compact`, `status_color`).
2. Prefer reactive parameters (`impl Res<T>`) for stateful styling.
3. Keep modifiers focused on style/layout behavior.
4. Put data writes in events/models, not modifier methods.
