# Managing Resources

Resources are the non-view data your application depends on at runtime:

- Fonts for typography
- Icons and SVG assets
- Raster images
- Localized text (translations)
- Stylesheets for visual design

In Vizia, most resources are loaded through methods on the context inside your `Application::new` closure.

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
	Application::new(|cx| {
		cx.add_stylesheet(include_style!("src/style.css"))
			.expect("failed to load stylesheet");

		cx.load_image(
			"logo",
			include_bytes!("resources/images/logo.png"),
			ImageRetentionPolicy::DropWhenNoObservers,
		);

		Label::new(cx, "Resources loaded");
	})
	.run()
}
```

## Suggested structure

Keep resource files in predictable folders so paths stay stable:

```text
.
├── Cargo.toml
└── src
	├── main.rs
	└── resources
		├── fonts/
		├── images/
		├── icons/
		└── translations/
```

## Next sections

The following pages cover each resource type in detail:

- Fonts
- Icons
- Images
- Translations
- Stylesheets
