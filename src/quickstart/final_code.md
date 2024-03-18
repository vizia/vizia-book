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
pub struct Counter {
    on_increment: Option<Box<dyn Fn(&mut EventContext)>>,
    on_decrement: Option<Box<dyn Fn(&mut EventContext)>>,
}

impl Counter {
    pub fn new<L>(cx: &mut Context, lens: L) -> Handle<Self>
    where
        L: Lens<Target = i32>
    {
        Self {
            on_decrement: None,
            on_increment: None,
        }.build(cx, |cx|{
            HStack::new(cx, |cx|{
                Button::new(cx, |cx| Label::new(cx, Localized::new("dec")))
                    .on_press(|ex| ex.emit(CounterEvent::Decrement))
                    .class("dec");

                Button::new(cx, |cx| Label::new(cx, Localized::new("inc")))
                    .on_press(|ex| ex.emit(CounterEvent::Increment))
                    .class("inc");
                
                Label::new(cx, AppData::count)
                    .class("count")
                    .live(Live::Assertive);
            })
            .class("row");
        })
    }
}

// Internal events
pub enum CounterEvent {
    Decrement,
    Increment,
}

// Handle internal events
impl View for Counter {
    fn event(&mut self, cx: &mut EventContext, event: &mut Event) {
        event.map(|counter_event, meta| match counter_event{
            CounterEvent::Increment => {
                if let Some(callback) = &self.on_increment {
                    (callback)(cx);
                }
            }

            CounterEvent::Decrement => {
                if let Some(callback) = &self.on_decrement {
                    (callback)(cx);
                }
            }
        });
    }
}

// Custom modifiers
pub trait CounterModifiers {
    fn on_increment<F: Fn(&mut EventContext) + 'static>(self, callback: F) -> Self;
    fn on_decrement<F: Fn(&mut EventContext) + 'static>(self, callback: F) -> Self;
}

// Implement custom modifiers
impl<'a> CounterModifiers for Handle<'a, Counter> {
    fn on_increment<F: Fn(&mut EventContext) + 'static>(self, callback: F) -> Self {
        self.modify(|counter| counter.on_increment = Some(Box::new(callback)))
    }

    fn on_decrement<F: Fn(&mut EventContext) + 'static>(self, callback: F) -> Self {
        self.modify(|counter| counter.on_decrement = Some(Box::new(callback)))
    }
}

fn main() {
    Application::new(|cx|{

        cx.add_stylesheet(include_style!("src/style.css")).expect("Failed to load stylesheet");

        cx.add_translation(
            langid!("en-US"),
            include_str!("resources/en-US/counter.ftl").to_owned(),
        );

        cx.add_translation(
            langid!("es"),
            include_str!("resources/es/counter.ftl").to_owned(),
        );

        // Uncomment to test with spanish locale.
        // If system locale is already Spanish, replace "es" with "en-US".
        // cx.emit(EnvironmentEvent::SetLocale(langid!("es")));

        // Build model data into the application
        AppData { count: 0 }.build(cx);

        // Add the custom counter view and bind to the model data
        Counter::new(cx, AppData::count)
            .on_increment(|cx| cx.emit(AppEvent::Increment))
            .on_decrement(|cx| cx.emit(AppEvent::Decrement));
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

button {
    border-width: 0px;
}

button.dec {
    background-color: rgb(170, 50, 50);
}

button.inc {
    background-color: rgb(50, 170, 50);
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
