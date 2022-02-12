# Label

The label view renders a string of text in the application with the default application font and font-size.

```rust
Label::new(cx, "Hello World");
```

The label text can be styled by applying the appropriate view modifier, such as `font`, `color`, and `font-size`.

```rust
Label::new(cx, "Hello World")
    .font_size(30.0)
    .color(Color::red());
```

