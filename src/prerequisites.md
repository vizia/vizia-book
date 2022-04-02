# Prerequisites

This page aims to provide links to resources such that you can start from any skill level or backgroud and make sure you have the prerequisites to work with Vizia.

## I have never used Rust

You should start by [installing Rust](https://www.rust-lang.org/tools/install).
You can get up to speed on the basics of programming with Rust by reading [The Rust Programming Language](https://doc.rust-lang.org/book/).
Start by reading chapters 2-6, 8-10, and 13.1.

## I'm a beginner at Rust

You can test your comprehension of the important parts of Rust we're going to be using by trying to answer the following questions.
Feel free to search around for the answers.
This isn't like "oh you should know these off the top of your head" - these are specific language features that show up in Vizia applications that you should be able to interpret as part of the engineering process.

1. What is the difference between `|cx| cx.foo(bar)` and `move |cx| cx.foo(bar)`? (hint: this is called a "move closure")
2. What does it mean to write `trait Data: Clone {}`? (hint: this is called a "supertrait")
3. What does it mean to write `cx.data::<AppData>()`? (hint: this is called the "turbofish")

If you need help answering these questions or want to check your answers, join [the Vizia discord](https://discord.gg/aNkTPsRm2w)!

## I need some help with creating a vizia project.

No problem.

- `cargo new --bin my-vizia-app` will create a folder named my-vizia-app containing the skeleton of a rust application.
- Add `vizia = "0.1.0"` under the `[dependencies]` section of the `Cargo.toml` file to add Vizia as a dependency.
- `cargo run` will build and run your app, including fetching and compiling all its dependencies.
- You can now write any Rust code you want into `my-vizia-app/src/main.rs`.

## I'm ready to get started

Awesome. Turn the page to start learning.
