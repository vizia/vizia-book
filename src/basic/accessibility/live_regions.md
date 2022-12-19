# Accessibility Live Regions

A live region is a view which has changing content but is not itself interactive. For example, in the `counter` application a label shows the current counter value. This label is not itself interactive but has content which changes, and so should be marked as a live region. This will cause, for example, a screen reader to announce the value when the value changes.

A view can be marked as a live region with the `live()` modifier:

```rust
Label::new(cx, AppData::Value).live(Live::Assertive);
```

The `Live` type passed to the `live` modifier has three variants:

- 'Live::Polite' - Indicates that the user should be notified of the change to the live region when the user is idle, i.e. when the screen reader has finished any announcement it is currently making.
- 'Live::Assertive' - Indicates that the user should notified of a change to the live region immediately and will interrupt any announcement that a screen reader is currently making.
- 'Live::Off' - Turns off the live region. The variant can be used explicitly to turn off the announcement of views which have an implicit live region given to them by their role, e.g. `Role::Alert`. 

## Roles with implicit live regions

| Role | Description |
|------|-------------|
| Log | Chat, error, game or other type of log. |
| Status | A status bar or area that provides a status of some kind. |
| Alert | Error or warning message. |
| ProgressIndicator |             |
| log  |             |