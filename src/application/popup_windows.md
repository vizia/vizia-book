# Popup and Dialog Windows

Popup windows are secondary windows that appear on top of the main window. They can be used for dialogs, settings, color pickers, and other auxiliary interfaces.

## Creating a popup window

Use `Window::popup()` to create a popup window. It takes three arguments:

- `cx`: The context
- `is_modal`: Whether the popup should be modal (blocks interaction with parent window)
- `content`: A closure that builds the popup's content

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        let show_popup = Signal::new(false);
        
        Binding::new(cx, show_popup, move |cx| {
            if show_popup.get() {
                Window::popup(cx, false, |cx| {
                    Label::new(cx, "Hello from popup!");
                });
            }
        });

        Button::new(cx, |cx| Label::new(cx, "Open Popup"))
            .on_press(|cx| cx.emit_to(cx.current(), ShowPopup));
    })
    .run()
}
```

## Modal vs non-modal popups

When `is_modal` is `true`, the popup disables interaction with the parent window until the popup closes:

```rust,ignore
// Modal dialog - parent window is disabled
Window::popup(cx, true, |cx| {
    VStack::new(cx, |cx| {
        Label::new(cx, "Save changes?");
        HStack::new(cx, |cx| {
            Button::new(cx, |cx| Label::new(cx, "Yes"))
                .on_press(|cx| cx.emit(AppEvent::Save));
            Button::new(cx, |cx| Label::new(cx, "No"))
                .on_press(|cx| cx.emit(AppEvent::Cancel));
        });
    });
});

// Non-modal popup - parent window remains interactive
Window::popup(cx, false, |cx| {
    Label::new(cx, "This is a notification...");
});
```

## Configuring popup windows

Popup windows can be configured with modifiers. Common modifiers include:

- `.title(...)`: Set the window title
- `.inner_size(...)`: Set the window size
- `.anchor(...)`: Set the window position relative to the parent
- `.on_close(...)`: Handle the close event

```rust,ignore
Window::popup(cx, false, |cx| {
    Label::new(cx, "Settings");
})
.title("Application Settings")
.inner_size((500, 400))
.anchor(Anchor::Center)
.on_close(|cx| {
    cx.emit(AppEvent::SettingsClosed);
});
```

## Showing and hiding popups

Use a signal and `Binding` to control when the popup is visible:

```rust,ignore
pub struct AppData {
    show_dialog: Signal<bool>,
}

impl Model for AppData {
    fn event(&mut self, _cx: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::OpenDialog => {
                self.show_dialog.set(true);
            }
            AppEvent::CloseDialog => {
                self.show_dialog.set(false);
            }
        });
    }
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        let show_dialog = Signal::new(false);
        AppData { show_dialog }.build(cx);

        VStack::new(cx, |cx| {
            Button::new(cx, |cx| Label::new(cx, "Open Dialog"))
                .on_press(|cx| cx.emit(AppEvent::OpenDialog));

            Binding::new(cx, show_dialog, move |cx| {
                if show_dialog.get() {
                    Window::popup(cx, true, |cx| {
                        VStack::new(cx, |cx| {
                            Label::new(cx, "This is a dialog");
                            Button::new(cx, |cx| Label::new(cx, "Close"))
                                .on_press(|cx| cx.emit(AppEvent::CloseDialog));
                        })
                        .padding(Pixels(20.0));
                    })
                    .title("Dialog")
                    .inner_size((300, 150))
                    .anchor(Anchor::Center)
                    .on_close(|cx| {
                        cx.emit(AppEvent::CloseDialog);
                    });
                }
            });
        });
    })
    .run()
}
```

## Positioning popups

Use the `.anchor()` modifier to position popups relative to the parent window:

```rust,ignore
// Center the popup on the parent window
Window::popup(cx, true, |cx| {
    Label::new(cx, "Centered!");
})
.anchor(Anchor::Center);

// Position at top-left
Window::popup(cx, true, |cx| {
    Label::new(cx, "Top-left");
})
.anchor(Anchor::TopLeft);

// Position at bottom-right
Window::popup(cx, true, |cx| {
    Label::new(cx, "Bottom-right");
})
.anchor(Anchor::BottomRight);
```

## Handling popup close events

Use `.on_close()` to react when the user closes the popup:

```rust,ignore
Window::popup(cx, false, |cx| {
    Label::new(cx, "Unsaved changes!");
})
.on_close(|cx| {
    // Perform cleanup or state updates
    cx.emit(AppEvent::PopupClosed);
});
```
