# Events

Events are used to communicate actions to update model or view data. 

Events propagate through the tree from origin to target, typically from the view which emits the event, up through the ancestors of the view, to the main window and through any models on the way.


## Declaring Events

An event contains a `Message` which can be any type, but is typically an enum:

```rust
use vizia::prelude::*;

pub enum PersonEvent {
    UpdateName(String),
    UpdateEmail(String),
}
```

## Event Propagation



<!-- Events propagate through the view tree, and how an event propagates is specific to the event type. However, usually a platform event will propagate down the tree to the target view or model, and a user event will propagate up the tree to the target view or model. -->

