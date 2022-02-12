# Setup

This section covers the initial setup of the project. If you are already familiar with creating Rust projects and adding dependencies then feel free to skip to the next section.

## Creating a Rust project
With Rust installed, use the following command to create a new Rust binary executable project:

```bash
cargo new --bin vizia_counter
```

This will generate a `Cargo.toml` file, as well as a `src` directory with a `main.rs` file. You can build and run the project with:

```bash
cargo run --release
```
This should produce `Hello World` in the console.

## Adding VIZIA as a dependency
Open the `Cargo.toml` file in an editor of your choice and add the following below the `[dependencies]` line:

```bash
vizia = {git = "https://github.com/geom3trik/VIZIA", branch = "main"}
```

In the next section we will create our first vizia application.
