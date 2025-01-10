# Translations

Vizia uses fluent files to translate text. A fluent file can be added to vizia using the `add_translation()` function on the context.

```rust
cx.add_translation(langid!("fr"), include_str!("resources/translations/fr/hello.ftl"));
```

It is recommended to have a separate folder, named after the locale, for each translation file. For example:

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