# Label

The label view renders a single line of text with the default application font and font-size.

The input can be any type which implements the `ToString` trait:

```rust
Label::new(cx, "Hello World");
```

The input can also be a lens with a target type which implements the `ToString` trait:

```rust
Label::new(cx, AppData::text);
```

The label text can be styled by applying the appropriate style modifier, such as `font`, `color`, and `font-size`.

```rust
Label::new(cx, "Hello World")
    .font_size(30.0)
    .color(Color::red());
```

The text within a label can be positioned with the `child_space`, `child_left`, `child_right`, `child_top`, and `child_bottom` modifiers. For example, to center the text in a label:

```rust
Label::new(cx, "Hello World")
    .child_space(Stretch(1.0));
```

And to center the text vertically but align it to the left with 5 pixels of padding:

```rust
Label::new(cx, "Hello World")
    .child_space(Stretch(1.0))
    .child_left(Pixels(5.0));
```

