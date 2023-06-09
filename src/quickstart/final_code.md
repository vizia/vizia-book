# The Final Code

## Rust
```rust
use vizia::prelude::*;

// Define the application data
#[derive(Lens)]
pub struct AppData {
    count: i32,
}

// Define events for mutating the application data
pub enum AppEvent {
    Increment,
    Decrement,
}

// Mutate application data in response to events
impl Model for AppData {
    fn event(&mut self, cx: &mut EventContext, event: &mut Event) {
        event.map(|app_event, meta| match app_event {
            AppEvent::Decrement => self.count -= 1,
            AppEvent::Increment => self.count += 1,
        });
    }
}

// Define a custom view for the counter
pub struct Counter {}

impl View for Counter {}

impl Counter {
    pub fn new<L>(cx: &mut Context, lens: L) -> Handle<Self>
    where
        L: Lens<Target = i32>
    {
        Self {}.build(cx, |cx|{
            HStack::new(cx, |cx|{
                Button::new(
                    cx,
                    |ex| ex.emit(AppEvent::Decrement),
                    |cx| Label::new(cx, Localized::new("dec")),
                )
                .class("dec");

                Button::new(
                    cx,
                    |ex| ex.emit(AppEvent::Increment),
                    |cx| Label::new(cx, Localized::new("inc")),
                )
                .class("inc");
                
                Label::new(cx, AppData::count)
                    .class("count")
                    .live(Live::Assertive);
            })
            .class("row");
        })
    }
}

fn main() {
    Application::new(|cx|{
        // Add CSS stylesheet
        cx.add_stylesheet(include_style!("src/style.css")).expect("Failed to load stylesheet");

        cx.add_translation(
            langid!("en-US"),
            include_str!("resources/en-US/counter.ftl").to_owned(),
        );

        cx.add_translation(
            langid!("es"),
            include_str!("resources/es/counter.ftl").to_owned(),
        );

        // Uncomment to test with spanish locale
        // If system locale is already Spanish, replace "es" with "en-US".
        // cx.emit(EnvironmentEvent::SetLocale(langid!("es")));

        // Build model data into the application
        AppData { count: 0 }.build(cx);

        // Add the custom counter view and bind to the model data
        Counter::new(cx, AppData::count);
    })
    .title("Counter")
    .inner_size((400, 150))
    .run();
}
```
## CSS
```css
.row {
    child-space: 1s;
    col-between: 20px;
}

button.dec {
    background-color: rgb(200, 50, 50);
}

button.inc {
    background-color: rgb(50, 200, 50);
}

label.count {
    child-space: 1s;
    border-width: 1px;
    border-color: #808080;
    border-radius: 4px;
    width: 50px;
    height: 32px;
}
```

## Fluent

*resources/en-US/counter.ftl*
```ftl
inc = Increment
dec = Decrement
```

*resources/es/counter.ftl*
```ftl
inc = Incrementar
dec = Decrementar
```
