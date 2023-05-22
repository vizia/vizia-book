# Localizing Views

Things like colors and symbols can have different meanings across cultures and languages, and so for some locales the contents of a view, or even the view itself, must be replaced. This can be achieved with a binding to the locale data in the `Environment` model.

For example, to replace a view based on the locale:

```rust
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
```

Or we can change a style property based on the locale:

```rust
Element::new(cx).background_color(Environment::locale.map(|lang|{
    if lang.to_string() == "en-US"{
        Color::red()
    } else {
        Color::blue()
    }
}));
```

Or toggle a style class:

```rust
Element::new(cx)
    .toggle_class("eng", Environment::locale.map(|lang| lang.to_string() == "en-US"));
```