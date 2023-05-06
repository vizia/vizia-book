# Localizing the Application

An important part of building a GUI is making sure the application is usable for...

Vizia uses fluent to provide translatable text for an application.


## Creating fluent files

Fluent files provide a key-value store for translated text strings which vizia uses to localize text in an application.

Let's add two fluent (.ftl) files to our application. We'll call them the same name, `counter.ftl`, but place them within separate directories, `en-Us` and `es`, within a `resources` directory.

<!-- Your project folder structure should now look like this:

```bash
.
├── Cargo.toml
├── .git
├── .gitignore
└── src
    └── resources
        └── en-US
            └── counter.ftl
        └── es
            └── counter.ftl
    └── main.rs
    └── style.css
``` -->


*resources/en-US/counter.ftl*
```
inc = Increment
dec = Decrement
```

*resources/es/counter.ftl*
```
inc = Incrementar
dec = Decrementar
```

## Adding translations to the application

```rust
cx.add_translation(
    langid!("en-US"),
    include_str!("resources/en-US/counter.ftl").to_owned(),
);

cx.add_translation(
    langid!("es"),
    include_str!("resources/es/counter.ftl").to_owned(),
);
```

## Localizing text

To localize the text in our application we use the `Localized` type within the labels of the buttons, passing the translation keys to the constructor:

```rust
Button::new(
    cx,
    |ex| ex.emit(AppEvent::Decrement),
    |cx| Label::new(cx, Localized::new("dec")),
);

Button::new(
    cx,
    |ex| ex.emit(AppEvent::Increment),
    |cx| Label::new(cx, Localized::new("inc")),
);
```

When the application is run these `Localized` objects are replaced with the translated strings from the fluent files based on the system locale.

## Testing localization

The locale used for selecting translations is stored in a model called the `Environment`. By default the locale used for translations is set to the system locale, however, we can use an `EnvironmentEvent` to set the locale to a user-specified value. This is useful for testing the localization of an application.

```rust
cx.emit(EnvironmentEvent::SetLocale(langid!("es")));
```

If we run our app now we'll see that the text has been translated into Spanish. Because the buttons are set up to hug their content, the widths of the buttons have automatically updated to accommodate the slightly longer text strings.

Note that if you're following this tutorial on a machine where the system locale is already set to Spanish then you'll see the translations without needing to emit the `SetLocale` event. To see the English versions of the text replace the `"es"` with `"en-US"` when emitting the event. 