# Timers

Timers fire a callback repeatedly on a fixed interval. Use them for polling, animation updates, clocks, or progress tracking.

## Creating a timer

Call `cx.add_timer()` with an interval, an optional total duration, and a callback:

```rust,ignore
use vizia::prelude::*;
use web_time::Duration;

let timer = cx.add_timer(
    Duration::from_millis(100),  // interval
    None,                        // no fixed duration; runs until stopped
    |cx, action| match action {
        TimerAction::Start => {}
        TimerAction::Tick(_delta) => {
            cx.emit(AppEvent::Tick);
        }
        TimerAction::Stop => {}
    },
);
```

`add_timer` returns a `Timer` handle used to start and stop the timer.

## Starting and stopping

Start the timer from a button press or event handler:

```rust,ignore
cx.start_timer(timer);
```

Stop it explicitly when it is no longer needed:

```rust,ignore
cx.stop_timer(timer);
```

## TimerAction

The callback receives one of three actions:

| Action | Description |
|---|---|
| `TimerAction::Start` | Called once when the timer starts. |
| `TimerAction::Tick(delta)` | Called at each interval. `delta` is the elapsed time since the last tick. |
| `TimerAction::Stop` | Called once when the timer stops. |

## Fixed duration timer

Pass `Some(Duration)` as the second argument to run for a fixed time and stop automatically:

```rust,ignore
let timer = cx.add_timer(
    Duration::from_secs(1),
    Some(Duration::from_secs(10)),
    |cx, action| {
        if let TimerAction::Tick(_) = action {
            cx.emit(AppEvent::SecondElapsed);
        }
    },
);
```

## Checking timer state

Use `cx.timer_is_running(timer)` to query whether a timer is active:

```rust,ignore
if !cx.timer_is_running(timer) {
    cx.start_timer(timer);
}
```

## See also

- [Timed Events](./timed_events.md) — one-shot scheduled events fired at a future time.
