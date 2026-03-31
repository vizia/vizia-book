# Images

Vizia supports both raster images and SVG graphics.

## Loading and displaying raster images

Use the `Image` view to show a raster image by name. Load the image into the context first:

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.load_image(
            "my_image",
            include_bytes!("resources/images/photo.png"),
            ImageRetentionPolicy::DropWhenUnusedForOneFrame,
        );

        Image::new(cx, "my_image");
    })
    .run()
}
```

## Displaying SVG content

Use the `Svg` view to display inline SVG data:

```rust,ignore
use vizia::prelude::*;
use vizia::icons::ICON_CHECK;

Application::new(|cx| {
    Svg::new(cx, ICON_CHECK);
})
.run();
```

Alternatively, load arbitrary SVG bytes:

```rust,ignore
Svg::new(cx, include_bytes!("resources/logo.svg"));
```

## Using images as backgrounds

Images can also be set as a background using the `background_image` modifier or in CSS:

```rust,ignore
Element::new(cx)
    .size(Pixels(200.0))
    .background_image("my_image");
```

```css
.banner {
    background-image: url("banner.png");
    background-size: cover;
}
```

## Image retention policy

When calling `cx.load_image()`, specify how long the image stays in memory:

| Policy | Description |
|---|---|
| `DropWhenUnusedForOneFrame` | Freed on the next frame after no view references it. |
| `DropWhenNoObservers` | Freed when no views are observing the image anymore. |
| `Forever` | Kept in memory for the lifetime of the application. |

## Loading images from files at runtime

Register an image loader with `cx.set_image_loader`. The closure receives a `&mut ResourceContext`
and the path string. Spawn a background thread to do IO, then deliver the result via `proxy.load_image`:

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.set_image_loader(|cx, path| {
            let path = path.to_string();
            cx.spawn(move |proxy| {
                if let Ok(bytes) = std::fs::read(&path) {
                    let _ = proxy.load_image(
                        path,
                        &bytes,
                        ImageRetentionPolicy::DropWhenNoObservers,
                    );
                }
            });
        });

        Image::new(cx, "assets/images/logo.png");
    })
    .run()
}
```

Once registered, any `Image::new(cx, path)` or CSS `background-image: url("...")` call for an image path
not already loaded will trigger the loader.

## Tips

- Use `DropWhenNoObservers` for large assets that are not always visible.
- Use stable string keys (for example, `"app.logo"`) instead of ad-hoc paths when preloading assets.
- Keep image decoding in background threads when loading from disk at runtime.
