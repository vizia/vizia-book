# Calendar

A date picker view for selecting a `chrono::NaiveDate`.

## When To Use It

Use Calendar when users need day-based date selection in scheduling, booking, or reporting workflows.

## Constructing a Calendar

```rust,ignore
use chrono::NaiveDate;
use vizia::prelude::*;

let date = Signal::new(NaiveDate::from_ymd_opt(2026, 4, 14).unwrap());

Calendar::new(cx, date).on_select(|cx, selected_date| {
    cx.emit(AppEvent::DateSelected(selected_date));
});
```

## Calendar Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `on_select` | `Fn(&mut EventContext, NaiveDate)` | Called when a date is selected. | - |

## Components and Styling

Calendar provides structured internal classes for common theming points.

| Selector | Description |
|---|---|
| `calendar` | Root calendar element. |
| `calendar .calendar-controls` | Top controls row (month/year navigation). |
| `calendar .calendar-controls-select` | Month/year select controls area. |
| `calendar .month-nav` | Month navigation buttons. |
| `calendar .calendar-body` | Main body containing header and date grid. |
| `calendar .calendar-header` | Day-of-week header row. |
| `calendar .calendar-dow` | Individual day-of-week label. |
| `calendar .calendar-day` | Individual date cell. |
| `calendar .calendar-day-disabled` | Cells outside current month / disabled days. |
| `calendar .calendar-month-year-heading` | Month and year text label in the controls row. |
| `calendar .calendar-keyboard-help` | Keyboard shortcut help element in the controls row. |

Internally, Calendar uses Select controls for month and year pickers.

## Accessibility

Calendar supports keyboard-focusable day cells and emits selected date changes through callback.

- Provide external label context when needed.
- Keep selected date synchronized in model state through `on_select`.
- Ensure color contrast between selected, default, and disabled day states.

### Keyboard Interaction

| Key | Action |
|---|---|
| `ArrowUp` / `ArrowDown` | Move focused date by one week backward/forward. |
| `ArrowLeft` / `ArrowRight` | Move focused date by one day backward/forward. |
| `Home` | Move focus to the start of the current week. |
| `End` | Move focus to the end of the current week. |
| `PageUp` / `PageDown` | Move focus by one month backward/forward. |
| `Shift+PageUp` / `Shift+PageDown` | Move focus by one year backward/forward. |
| `Enter` / `Space` | Activate/select the focused date. |
