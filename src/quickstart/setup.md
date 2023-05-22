# Setting Up

## Creating a new project
First, let's create a new Rust project using the following command:

```bash
cargo new --bin hello_vizia
```

This will generate a `hello_vizia` directory with the following contents:

```bash
.
├── Cargo.toml
├── .git
├── .gitignore
└── src
    └── main.rs
```

## Adding Vizia as a dependency
Open the `Cargo.toml` file and add the following to the dependencies:

```toml
[package]
name = "hello_vizia"
version = "0.1.0"
edition = "2021"

[dependencies]
vizia = {git = "https://github.com/vizia/vizia"}
```