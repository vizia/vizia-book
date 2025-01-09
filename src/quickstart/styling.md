# Styling the Application

Previously we saw how modifiers can be used to style views inline. However, vizia also allows views to be styled with Cascading Style Sheets (CSS) so that style rules can be shared by multiple views. Additionally, stylesheets can be reloaded at runtime by pressing the F5 key.

## Adding class names to the views
First we'll add some class names to our views, using the `class` style modifier, so we can target them with a CSS stylesheet:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

        HStack::new(cx, |cx|{
            Button::new(cx, |cx| Label::new(cx, "Decrement"))
                .class("dec");
            Button::new(cx, |cx| Label::new(cx, "Increment"))
                .class("inc");
            Label::new(cx, "0")
                .class("count");
        })
        .class("row");
    })
    .title("Counter")
    .inner_size((400, 150))
    .run();
}
```

## Creating a stylesheet
Next, we'll create a `style.css` file in the `src` directory with the following CSS code:

```css
.row {
    alignment: center;
    gap: 20px;
}

button {
    border-width: 0px;
}

button.dec {
    background-color: rgb(170, 50, 50);
}

button.inc {
    background-color: rgb(50, 170, 50);
}

label.count {
    alignment: center;
    border-width: 1px;
    border-color: #808080;
    border-radius: 4px;
    width: 50px;
    height: 32px;
}
```


## Adding the stylesheet to the app
Finally, we'll add the CSS file to the vizia application using the `.add_stylesheet()` function on the context. Here we're using the `include_style!()` macro, which will dynamically load the stylesheet at runtime in debug mode, but include the stylesheet into the binary in release mode. This should be done just after creating the application:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

        // Add the stylesheet to the app
        cx.add_stylesheet(include_style!("src/style.css"))
            .expect("Failed to load stylesheet");

        HStack::new(cx, |cx|{
            Button::new(cx, |cx| Label::new(cx, "Decrement"))
                .class("dec");
            Button::new(cx, |cx| Label::new(cx, "Increment"))
                .class("inc");
            Label::new(cx, "0")
                .class("count");
        })
        .class("row");
    })
    .title("Counter")
    .inner_size((400, 150))
    .run();
}
```

If we run the app now with `cargo run` we get the following:

<p align="center">
<img src="img/styling.png" alt="A vizia app showing two buttons and a label"/>
</p>