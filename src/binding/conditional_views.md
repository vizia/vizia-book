# Conditional Views

The `Binding` view provides a way to explicitely control which parts of the view tree get rebuilt when some state changes, specifically anything within the content closure of a `Binding` view.

Because of this, a regular `if` statement can be used to conditionally rebuild views. In the following example, a label view is built into the tree when a boolean state is true, else the view is removed from the tree.

```rust
use vizia::prelude::*;

#[derive(Lens)]
struct AppData {
    show_view: bool,
}

enum AppEvent {
    ToggleShowView,
}

impl Model for AppData {
    fn event(&mut self, cx: &mut Context, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::ToggleShowView => self.show_view ^= true,
        });
    }
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx|{

        AppData {
            show_view: false,
        }.build(cx);

        Label::new(cx, "Show View")
            .on_press(|cx| cx.emit(AppEvent::ToggleShowView));
        
        Binding::new(cx, AppData::show_view, |cx, show|{
            if show.get(cx) {
                Label::new(cx, "Surprise!");
            }
        });
    })
    .inner_size((400, 100))
    .run()
}
```