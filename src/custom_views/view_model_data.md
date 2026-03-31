# View Model Data

Custom views often need state. Use one of these patterns:

1. View-local fields for fixed configuration.
2. Signals for reactive local state.
3. Model data when state is shared across multiple views.

## Model-backed custom view

```rust,ignore
use vizia::prelude::*;

pub struct CounterModel {
	count: Signal<i32>,
}

impl Model for CounterModel {}

pub struct CounterView;

impl CounterView {
	pub fn new(cx: &mut Context, count: Signal<i32>) -> Handle<Self> {
		Self.build(cx, |cx| {
			Label::new(cx, count);
		})
	}
}

impl View for CounterView {}

fn main() -> Result<(), ApplicationError> {
	Application::new(|cx| {
		let count = Signal::new(0);
		CounterModel { count }.build(cx);

		CounterView::new(cx, count);
	})
	.run()
}
```

## Choosing ownership

- If state is shared, keep it in a model and pass signals in.
- If state is only for one component instance, keep it local.
- Avoid duplicating the same state in both view fields and model data.

Next: handle events inside custom views and route state writes through models.
