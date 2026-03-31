# Window Positioning

Windows can be positioned in various ways using modifiers that control both the location and anchor point of the window.

## Setting absolute position

Use `.position()` to place a window at specific screen coordinates:

```rust,ignore
use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        // Content here
    })
    .position((100, 200))  // x=100, y=200
    .run()
}
```

The position is specified in logical pixels (DPI-independent).

## Understanding anchors

An **anchor** determines which part of the window is positioned at the specified coordinates. Vizia supports nine anchor points:

```rust,ignore
// Top edge anchors
Anchor::TopLeft      // Top-left corner
Anchor::TopCenter    // Center of top edge
Anchor::TopRight     // Top-right corner

// Middle edge anchors
Anchor::Left         // Left edge center
Anchor::Center       // Window center
Anchor::Right        // Right edge center

// Bottom edge anchors
Anchor::BottomLeft   // Bottom-left corner
Anchor::BottomCenter // Center of bottom edge
Anchor::BottomRight  // Bottom-right corner
```

## Anchor targets

The **anchor target** determines what coordinate system the position is relative to. There are three options:

- `AnchorTarget::Monitor`: Position relative to the screen/monitor
- `AnchorTarget::Window`: Position relative to the parent window (for child windows)
- `AnchorTarget::Mouse`: Position relative to the mouse cursor

```rust,ignore
use vizia_window::AnchorTarget;

// Position relative to monitor (default)
Application::new(|cx| {})
    .position((100, 100))
    .anchor(Anchor::TopLeft)
    .anchor_target(AnchorTarget::Monitor)
    .run();

// Position relative to parent window (for popup/child windows)
Window::popup(cx, false, |cx| {
    Label::new(cx, "Child window");
})
.position((10, 10))
.anchor(Anchor::TopLeft)
.anchor_target(AnchorTarget::Window);

// Position relative to mouse cursor
Window::popup(cx, false, |cx| {
    Label::new(cx, "Context menu");
})
.anchor(Anchor::TopLeft)
.anchor_target(AnchorTarget::Mouse);
```

## Parent anchors for child windows

When creating child windows, use `.parent_anchor()` to specify where on the parent window the child should be positioned from:

```rust,ignore
// Position child window relative to the parent's center
Window::popup(cx, false, |cx| {
    Label::new(cx, "Dialog");
})
.position((0, 0))
.anchor(Anchor::Center)
.anchor_target(AnchorTarget::Window)
.parent_anchor(Anchor::Center);
```


## Applying offsets

Use `.offset()` to apply an additional offset to the positioned window:

```rust,ignore
// Position at (100, 100) and then offset by (10, 10)
Application::new(|cx| {})
    .position((100, 100))
    .offset((10, 10))
    .anchor(Anchor::TopLeft)
    .run();
```

Offsets are useful for fine-tuning positions after anchoring.

## Common positioning patterns

### Centered window

```rust,ignore
Application::new(|cx| {
    Label::new(cx, "Centered Application");
})
.position((960, 540))  // Typically half your screen resolution
.anchor(Anchor::Center)
.run()
```

### Top-left corner

```rust,ignore
Application::new(|cx| {
    Label::new(cx, "Top-left");
})
.position((0, 0))
.anchor(Anchor::TopLeft)
.run()
```

### Positioned near cursor

```rust,ignore
Window::popup(cx, false, |cx| {
    VStack::new(cx, |cx| {
        Button::new(cx, |cx| Label::new(cx, "Copy"));
        Button::new(cx, |cx| Label::new(cx, "Paste"));
        Button::new(cx, |cx| Label::new(cx, "Delete"));
    });
})
.anchor(Anchor::TopLeft)
.anchor_target(AnchorTarget::Mouse)
.offset((5, 5))
```