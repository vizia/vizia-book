# Accordion

`Accordion` organizes content into expandable sections.

## When To Use It

Use `Accordion` when you need to progressively disclose grouped content while keeping the interface compact, for example settings categories, FAQs, or inspector panels.

## Constructing an Accordion

```rust,ignore
use vizia::prelude::*;

#[derive(Clone)]
struct Section {
    title: String,
    body: String,
}

let sections = Signal::new(vec![
    Section { title: "General".into(), body: "General settings".into() },
    Section { title: "Audio".into(), body: "Audio settings".into() },
]);

Accordion::new(cx, sections, |_, _, section| {
    AccordionPair::new(
        move |cx| Label::new(cx, section.title.clone()),
        move |cx| Label::new(cx, section.body.clone()),
    )
});
```

Programmatically control which sections are open:

```rust,ignore
Accordion::new(cx, sections, |_, _, section| {
    AccordionPair::new(
        move |cx| Label::new(cx, section.title.clone()),
        move |cx| Label::new(cx, section.body.clone()),
    )
})
.open(open_sections);
```

## Accordion Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `open` | `impl Res<Vec<usize>>` | Controls which section indices are open. | `[]` |
| `on_toggle` | `Fn(&mut EventContext, usize, bool)` | Called when a section is toggled, with the section index and desired open state. | — |

## Components and Styling

| Selector | Description |
|---|---|
| `accordion` | Root accordion element. |

`Accordion` composes `Collapsible` rows and `Divider` separators internally.

## Accessibility

- Keep section headers descriptive so collapsed content remains understandable.
- Ensure header controls are keyboard reachable through normal tab order.

### Keyboard Interaction

Accordion keyboard behavior follows the focusable controls used for each section header (typically button-like trigger rows):

| Key | Action |
|---|---|
| `Tab` / `Shift+Tab` | Move focus between accordion headers and other focusable controls. |
| `ArrowDown` | Move focus to the next accordion header (wraps from last to first). |
| `ArrowUp` | Move focus to the previous accordion header (wraps from first to last). |
| `Home` | Move focus to the first accordion header. |
| `End` | Move focus to the last accordion header. |
| `Enter` / `Space` | Toggle the focused section open or closed. |
