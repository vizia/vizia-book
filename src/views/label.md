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

## Multi-line and text wrap

By default, if text is too long to fit into its container, it will wrap onto a second line.
You can turn this behavior off, letting text overflow out of its container, by setting the text-wrap style property to false:

```rust
Label::new(cx, "My unwrapped text").text_wrap(false);
```

## Auto sizing

For a label's width, setting its size to auto means that it should take on its unwrapped width, i.e. the width it would have if it did not have any size to wrap at.
Setting height to auto means the thing you would expect it to, to match its height to that of its content.

Keep in mind the presence of the `min-` and `max-` width and height constraints when trying to style labels' layout.
Specifically, the default stylesheet specifies `max-width: 100%;`, meaning that no matter what width you set, text will wrap at the parent container's size.
