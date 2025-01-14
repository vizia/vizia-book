# Specifying a Locale

By default vizia will use the system locale to translate text and to apply any other kind of localization.

To manually specify the locale, an `EnvironmentEvent` can be used:

```rust
cx.emit(EnvironmentEvent::SetLocale(langid!("en-US")));
```

To reset the locale to use the system locale, use the following `EnvironmentEvent`:

```rust
cx.emit(EnvironmentEvent::UseSystemLocale);
```
