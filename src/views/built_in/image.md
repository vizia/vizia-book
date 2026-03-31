# Image

Views for displaying raster and SVG image assets.

## When To Use It

Use `Image` for URL/resource-based bitmap images and `Svg` for embedded icon/vector data.

## Constructing an Image

```rust,ignore
use vizia::prelude::*;

Image::new(cx, "assets/images/logo.png")
	.width(Pixels(128.0))
	.height(Pixels(128.0));
```

## Constructing an Svg

```rust,ignore
use vizia::prelude::*;

Svg::new(cx, ICON_CHEVRON_RIGHT)
	.width(Pixels(16.0))
	.height(Pixels(16.0));
```

`Svg::new` loads data through the resource system and applies it as a background image on the `svg` element.

## API Notes

- `Image::new(cx, img)` sets a background image URL from the provided value.
- `Svg::new(cx, data)` loads SVG bytes and creates an `svg` view.

## Components and Styling

| Selector | Description |
|---|---|
| `image` | Root raster image view element. |
| `svg` | Root SVG view element. |

Use standard background-related style properties (`background-size`, etc.) to tune rendering behavior.

## Accessibility

For meaningful imagery, pair image views with nearby labels/text context or accessible naming on the containing control.

