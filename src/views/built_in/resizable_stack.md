# ResizableStack (Renamed)

The legacy `ResizableStack` documentation has been replaced by the current `Resizable` view API.

## When To Use It

Use `Resizable` when users should be able to drag split handles to resize adjacent panes.

## Migration

`ResizableStack` has been superseded by `Resizable` as the actively documented and supported pane-resize view.

Start with:

```rust,ignore
Resizable::new(cx, |cx| {
	Element::new(cx).class("pane-left");
	Element::new(cx).class("pane-right");
});
```

## Updated API Reference

Use the `Resizable` page for constructor patterns, modifiers, styling selectors, and accessibility guidance:

- [Resizable](resizable.md)

## Components and Styling

Resizable container and handle selectors are documented on the `Resizable` page.

## Accessibility

Resizable keyboard and assistive technology behavior are documented on the `Resizable` page.
