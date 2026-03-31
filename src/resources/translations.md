# Translations

Vizia uses Fluent (`.ftl`) files for localized strings. Load translation files with `cx.add_translation()` during app startup.

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_translation(
            "en-US".parse().unwrap(),
            include_str!("resources/translations/en-US/hello.ftl").to_owned(),
        )
        .expect("Failed to add en-US translation");

        cx.add_translation(
            "fr".parse().unwrap(),
            include_str!("resources/translations/fr/hello.ftl").to_owned(),
        )
        .expect("Failed to add fr translation");

        Label::new(cx, Localized::new("hello-world"));
    })
    .run()
}
```

Use a locale-based folder structure:

```bash
.
├── Cargo.toml
└── src
    ├── resources
    │   └── translations
    │       ├── en-US
    │       │   └── counter.ftl
    │       └── es
    │           └── counter.ftl
    └── main.rs
```

## Multiple files per locale

You can register multiple Fluent files for the same locale. Vizia merges them into one bundle.

```rust,ignore
cx.add_translation(
    "en-US".parse().unwrap(),
    include_str!("resources/translations/en-US/common.ftl").to_owned(),
)
.expect("Failed to add common strings");

cx.add_translation(
    "en-US".parse().unwrap(),
    include_str!("resources/translations/en-US/settings.ftl").to_owned(),
)
.expect("Failed to add settings strings");
```

Splitting translations by feature can make large applications easier to maintain.

## Locale negotiation and fallback

Vizia uses the system locale by default, then negotiates to the best available loaded locale.
If a key is still missing, it falls back per-message to the default bundle.

This means you can load a partial locale and keep the app functional while you complete translations.

## Changing locale at runtime

```rust,ignore
cx.emit(EnvironmentEvent::SetLocale("fr".parse().unwrap()));
```

## Translation diagnostics

Missing messages, missing attributes, and Fluent formatting issues are reported through the `log` backend at `warn` level.

To make these visible while developing, configure a logger for your app (for example `env_logger`).