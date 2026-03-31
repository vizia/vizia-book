# PickList (Renamed)

The legacy `PickList` documentation has been replaced by the current `Select` view API.

## When To Use It

Use `Select` when users need to choose one value from a compact list of options.

## Migration

`PickList` has been superseded by `Select` as the actively documented and supported single-choice dropdown view.

Start with:

```rust,ignore
Select::new(cx, options, selected)
	.on_select(|cx, index| cx.emit(AppEvent::SetSelected(index)));
```

## Updated API Reference

Use the `Select` page for constructor patterns, modifiers, styling selectors, and accessibility guidance:

- [Select](select.md)

## Components and Styling

Select styling selectors are documented on the `Select` page.

## Accessibility

Select keyboard interaction and assistive technology behavior are documented on the `Select` page.
