# Stacks

A stack is a view that contains children which are laid out in order.
A HStack is a stack whose layout is horizontal, a VStack is a stack whose layout is vertical, and a ZStack is a stack whose layout is in the z-axis, i.e. children overlap visually.

For example, you can create a HStack containing two VStacks:

```rust
HStack::new(cx, |cx| {
    VStack::new(cx, |cx| {
        Label::new(cx, "one");
        Label::new(cx, "two");
    });
    VStack::new(cx, |cx| {
        Label::new(cx, "three");
        Label::new(cx, "four");
    });
});

This creates two vertical columns, side by side.
