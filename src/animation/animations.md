# Animation

Vizia provides a powerful animation system for creating smooth, interpolated transitions between property values. Animations can animate any interpolatable property including color, size, position, opacity, transforms, and more.

## Creating animations with AnimationBuilder

Animations are created using the `AnimationBuilder`, which allows you to define keyframes with specific property values:

```rust,ignore
use vizia::prelude::*;
use web_time::Duration;

let animation = AnimationBuilder::new()
    .keyframe(0.0, |key| key.opacity(0.0))
    .keyframe(1.0, |key| key.opacity(1.0));
```

Each keyframe is defined at a normalized time (0.0 to 1.0), where 0.0 is the start and 1.0 is the end of the animation.

## Adding animations to the context

Animations must be added to the context before they can be played:

```rust,ignore
let animation_id = cx.add_animation(animation);
```

The returned `Animation` ID is used to reference the animation when playing it.

## Playing animations

Use `cx.play_animation_for()` to play an animation on a view:

```rust,ignore
Button::new(cx, |cx| Label::new(cx, "Animate"))
    .on_press(move |cx| {
        cx.play_animation_for(
            animation_id,
            target_entity,
            Duration::from_secs(2),
            Duration::default()
        );
    });
```

The parameters are:
- Animation ID or name
- Target entity
- Duration of the animation
- Delay before animation starts

## Keyframe properties

Keyframes support animating many different properties. Here are common examples:

### Opacity and visibility

```rust,ignore
AnimationBuilder::new()
    .keyframe(0.0, |key| key.opacity(0.0))
    .keyframe(1.0, |key| key.opacity(1.0))
```

### Scale transformations

```rust,ignore
AnimationBuilder::new()
    .keyframe(0.0, |key| key.scale("1.0"))
    .keyframe(0.5, |key| key.scale("1.2"))
    .keyframe(1.0, |key| key.scale("1.0"))
```

### Rotation

```rust,ignore
AnimationBuilder::new()
    .keyframe(0.0, |key| key.rotate("0deg"))
    .keyframe(1.0, |key| key.rotate("360deg"))
```

### Translation

```rust,ignore
AnimationBuilder::new()
    .keyframe(0.0, |key| key.translate((Pixels(0.0), Pixels(0.0))))
    .keyframe(1.0, |key| key.translate((Pixels(100.0), Pixels(0.0))))
```

### Color changes

```rust,ignore
AnimationBuilder::new()
    .keyframe(0.0, |key| key.background_color(Color::red()))
    .keyframe(1.0, |key| key.background_color(Color::blue()))
```

### Border properties

```rust,ignore
AnimationBuilder::new()
    .keyframe(0.0, |key| key.border_width(Pixels(0.0)))
    .keyframe(1.0, |key| key.border_width(Pixels(2.0)))
```

## Timing functions

Control the animation's speed curve using timing functions. Available options are:

```rust,ignore
// Linear progression
key.linear()

// Standard easing functions
key.ease()
key.ease_in()
key.ease_out()
key.ease_in_out()

// Custom cubic bezier
key.cubic_bezier(x1, y1, x2, y2)
```

## Complete example: Pulsing animation

Here's a complete example showing a pulsing element:

```rust,ignore
use vizia::prelude::*;
use web_time::Duration;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        // Create animation
        let pulse = AnimationBuilder::new()
            .keyframe(0.0, |key| key.scale("1.0"))
            .keyframe(0.5, |key| key.scale("1.1"))
            .keyframe(1.0, |key| key.scale("1.0"));
        
        let pulse_id = cx.add_animation(pulse);

        VStack::new(cx, |cx| {
            Element::new(cx)
                .id("box")
                .background_color(Color::rgb(100, 150, 255))
                .width(Pixels(100.0))
                .height(Pixels(100.0));

            Button::new(cx, |cx| Label::new(cx, "Start Animation"))
                .on_press(move |cx| {
                    cx.play_animation_for(
                        pulse_id,
                        cx.current().with_id("box"),
                        Duration::from_secs(2),
                        Duration::default()
                    );
                });
        })
        .padding(Pixels(20.0))
        .gap(Pixels(20.0));
    })
    .run()
}
```

