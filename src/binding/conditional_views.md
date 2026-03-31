# Conditional Views

The `Binding` view provides a way to explicitly control which parts of the view tree get rebuilt when some state changes, specifically anything within the content closure of a `Binding` view.

Because of this, a regular `if` statement can be used to conditionally rebuild views. In the following example, a label view is built into the tree when a boolean signal is true, otherwise the view is removed from the tree.

```rust,ignore
use vizia::prelude::*;

struct AppData {
    show_view: Signal<bool>,
}

enum AppEvent {
    ToggleShowView,
}

impl Model for AppData {
    fn event(&mut self, _cx: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::ToggleShowView => {
                self.show_view.set(!self.show_view.get());
            }
        });
    }
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx|{
        let show_view = Signal::new(false);

        AppData {
            show_view,
        }.build(cx);

        Label::new(cx, "Show View")
            .on_press(|cx| cx.emit(AppEvent::ToggleShowView));
        
        Binding::new(cx, show_view, |cx| {
            if show_view.get(cx) {
                Label::new(cx, "Surprise!");
            }
        });
    })
    .inner_size((400, 100))
    .run()
}
```

Only the contents of the `Binding::new` closure are rebuilt when `show_view` changes.

## See also

- [Data binding](./binding.md)
- [Signals](./signals.md)
- [Reading Signals](./reading_signals.md)
- [Writing Signals](./writing_signals.md)