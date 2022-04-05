# Image

An image lets you display raster graphics.
The complicated part of using images is that you need to do the loading process by yourself, since Vizia doesn't want to adopt any particular URL scheme.
In order to load an image, you can provide a loading routine with `cx.set_image_loader`:

```rust
use vizia::*;
use image; // the `image` crate

fn main() {
    Application::new(WindowDescription::new(), |cx| {
        cx.set_image_loader(my_loader);
        Image::new(cx, "my_image.png");
    }).run();
}

fn my_loader(cx: &mut Context, path: &str) {
    if let Ok(img) = image::open(path) {
        cx.load_image(path.to_owned(), img, ImageRetentionPolicy::Forever);
    }
}
```

This example simply loads images from the local filesystem.
If the load fails, the image will simply not be inserted into the cache, and the GUI will display a default "broken image" icon.

If you are doing something complicated, like loading the image from the network, you can create a worker thread using `cx.spawn()` and the default image will be shown until the load is finished.

## Sizing images

An image will scale to the size of its container, without preserving aspect ratio.
If you think this is unacceptable, please complain. :)
If you want to display an image at its original size, set its width and height to `auto` - this is the default.
