# Styling the Application

Previously we saw how modifiers can be used to style views inline. However, vizia also allows views to be styled with Cascading Style Sheets (CSS) so that style rules can be shared by multiple views. Additionally, stylesheets can be reloaded at runtime by pressing the F5 key.

## Adding class names to the views
First we'll add some class names to our views, using the `class` style modifier, so we can target them with a CSS stylesheet:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        
        HStack::new(cx, |cx|{
            Button::new(cx, |_|{}, |cx| Label::new(cx, "Decrement"))
                .class("inc");
            Button::new(cx, |_|{}, |cx| Label::new(cx, "Increment"))
                .class("dec");
            Label::new(cx, "0")
                .class("count");
        });
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
    child-space: 1s;
    col-between: 20px;
}

button.dec {
    background-color: rgb(200, 50, 50);
}

button.inc {
    background-color: rgb(50, 200, 50);
}

label.count {
    child-space: 1s;
    border-width: 1px;
    border-color: #808080;
    border-radius: 4px;
}
```


## Adding the stylesheet to the app
Finally, we'll add the CSS file to the vizia application using the .add_stylesheet()` function on the context. This should be done just after creating the application:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{

        // Add the stylesheet to the app
        cx.add_stylesheet("style.css").expect("Failed to load stylesheet");
        
        HStack::new(cx, |cx|{
            Button::new(cx, |_|{}, |cx| Label::new(cx, "Decrement"))
                .class("inc");
            Button::new(cx, |_|{}, |cx| Label::new(cx, "Increment"))
                .class("dec");
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

// TODO: Image here

