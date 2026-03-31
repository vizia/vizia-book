# Specifying a Locale

By default vizia will use the system locale to translate text and to apply any other kind of localization.

At startup, vizia reads the locale from the operating system and stores it in the `Environment` model.

To manually specify the locale, an `EnvironmentEvent` can be used:

```rust,ignore
cx.emit(EnvironmentEvent::SetLocale(langid!("en-US")));
```

To reset the locale to use the system locale, use the following `EnvironmentEvent`:

```rust,ignore
cx.emit(EnvironmentEvent::UseSystemLocale);
```

## Locale Fallback and Negotiation

If an exact locale is not available, vizia negotiates to the closest supported locale from the translations you have loaded.

For example, if your app loads only `en-US` and `fr`, then setting `en-AU` will fall back to a compatible English locale.

```rust,ignore
cx.add_translation(langid!("en-US"), include_str!("translations/en-US/app.ftl").to_owned())
	.expect("Failed to add en-US translation");
cx.add_translation(langid!("fr"), include_str!("translations/fr/app.ftl").to_owned())
	.expect("Failed to add fr translation");

cx.emit(EnvironmentEvent::SetLocale(langid!("en-AU"))); // Falls back to a loaded English locale
```

This means you can ship a smaller set of locales while still handling related region variants gracefully.

