# Bundling with cargo-bundle

[`cargo-bundle`](https://github.com/burtonageo/cargo-bundle) creates platform-specific app bundles from a Rust binary.
For desktop applications, this is a convenient way to produce distributable artifacts with app metadata.

## Install cargo-bundle

```sh
cargo install cargo-bundle
```

## Add bundle metadata

Add bundle metadata to your project's `Cargo.toml`:

```toml
[package.metadata.bundle]
name = "My App"
identifier = "com.example.my-app"
icon = ["assets/icon_32x32.png", "assets/icon_128x128.png", "assets/icon_256x256.png"]
resources = ["assets", "translations"]
short_description = "A Vizia application"
long_description = "A desktop application built with Vizia."
```

At minimum, set a unique `identifier` and a user-facing `name`.

## Build a bundled app

From your app crate, run:

```sh
cargo bundle --release
```

This builds your binary and emits bundle output in `target/release/bundle/`.
The exact bundle format depends on your operating system.

## Notes

- Bundle icon paths are relative to the crate root.
- Test the bundled app on the target OS before distribution.
- You can combine this with release profile tuning from the binary size page.