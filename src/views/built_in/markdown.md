# Markdown

A view that parses and renders markdown content as rich Vizia text/layout.

## When To Use It

Use `Markdown` for inline documentation, help panels, release notes, and content-driven views where markdown authoring is preferred.

## Feature Requirement

`Markdown` is compiled behind the `markdown` feature.

## Constructing Markdown

```rust,ignore
use vizia::prelude::*;

let doc = r#"
# Title

This is **bold** and this is *italic*.

- Item one
- Item two
"#;

Markdown::new(cx, doc);
```

## Supported Content (Current Implementation)

The parser/renderer currently handles common nodes including:

- Paragraphs and headings
- Emphasis/strong/strikethrough
- Bullet lists and list items
- Inline code and code blocks
- Links
- Tables

## Components and Styling

| Selector | Description |
|---|---|
| `markdown` | Root markdown container. |
| `.p` | Paragraph labels. |
| `.h1` ... `.h6` | Heading levels. |
| `.span` | Generic text spans. |
| `.emph` | Emphasized text spans. |
| `.strong` | Strong/bold text spans. |
| `.strikethrough` | Strikethrough text spans. |
| `.code` | Inline/block code text styling. |
| `.link` | Link text spans. |
| `.table` | Table container. |
| `.table-row` | Table row container. |
| `.table-headers` | Header row class. |
| `.table-cell` | Table cell text container. |
| `.li` | List item container. |

## Accessibility

- Keep heading hierarchy meaningful (`h1`..`h6` classes are exposed in styling).
- Ensure link styling provides clear affordance and sufficient contrast.

