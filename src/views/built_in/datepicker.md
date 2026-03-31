# Datepicker (Renamed)

The legacy `Datepicker` documentation has been replaced by the current `Calendar` view API.

## When To Use It

Use `Calendar` when users need to choose a date or inspect month-level date information.

## Migration

`Datepicker` has been folded into `Calendar` as the actively documented and supported date selection view.

Start with:

```rust,ignore
Calendar::new(cx, selected_date)
	.on_select(|cx, date| cx.emit(AppEvent::SetDate(date)));
```

## Updated API Reference

Use the `Calendar` page for constructor patterns, modifiers, styling selectors, and accessibility guidance:

- [Calendar](calendar.md)

## Components and Styling

Date-related styling selectors are documented on the `Calendar` page.

## Accessibility

Date keyboard navigation and assistive technology behavior are documented on the `Calendar` page.
