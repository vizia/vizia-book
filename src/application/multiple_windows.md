# Multiple Windows

While an application provides a default main window, additional windows can be created with the [`Window`](https://docs.vizia.dev/vizia_winit/window/struct.Window.html) view:

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx|{
        // Main window content

        Window::new(cx, |cx| {
            // Secondary window content
        });
    })
    .run()
}

```

Windows, like other views, are built into the view tree. Therefore, they can access data in models further up the tree from them, and if the containing view is destroyed the window is closed.

A [binding view](../binding/conditional_views.md) can be used to a conditionally create windows:

```rust,ignore
Binding::new(cx, show_window, |cx| {
    if show_window.get() {
        Window::new(cx, |cx| {
            
        })
        .on_close(|cx| {
            cx.emit(AppEvent::WindowClosed);
        });
    }
});
```

Here we've used the [`on_close`](https://docs.vizia.dev/vizia_winit/window_modifiers/trait.WindowModifiers.html#tymethod.on_close) window modifier to reset the app state when the window is closed by the user.