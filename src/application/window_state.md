# Saving and Reloading Window State

Applications often need to remember window properties like position and size across sessions. This allows users to have a consistent experience when they restart the application.

## Creating a window state structure

First, define a structure to hold persistable window properties:

```rust,ignore
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WindowState {
    pub position_x: i32,
    pub position_y: i32,
    pub width: u32,
    pub height: u32,
    pub maximized: bool,
}
```

## Saving window state

Retrieve the current window properties and save them to a file when the application is closing:

```rust,ignore

```



## Using reactive window properties

Make window properties reactive by binding them to signals:

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    let position_x = Signal::new(100i32);
    let position_y = Signal::new(100i32);
    let width = Signal::new(800u32);
    let height = Signal::new(600u32);

    Application::new(move |cx| {
        Label::new(cx, "Content");
    })
    .position((position_x, position_y))
    .inner_size((width, height))
    .run()
}

// Later, update the properties to move/resize the window:
// position_x.set(200);
// position_y.set(200);
// width.set(1024);
// height.set(768);
```

## Handling window move and resize events

Window events are emitted when the user moves or resizes the window. You can listen to these in a model:

```rust,ignore
use vizia::prelude::*;

pub enum AppEvent {
    UpdateWindowState,
}

pub struct AppData {
    window_x: Signal<i32>,
    window_y: Signal<i32>,
}

impl Model for AppData {
    fn event(&mut self, _cx: &mut EventContext, event: &mut Event) {
        event.map(|_: &WindowEvent, _| {
            // Window event received - you could trigger a save here
            // Note: Direct window position tracking requires platform-specific code
        });
    }
}
```

## Complete example with periodic saving

Here's a full example that automatically saves window state periodically:

```rust,ignore
use vizia::prelude::*;
use serde::{Deserialize, Serialize};
use std::fs;
use web_time::{Instant, Duration};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WindowState {
    pub position_x: i32,
    pub position_y: i32,
    pub width: u32,
    pub height: u32,
}

pub enum AppEvent {
    AutoSaveCheck,
}

pub struct AppData {
    last_save: Instant,
    window_x: Signal<i32>,
    window_y: Signal<i32>,
    window_width: Signal<u32>,
    window_height: Signal<u32>,
}

impl Model for AppData {
    fn event(&mut self, cx: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::AutoSaveCheck => {
                // Only save every 5 seconds
                if self.last_save.elapsed() > Duration::from_secs(5) {
                    let state = WindowState {
                        position_x: self.window_x.get(),
                        position_y: self.window_y.get(),
                        width: self.window_width.get(),
                        height: self.window_height.get(),
                    };

                    if let Ok(json) = serde_json::to_string_pretty(&state) {
                        fs::write("window_state.json", json).ok();
                    }

                    self.last_save = Instant::now();
                }

                // Schedule next check
                let when = Instant::now() + Duration::from_secs(1);
                cx.schedule_emit(AppEvent::AutoSaveCheck, when);
            }
        });
    }
}

fn load_window_state() -> WindowState {
    match fs::read_to_string("window_state.json") {
        Ok(content) => {
            serde_json::from_str(&content).unwrap_or_else(|_| default_state())
        }
        Err(_) => default_state(),
    }
}

fn default_state() -> WindowState {
    WindowState {
        position_x: 100,
        position_y: 100,
        width: 800,
        height: 600,
    }
}

fn main() -> Result<(), ApplicationError> {
    let saved_state = load_window_state();

    Application::new(|cx| {
        let window_x = Signal::new(saved_state.position_x);
        let window_y = Signal::new(saved_state.position_y);
        let window_width = Signal::new(saved_state.width);
        let window_height = Signal::new(saved_state.height);

        AppData {
            last_save: Instant::now(),
            window_x,
            window_y,
            window_width,
            window_height,
        }
        .build(cx);

        VStack::new(cx, |cx| {
            Label::new(cx, "My Application");
            Label::new(cx, "Window state is saved automatically");
        })
        .padding(Pixels(20.0));

        // Start automatic save checking
        let when = Instant::now() + Duration::from_secs(5);
        cx.schedule_emit(AppEvent::AutoSaveCheck, when);
    })
    .position((saved_state.position_x, saved_state.position_y))
    .inner_size((saved_state.width, saved_state.height))
    .run()
}
```

## Saving additional properties

You can save and restore other window properties as well:

```rust,ignore
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FullWindowState {
    pub position_x: i32,
    pub position_y: i32,
    pub width: u32,
    pub height: u32,
    pub maximized: bool,
    pub title: String,
    pub minimized: bool,
    pub always_on_top: bool,
}
```

Then apply these properties when creating the window:

```rust,ignore
Application::new(|cx| {
    // Content
})
.position((state.position_x, state.position_y))
.inner_size((state.width, state.height))
.maximized(state.maximized)
.minimized(state.minimized)
.title(&state.title)
.always_on_top(state.always_on_top)
.run()
```

## Best practices

### Use a config directory

Store window state in a proper application config directory rather than the current directory:

```rust,ignore
use std::path::PathBuf;

fn get_state_path() -> PathBuf {
    let mut path = dirs::config_dir().unwrap_or_else(|| PathBuf::from("."));
    path.push("my_app");
    path.push("window_state.json");
    path
}
```

### Validate saved values

Always validate loaded values to ensure they're reasonable:

```rust,ignore
fn load_and_validate() -> WindowState {
    match fs::read_to_string(get_state_path()) {
        Ok(content) => {
            let state: WindowState = serde_json::from_str(&content)?;
            
            // Validate reasonable bounds
            if state.width < 100 || state.width > 4000 {
                return default_state();
            }
            if state.height < 100 || state.height > 4000 {
                return default_state();
            }
            
            state
        }
        Err(_) => default_state(),
    }
}
```

### Save on window close

Use the `.on_close()` callback to save state when the application is closing:

```rust,ignore
Window::new(cx, |cx| {
    Label::new(cx, "Content");
})
.on_close(|cx| {
    cx.emit(AppEvent::SaveWindowState);
})
```

### Handle missing config files gracefully

Always have reasonable defaults if the config file doesn't exist or is corrupted:

```rust,ignore
fn load_window_state() -> WindowState {
    load_and_validate().unwrap_or_else(|_| {
        eprintln!("Failed to load window state, using defaults");
        default_state()
    })
}
```
