# Multiple Windows

While an application provides a default main window, additional windows can be created with the `Window` view:

```rust
use vizia::prelude::*;

fn main() {
    Application::new(|cx|{
        // Main window content

        Window::new(cx, |cx| {
            // Secondary window content
        });
    })
    .run();
}

```

Windows, like other views, are built into the view tree. Therefore, they can access data in models further up the tree from them, and if the containing view is destroyed the window is closed.

A [binding view](../binding/conditional_views.md) can be used to a conditionally create windows:

```rust
Binding::new(cx, AppData::show_window, |cx, show_subwindow| {
    if show_subwindow.get(cx) {
        Window::new(cx, |cx| {
            
        })
        .on_close(|cx| {
            cx.emit(AppEvent::WindowClosed);
        });
    }
});
```

Here we've used `on_close` window modifier to reset the app state when the window is closed by the user.