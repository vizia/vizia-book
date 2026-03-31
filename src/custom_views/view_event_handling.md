# View Event Handling

Custom views can handle events by overriding `event()` in their `View` implementation.

## Handling view events

```rust,ignore
use vizia::prelude::*;

pub struct ClickableBadge {
	text: String,
}

impl ClickableBadge {
	pub fn new(cx: &mut Context, text: impl Into<String>) -> Handle<Self> {
		let text = text.into();
		Self { text: text.clone() }.build(cx, move |cx| {
			Label::new(cx, text);
		})
	}
}

impl View for ClickableBadge {
	fn event(&mut self, cx: &mut EventContext, event: &mut Event) {
		event.map(|window_event, _meta| match window_event {
			WindowEvent::MouseDown(_) => {
				cx.emit(BadgeEvent::Pressed);
			}

			_ => {}
		});
	}
}

pub enum BadgeEvent {
	Pressed,
}
```

## Best practices

1. Emit domain events (`BadgeEvent::Pressed`) from views.
2. Handle data writes in model event handlers.
3. Use `meta.consume()` only when you intentionally want to stop propagation.

This keeps custom views reusable and avoids coupling them to specific data models.

Next: bind signals directly inside custom view constructors.
