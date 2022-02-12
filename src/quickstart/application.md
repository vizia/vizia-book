# Application

To create an empty single-window application edit the `main.rs` file to the following:

```rust
use vizia::*;

fn main() {
    Application::new(WindowDescription::new(), |cx|{

    }).run();
}
```

Run the application with `cargo run` and an empty window should appear.

The `Application` contains the main event loop, which is started by calling `run()`.

The first argument to `Application` is an instance of `WindowDescription`, which can be configured to specify the initial properties of the primary window. 

The second argument to `Application` is a closure which we can use to specify the UI elements that should be placed in the primary window. This closure provides a mutable reference to `Context`, which is where our retained UI state lives.

Let's now add a UI element to our primary window. Change the code in `main.rs` to the following:

```rust
use vizia::*;

fn main() {
    Application::new(WindowDescription::new(), |cx|{
        Label::new(cx, "Hello World");
    }).run();
}
```

Running this application now shows a window with a text label in the top left corner.

The `Label` is an example of a `View`. All views take a mutable reference to the `Context` in order to build themselves into the application. In this case the `Label` view also takes a string, which is then displayed.

Let's use another view, `HStack`, to demonstrate how views can be composed together to form more complex applications. Change the code in `main.rs` to the following:

```rust
use vizia::*;

fn main() {
    Application::new(WindowDescription::new(), |cx|{
        HStack::new(cx, |cx|{
            Label::new(cx, "Hello ");
            Label::new(cx, "World");
        });
    }).run();
}
```
This horizontally stacks two labels within our window. The `HStack` takes a mutable reference to `Context` as well as a build closure which we can use to build other views, which are then arranged into a horizontal stack.

Composing views together like this forms a tree of views, also known as the 'Visual Tree'. So far our tree contains 4 views:

// Image goes here

This visual tree is used by various systems to layout and render the views, as well as communicating between views with messages and passing data to views with bindings, all of which we will learn about in the following sections of this guide.