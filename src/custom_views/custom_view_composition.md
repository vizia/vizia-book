# Custom View Composition

Most custom views are compositions of existing views.

## Compose inside `build`

Create child views in the constructor's `build` closure:

```rust,ignore
use vizia::prelude::*;

pub struct StatCard {
	title: String,
	value: Signal<i32>,
}

impl StatCard {
	pub fn new(cx: &mut Context, title: impl Into<String>, value: Signal<i32>) -> Handle<Self> {
		let title = title.into();

		Self { title: title.clone(), value }.build(cx, move |cx| {
			VStack::new(cx, move |cx| {
				Label::new(cx, title.clone()).class("stat-title");
				Label::new(cx, value).class("stat-value");
			})
			.class("stat-body");
		})
	}
}

impl View for StatCard {
	fn element(&self) -> Option<&'static str> {
		Some("stat_card")
	}
}
```

## Composition guidelines

1. Keep layout structure in the custom view constructor.
2. Pass reactive inputs (signals/memos) to children instead of copying values.
3. Expose style hooks with classes and `element()` names.
4. Split very large custom views into smaller custom subviews.

## Styling hooks

By returning `Some("stat_card")` from `element()`, you can style the root custom view in CSS:

```css
stat_card {
	background-color: #1d2430;
	border-radius: 8px;
	child-space: 8px;
}
```

Next: add model-backed state to custom views.