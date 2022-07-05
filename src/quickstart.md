# Quickstart

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

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
vizia = {git = "https://github.com/vizia/vizia"}
```
## A simple application
Edit the `main.rs` file to the following:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        Label::new(cx, "Hello World!");
    }).run();
}
```
To run the app, call `cargo run`, which will produce a window with a `Hello World` message:

// Image here

## A closer look
Let's take a closer look at each part of the simple example above.

The `use vizia::prelude::*;` statement on the first line imports the required definitions from the Vizia crate for us to use.

One of these definitions is the `Application` type, which is used to create the main window and its contents.

The `Application::new()` method takes a closure which provides `cx`, a mutable reference to a `Context`, where the state of our application is stored.

Inside this closure is a `Label`, which is created by calling `Label::new()` with the mutable reference to context, as well as a text string to display.

Finally, the `run()` method called on the application starts the event loop of the application.

## Next steps
Now that you're familiar with the very basics of building a Vizia application project, let's move on to the next sections to learn about reactive user interfaces and how to build them.



