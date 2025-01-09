# Translating Text

Vizia uses fluent files to translate text. A guide for the fluent language syntax can be found [here](https://projectfluent.org/fluent/guide/).

## Basic Example

An example fluent file might look something like this:

```ftl
hello-world = Bonjour, monde!
```

Where a key on the left of the equals symbol has a corresponding translation on the right.

Then, as shown in the [adding translations](../resources/translations.md) chapter in the resources section of this book, we can add a fluent file for the `fr` locale (french) like so:

```rust
cx.add_translation(langid!("fr"), include_str!("resources/translations/fr/hello.ftl"));
```

And use the `Localized` type with a `Label` to provide a translation key. The key is used to look up the corresponding translation from the relevant fluent file at runtime.

```rust
Label::new(cx, Localized::new("hello-world"));
```

## Fluent Variables

Fluent files also support variables which can be placed into the translations:
```ftl
emails =
    { $unread_emails ->
        [one] Vous avez un e-mail non lu.
       *[other] Vous avez { $unread_emails } e-mails non lus.
    }
```
The above example also makes use of fluent selectors, which can choose between multiple variants of a translation, in this case choosing between plural categories.

The `arg` method on the `Localized` type is then used to supply a variable argument or appropriate lens. When localization is resolved the argument will be used with the fluent file to select an appropriate translation.

```rust
Label::new(cx, Localized::new("emails").arg("unread_emails", AppData::emails));
```