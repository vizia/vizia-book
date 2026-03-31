# Translating Text

Vizia uses fluent files to translate text. A guide for the fluent language syntax can be found [here](https://projectfluent.org/fluent/guide/).

## Basic Example

An example fluent file might look something like this:

```ftl
hello-world = Bonjour, monde!
```

Where a key on the left of the equals symbol has a corresponding translation on the right.

Then, as shown in the [adding translations](../resources/translations.md) chapter in the resources section of this book, we can add a fluent file for the `fr` locale (french) like so:

```rust,ignore
cx.add_translation(langid!("fr"), include_str!("resources/translations/fr/hello.ftl").to_owned())
    .expect("Failed to add fr translation");
```

And use the `Localized` type with a `Label` to provide a translation key. The key is used to look up the corresponding translation from the relevant fluent file at runtime.

```rust,ignore
Label::new(cx, Localized::new("hello-world"));
```

## Fluent Variables

Fluent files support variables that are placed into translations. A variable is enclosed in curly braces and prefixed with `$`:

```ftl
welcome = Welcome, { $name }!
```

Use the `arg` method on `Localized` to supply a value or signal for the variable. `arg` accepts both static values and reactive signals — when a signal is passed, the label updates automatically when the signal changes.

```rust,ignore
// Static value
Label::new(cx, Localized::new("welcome").arg("name", "Alice"));

// Reactive signal
let username = Signal::new(String::from("Alice"));
Label::new(cx, Localized::new("welcome").arg("name", username));
```

## Selectors and Plurals

Variables can also drive fluent selectors, which choose between multiple variants of a translation:

```ftl
emails =
    { $unread_emails ->
        [one] You have one unread email.
       *[other] You have { $unread_emails } unread emails.
    }
```

Pass the selector value with `arg` in the same way:

```rust,ignore
let emails = Signal::new(3usize);
Label::new(cx, Localized::new("emails").arg("unread_emails", emails));
```

## Mapping Localized Output

Use `map` to transform the translated text after localization has been resolved.

```rust,ignore
Label::new(cx, Localized::new("weekday-mon").map(|text| text.to_uppercase()));
```

This is helpful for view-specific formatting where you still want translators to control the base message.

## Message Values vs Attributes

`Localized` can resolve both message values and fluent attributes. By default, it resolves the main message value:

```ftl
hello = Hello
hello.title = Greeting title
save-button = Save
    .tooltip = Click to save your changes
```

To access an attribute instead of the main message value, use the `.attribute()` method:

```rust,ignore
// Resolves to "Hello"
Label::new(cx, Localized::new("hello"));

// Resolves to "Greeting title"
Label::new(cx, Localized::new("hello").attribute("title"));

// Resolves to "Click to save your changes"
Label::new(cx, Localized::new("save-button").attribute("tooltip"));
```

This is useful for providing alternative text like tooltips, descriptions, or placeholder text without duplicating translations.

## Terms: Global Translation Constants

Fluent terms are special identifiers (prefixed with `-`) that can be referenced across all translations in your application. They're useful for product names, branding, or other constants that appear frequently:

```ftl
-brand = Vizia
-copyright-holder = The Vizia Contributors

welcome = Welcome to { -brand }!
about = { -brand } is created by { -copyright-holder }.
help = For help, visit { -brand }'s documentation.
```

Terms are automatically available in all messages without needing to pass them as arguments:

```rust,ignore
// All of these will include the brand name where referenced
Label::new(cx, Localized::new("welcome"));
Label::new(cx, Localized::new("about"));
Label::new(cx, Localized::new("help"));
```

## Message References

Messages can reference other messages to ensure consistency across your translations:

```ftl
menu-save = Save

menu-file = File
    .save-menu-item = { menu-save }

help-save = Click the { menu-save } button to save your work.
```

This approach keeps terminology consistent without redundancy.

## Date and Time Formatting

Vizia automatically handles locale-aware date and time formatting. You can pass `chrono::DateTime` types directly to `Localized` as arguments:

```ftl
event-scheduled = Your event is scheduled for { $date }.
```

In Rust:

```rust,ignore
use chrono::{Local, DateTime, FixedOffset};

let now = Local::now();
Label::new(cx, 
    Localized::new("event-scheduled")
        .arg("date", now)  // Automatically formatted for current locale
);
```

### Supported Types

- `DateTime<Utc>` — timezone-aware UTC datetime
- `DateTime<Local>` — timezone-aware local datetime
- `DateTime<FixedOffset>` — timezone-aware with fixed offset
- `NaiveDateTime` — assumed to be UTC

The Fluent `DATETIME()` function handles locale-specific date formatting:

```ftl
# Fluent file - locale handles the format
last-updated = Last updated: { DATETIME($timestamp) }
```

## Number Formatting

Use formatted numeric values as arguments when inserting numbers into translations. In practice, decimal precision, thousands separators, and similar presentation details are usually prepared before the value enters the localization system, while translators control how that value is placed in the surrounding sentence.

### Percentage Formatting

Format a number as a percentage with controlled decimal places:

```rust,ignore
let value = 0.8542;
Label::new(cx,
    Localized::new("completion-rate")
        .arg("percent", percentage(value, 1))  // Results in "85.4%"
);
```

### Decimal Formatting

Format numbers with a specific number of decimal places before passing them into the translation:

```rust,ignore
let price = 19.5;
Label::new(cx,
    Localized::new("product-price")
        .arg("price", number_with_fraction(price, 2))  // Results in "19.50"
);
```

This keeps the numeric value separate from the translated text while still letting each locale decide how to describe it.

### Currency Formatting

Currency symbols, currency names, and where they appear relative to the amount are translator concerns. Prepare the numeric part in Rust, then let each locale decide how to present it:

```ftl
# en-US
total-price = Your total is ${ $amount }

# fr
total-price = Total : { $amount } €

# de
total-price = Gesamt: { $amount } $
```

In Rust, pass the already-prepared numeric value as an argument:

```rust,ignore
let amount = number_with_fraction(19.5, 2);
Label::new(cx, Localized::new("total-price").arg("amount", amount));
```

This keeps translation ownership with translators and numeric presentation logic with application code.

## Error Handling and Diagnostics

Vizia provides a diagnostic system for localization errors. Common issues include:

- **Missing messages**: A translation key doesn't exist in the fluent file
- **Missing attributes**: An attribute referenced with `.attribute()` doesn't exist
- **Fluent formatting errors**: Invalid fluent syntax in your translation files

These diagnostics are logged using Rust's standard `log` crate at the `WARN` level. To see localization errors, configure a logger like:

```rust,ignore
// Initialize a logger (e.g., using env_logger)
env_logger::Builder::from_default_env()
    .filter_level(log::LevelFilter::Warn)
    .init();

// Localization errors will now be visible
```

This helps catch translation issues during development and testing.