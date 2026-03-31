# Testing accessibility

Accessibility quality comes from repeatable checks, not one-time audits.

## Minimum test pass for each feature

Run this pass whenever you add or modify interactive UI:

1. Keyboard-only navigation works end-to-end.
2. Focus is always visible and never lost.
3. Controls have meaningful names and roles.
4. Disabled, checked, and error states are announced correctly.
5. Text and control contrast stay readable across states.

## Keyboard test

With no mouse:

- Use `Tab` and `Shift+Tab` to traverse controls.
- Activate focused controls with `Enter`/`Space`.
- Confirm modal dialogs trap focus while open.
- Confirm closing a modal returns focus to a logical control.

## Screen reader tests

Use a screen reader on at least one supported platform and verify:

- Each control announces a sensible name and role.
- Field help/error text connected through `described_by(...)` is announced.
- Live status updates are announced when expected.
- Decorative views are hidden from announcements where appropriate.

Windows has a built-in screen reader called Narrator, activated by `Win+Ctrl+Enter`, and macOS has VoiceOver, activated by `Cmd+F5`.

On Windows, NVDA is a popular free screen reader that can be downloaded from https://www.nvaccess.org/.

The accessibility tree can be inspected on Windows using the Accessibility Insights tool (https://accessibilityinsights.io/), which also has a Linux version. On macOS, the Accessibility Inspector is included in Xcode's developer tools.


