# Size

The size of a view is controlled by the `width` and `height` properties, and can be specified using `Units`, which can be pixels, a percentage, a stretch factor, or auto.

The `width` and `height` of a view can be specified using the respective layout modifiers which use the `Units` type:

```rust
use vizia::prelude::*;

Application::new(|cx|{
    Label::new(cx, "Hello World")
        .background_color(Color::gray())
        .width(Pixels(200.0))
        .height(Pixels(30.0));
})
.inner_size((400, 100))
.run();
```

The width and height can be set simultaneously with the `size` layout modifier:

```rust
use vizia::prelude::*;

Application::new(|cx|{
    Label::new(cx, "Hello World")
        .background_color(Color::gray())
        .size(Pixels(50.0));
})
.inner_size((400, 100))
.run();
```

Or we can use CSS to specify the width and height:

```rust
use vizia::prelude::*;

const STYLE: &str = r#"
    .hello_label {
        width: 20px;
        height: 1s;
    }
"#;

Application::new(|cx|{

    cx.add_theme(STYLE);

    Label::new(cx, "Hello World")
        .background_color(Color::gray())
        .class("hello_label");
})
.inner_size((400, 100))
.run();
```

> Note that inline layout modifiers will override CSS properties. 

## Stretch Size

The width and height of a view can also be specified with a stretch factor:

```rust
use vizia::prelude::*;

Application::new(|cx|{
    HStack::new(cx, |cx|{
        Label::new(cx, "Hello")
            .background_color(Color::gray())
            .width(Stretch(1.0));

        Label::new(cx, "World")
            .width(Stretch(2.0));
    });
})
.inner_size((400, 100))
.run();
```

In the above example, the first label occupies 1/3 of the horizontal space and the second occupies 2/3 of the free space.

The free space is the size of the parent in the main axis (width for row, height for column) minus any fixed space/size. 

## Auto Size

The width and height of a view can be specified as `auto`, which results in the view 'hugging' its children in specified axis:

```
Application::new(|cx|{
    HStack::new(cx, |cx|{
        Label::new(cx, "Hello");
        Label::new(cx, "World");
    })
    .background_color(Color::gray)
    .height(Auto);
})
.inner_size((400, 100))
.run();
```

In the above example, the height of the `HStack` is specified as `Auto`, which causes the computed height to become the maximum of its child heights.

If we had specified the hstack width to be `Auto`, then the computed width would be the sum of the widths of its children.