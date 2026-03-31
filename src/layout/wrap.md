# Wrap

The `wrap` property controls whether children overflow and wrap onto a new line when they exceed the available space in a row or column layout.

## Values

| Value | Description |
|---|---|
| `no-wrap` | Children are clipped at the container boundary. This is the default. |
| `wrap` | Children that overflow wrap onto a new row or column. |

## Using wrap in Rust

```rust,ignore
HStack::new(cx, |cx| {
    for i in 0..10 {
        Label::new(cx, format!("Item {}", i))
            .width(Pixels(80.0))
            .height(Pixels(30.0));
    }
})
.wrap(LayoutWrap::Wrap)
.width(Pixels(300.0));
```

## Using wrap in CSS

```css
.tag-list {
    layout-type: row;
    wrap: wrap;
    gap: 4px;
}
```

## Gap between wrapped lines

Combined with the `gap` property, `wrap` creates a tiled layout of fixed-size items:

```rust,ignore
HStack::new(cx, |cx| {
    // items...
})
.wrap(LayoutWrap::Wrap)
.gap(Pixels(8.0));
```

## See also

- [Layout](./layout.md)
- [Gap](./gap.md)
- [Layout Type](./layout_type.md)