## Complex animations with multiple keyframes

Animations can have multiple keyframes to create more complex motion:

```rust,ignore
let bounce = AnimationBuilder::new()
    .keyframe(0.0, |key| key.translate((Pixels(0.0), Pixels(0.0))))
    .keyframe(0.25, |key| key.translate((Pixels(0.0), Pixels(-50.0))))
    .keyframe(0.5, |key| key.translate((Pixels(0.0), Pixels(0.0))))
    .keyframe(0.75, |key| key.translate((Pixels(0.0), Pixels(-30.0))))
    .keyframe(1.0, |key| key.translate((Pixels(0.0), Pixels(0.0))));
```

## Sequential animations

Create sequential animations by playing them one after another:

```rust,ignore
let anim1_id = cx.add_animation(animation1);
let anim2_id = cx.add_animation(animation2);

Button::new(cx, |cx| Label::new(cx, "Sequence"))
    .on_press(move |cx| {
        // Play first animation
        cx.play_animation_for(anim1_id, entity, Duration::from_secs(1), Duration::default());
        
        // Play second animation after first completes
        cx.play_animation_for(
            anim2_id, 
            entity, 
            Duration::from_secs(1), 
            Duration::from_secs(1)  // Delay by 1 second
        );
    });
```

## Animating multiple elements

You can animate the same animation on different elements:

```rust,ignore
let animation_id = cx.add_animation(animation);

Button::new(cx, |cx| Label::new(cx, "Animate All"))
    .on_press(move |cx| {
        // Animate first element
        cx.play_animation_for(animation_id, element1, Duration::from_secs(2), Duration::default());
        
        // Animate second element with delay
        cx.play_animation_for(animation_id, element2, Duration::from_secs(2), Duration::from_millis(100));
        
        // Animate third element with more delay
        cx.play_animation_for(animation_id, element3, Duration::from_secs(2), Duration::from_millis(200));
    });
```

## Practical example: Loading spinner

```rust,ignore
use vizia::prelude::*;
use web_time::Duration;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        let spin = AnimationBuilder::new()
            .keyframe(0.0, |key| key.rotate("0deg"))
            .keyframe(1.0, |key| key.rotate("360deg"));
        
        let spin_id = cx.add_animation(spin);

        VStack::new(cx, |cx| {
            Element::new(cx)
                .id("spinner")
                .background_color(Color::transparent())
                .border_width(Pixels(4.0))
                .border_color(Color::rgb(100, 150, 255))
                .corner_radius(Percentage(50.0))
                .width(Pixels(50.0))
                .height(Pixels(50.0));

            Label::new(cx, "Loading...");
        })
        .padding(Pixels(20.0))
        .gap(Pixels(10.0));

        // Start continuous spinning when view appears
        cx.schedule_emit(
            AppEvent::StartSpin(spin_id),
            web_time::Instant::now()
        );
    })
    .run()
}
```

## Animation performance tips

1. **Use transforms for better performance** - Animating `scale`, `rotate`, and `translate` is more performant than animating width/height or position

2. **Limit simultaneous animations** - Running many animations simultaneously can impact performance

3. **Use appropriate durations** - Very short or very long animations may not behave optimally

4. **Prefer GPU-accelerated properties** - Transform-based animations are GPU-accelerated and more efficient

## Common pitfalls

- **Forgetting to add animation to context** - Always call `cx.add_animation()` before playing
- **Using wrong entity reference** - Ensure the entity passed to `play_animation_for()` is correct
- **Keyframe times not normalized** - Always use 0.0 to 1.0 for keyframe times
- **Conflicts between animations** - Playing a new animation on an entity already animating will replace the previous animation
