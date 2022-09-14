# Environment

The `Environment` is a built-in model used to specify system specific application data, such as the current locale, which can then be used by any view in the application.

For example, we can bind to the locale and conditionally change the properties of a view depending on the selected language:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx| {
        Binding::new(cx, Environment::locale, |cx, locale| {
            match locale.get(cx).to_string().as_ref() {
                "en-US" => {
                    Element::new(cx).background_color(Color::from("#006847"));
                }

                "fr" => {
                    Element::new(cx).background_color(Color::from("#004768"));
                }

                _ => {}
            }
        });
    })
    .run();
}
```

// Image here

The above example has an `Element` which will change color depending on the locale between `en-US` (US English) and `fr` (french). 

By default the environment will use values specified by the system, such as the system specified language, but we can override these values with an environment event.

For example, we can toggle between two locales with a pair of checkboxes:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx| {
        cx.emit(EnvironmentEvent::SetLocale("en-US".parse().unwrap()));

        HStack::new(cx, |cx| {
            Checkbox::new(cx, Environment::locale.map(|locale| {
                    locale.to_string() == "en-US"
                }))
                .on_toggle(|cx| {
                    cx.emit(EnvironmentEvent::SetLocale("en-US".parse().unwrap()))
                });
            Label::new(cx, "English");

            Checkbox::new(cx, Environment::locale.map(|locale| {
                    locale.to_string() == "fr"
                }))
                .on_toggle(|cx| {
                    cx.emit(EnvironmentEvent::SetLocale("fr".parse().unwrap()))
                });
                .left(Pixels(10.0));
            Label::new(cx, "French");
        })
        .space(Pixels(10.0))
        .child_top(Stretch(1.0))
        .child_bottom(Stretch(1.0))
        .col_between(Pixels(5.0))
        .height(Auto);

        Binding::new(cx, Environment::locale, |cx, locale| {
            match locale.get(cx).to_string().as_ref() {
                "en-US" => {
                    Element::new(cx).background_color(Color::from("#006847"));
                }

                "fr" => {
                    Element::new(cx).background_color(Color::from("#004768"));
                }

                _ => {}
            }
        });
    })
    .run();
}
```

// Image here