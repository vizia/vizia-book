# Custom Views

While the built in views can be used to build expressive user interfaces, eventually you may find yourself needing to develop your own reusable views.

This chapter demonstrates how custom views can be made by building the `Slider` view step-by-step. We'll start simple, building up to the fully-featured version as each new concept is introduced and explained.

## Defining the view
First, we'll define a struct for the slider with the 'local' state. This is state used only by the slider. For now, this will include a boolean which tracks whether the slider is being dragged, and the value represented by the slider, but later this will be replaced with a binding to model data.

```rust
pub struct Slider {
    is_dragging: bool,
    value: f32,
}
```

## The `View` trait
To make our slider an actual view we can build into the application, the struct must implement the `View` trait. For now we will leave the implementation blank.

```rust
impl View for Slider {}
```

## The constructor
We need to provide a way to construct an instance of our slider view:

```rust
impl Slider {
    pub fn new(cx: &mut Context, value: f32) -> Handle<Self> {
        Self {
            is_dragging: false,
            value,
        }.build(cx, |cx|{

        })
    }
}
```
The first argument to a view constructor is always a mutable reference to the context. This is then passed to the `build()` method, which also takes a closure which provides a way to construct a view tree with the slider as the root.

The `build` method returns a `Handle`, which is then returned by the constructor. A `Handle` allows the user to call modifiers on the view.

The other arguments to the constructor are specific to the view. For our slider, the second argument allows the user to specify the initial value. A view might have multiple constructors for different variations.

