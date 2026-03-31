# Direction

Vizia supports both left-to-right (LTR) and right-to-left (RTL) text and layout direction, controlled by a signal in the `Environment` model.

This signal applies the direction property to the window, which is inherited. To override direction, set the `direction` property in a style rule or use the `direction` modifier on a view.

## Direction and locale

When a locale is set with `EnvironmentEvent::SetLocale`, the direction is **automatically** changed based on the language's text directionality. For example:

- Setting an Arabic locale (`ar`) automatically switches to RTL direction
- Setting a French locale (`fr`) automatically switches to LTR direction
- Setting a Hebrew locale (`he`) automatically switches to RTL direction

```rust,ignore
// Automatically switches to RTL direction
cx.emit(EnvironmentEvent::SetLocale(langid!("ar")));

// Automatically switches to LTR direction
cx.emit(EnvironmentEvent::SetLocale(langid!("en-US")));
```



## Setting direction

Emit `EnvironmentEvent` to change the current global direction:

```rust,ignore
cx.emit(EnvironmentEvent::SetDirection(Direction::RightToLeft));  // Set to right-to-left
cx.emit(EnvironmentEvent::SetDirection(Direction::LeftToRight));  // Set to left-to-right
```

Vizia adds the `rtl` CSS class to the root element when RTL is active, allowing directional CSS rules:

```css
/* Default (LTR): content aligned to the left */
.message {
    text-align: left;
}

/* RTL: mirror text alignment */
.rtl .message {
    text-align: right;
}
```

## RTL behavior in horizontal layouts

For horizontal containers such as `HStack`, RTL changes how content is presented:

- Child order is mirrored visually, so the first child appears on the right.
- Horizontal padding is mirrored (`padding-left` and `padding-right`).
- Horizontal alignment is mirrored (`alignment: left` becomes `alignment: right`).
<!-- - Text alignment is mirrored (`text-align: left` becomes `text-align: right`). -->


## Reacting to direction with a binding

Access the current direction from the `Environment` model:

```rust,ignore
Binding::new(cx, Environment::direction, |cx| {
    match Environment::direction.get(cx) {
        Direction::LeftToRight => Label::new(cx, "→"),
        Direction::RightToLeft => Label::new(cx, "←"),
    }
});
```

