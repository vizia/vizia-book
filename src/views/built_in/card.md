# Card

`Card` is a container for grouping related content.

## When To Use It

Use card views to group related information and actions into clear, reusable panels such as summaries, status blocks, or settings modules.

## Constructing a Card

```rust,ignore
use vizia::prelude::*;

Card::new(cx, |cx| {
    CardHeader::new(cx, |cx| Label::new(cx, "Project status"));

    CardContent::new(cx, |cx| {
        Label::new(cx, "All systems operational");
    });

    CardFooter::new(cx, |cx| {
        Button::new(cx, |cx| Label::new(cx, "Dismiss"));
    });
});
```

## Card APIs

| View | Constructor |
|---|---|
| `Card` | `Card::new(cx, content)` |
| `CardHeader` | `CardHeader::new(cx, content)` |
| `CardContent` | `CardContent::new(cx, content)` |
| `CardFooter` | `CardFooter::new(cx, content)` |

## Components and Styling

| Selector | Description |
|---|---|
| `card` | Root card container. |
| `card-header` | Optional header region. |
| `card-content` | Main body region. |
| `card-footer` | Optional footer/actions region. |

## Accessibility

- Use heading-like text in `CardHeader` for better scanning.
- Keep actionable controls in `CardFooter` keyboard reachable and clearly labeled.
