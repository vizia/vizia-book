# Icons

Vizia supports window icons, built-in SVG icons, custom SVG assets, and cursor icons.

## Window Icon

Set the application window icon with the `.icon()` modifier.
The icon data must be RGBA bytes plus width and height.

```rust,ignore
use vizia::prelude::*;
use image::ImageReader;

fn main() -> Result<(), ApplicationError> {
    let icon = ImageReader::open("resources/icons/app.png")?
        .decode()?
        .to_rgba8();
    let (width, height) = icon.dimensions();
    let icon_data = icon.into_raw();

    Application::new(|cx| {
        Label::new(cx, "My Application");
    })
    .icon(width, height, icon_data)
    .title("My App")
    .run()
}
```

## Built-in icons

Vizia ships many built-in SVG icons in `vizia::icons`.

Render them with `Svg::new`:

```rust,ignore
use vizia::prelude::*;
use vizia::icons::{ICON_CHECK, ICON_CLOSE, ICON_USER, ICON_SETTINGS};

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        HStack::new(cx, |cx| {
            Svg::new(cx, ICON_CHECK);
            Svg::new(cx, ICON_CLOSE);
            Svg::new(cx, ICON_USER);
            Svg::new(cx, ICON_SETTINGS);
        });
    })
    .run()
}
```

## Styling icons

Icons are regular views, so you can style size, color, spacing, and layout.

```rust,ignore
use vizia::prelude::*;
use vizia::icons::ICON_CHECK;

Application::new(|cx| {
    Svg::new(cx, ICON_CHECK)
        .width(Pixels(32.0))
        .height(Pixels(32.0))
        .background_color(Color::rgb(76, 175, 80))
        .corner_radius(Pixels(4.0));
})
.run()
```

## Custom SVG icons

In addition to built-in icons, you can render your own SVG bytes.

### SVG from file bytes

```rust,ignore
use vizia::prelude::*;

Application::new(|cx| {
    Svg::new(cx, include_bytes!("resources/icons/custom.svg"))
        .width(Pixels(64.0))
        .height(Pixels(64.0));
})
.run()
```

### SVG from a context resource

```rust,ignore
use vizia::prelude::*;

Application::new(|cx| {
    cx.load_svg(
        "app.logo",
        include_bytes!("resources/icons/logo.svg"),
        ImageRetentionPolicy::DropWhenNoObservers,
    );

    Svg::new(cx, "app.logo")
        .width(Pixels(48.0))
        .height(Pixels(48.0));
})
.run()
```

## Cursor icons

Cursor icons are also part of the resource story, because they define visual feedback for interaction.

### In CSS

```rust,ignore
use vizia::prelude::*;

const STYLE: &str = r#"
    .interactive {
        cursor: hand;
    }

    .editable {
        cursor: text;
    }

    .busy {
        cursor: progress;
    }
"#;

Application::new(|cx| {
    cx.add_stylesheet(STYLE).expect("Failed to add stylesheet");

    VStack::new(cx, |cx| {
        Label::new(cx, "Clickable item").class("interactive");
        Label::new(cx, "Text input area").class("editable");
        Label::new(cx, "Loading...").class("busy");
    });
})
.run()
```

### Programmatic cursor changes

```rust,ignore
use vizia::prelude::*;

Application::new(|cx| {
    Label::new(cx, "Hover me")
        .on_hover(|cx| {
            cx.emit(WindowEvent::SetCursor(CursorIcon::Hand));
        })
        .on_hover_out(|cx| {
            cx.emit(WindowEvent::SetCursor(CursorIcon::Default));
        });
})
.run()
```