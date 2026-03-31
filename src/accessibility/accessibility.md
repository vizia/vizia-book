# Accessibility

Accessibility is the practice of making your application usable by as many people as possible, including those with disabilities.

Vizia includes accessibility support for assistive technologies, such as screen readers, through [AccessKit](https://github.com/AccessKit/AccessKit).
The accessibility tree is derived from your view tree and updated as state, layout, and text change. Built-in controls already provide accessibility information. For custom views, you can use the accessibility APIs to declare roles, names, relationships, and states.

## Core APIs at a glance

When you build custom views or icon-only controls, these are the APIs you will use most:

| Modifier | Purpose |
|---|---|
| `role(...)` | Declares what kind of control the view is. |
| `name(...)` | Sets the accessible name when text is not already obvious. |
| `labeled_by("...")` | References another view by id as the label source. |
| `described_by("...")` | References helper or error text by id. |
| `hidden(true)` | Removes decorative content from the accessibility tree. |
| `live(...)` | Marks a region as a live announcement area. |
| `numeric_value(...)` | Exposes numeric state such as progress or slider value. |
| `text_value(...)` | Exposes textual state for custom editable or status views. |

