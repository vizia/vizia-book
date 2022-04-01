# Property Transitions

A transition is an animation which plays when the style rule which matched a view changes. 

For example, let's say we want to animate the background color of an `Element` view from red to blue over 2 seconds when we hover it with the mouse cursor. We would use the following CSS:

```css
element {
    background-color: red;
}

element:hover {
    background-color: blue;
    transition: background-color 2 0;
}
```

The animation is declared with the `transition` property, which takes 3 values:
1. The property to animate
2. The duration of the animation
3. The delay before the animation begins

Now, when we hover over an `Element` the background color will animate linearly from red to blue in 2 seconds. 

However, notice that when we move the cursor off of the `Element` the background color immediately changes back to red. This is because the transition was declared on the `element:hover` rule and applies only when transitioning *to* that rule.

To apply an animation when transitioning back to the non-hover rule, add a transition to this rule in the stylesheet:

```css
element {
    background-color: red;
    transition: background-color 2 0; 
}
```

Now the background color animates when we hover and un-hover the `Element`. 