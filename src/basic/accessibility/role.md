# Accessibility Role, Name, and Value

Assistive technologies, such as screen readers, rely on the role, name, and, in some case, value of an accessible view to determine how the view should be presented and how it should be interacted with by the assistive technology.

## Role

A role can be added to a view using the `role()` modifier:

```rust
Element::new(cx).role(Role::Button);
```

This will add the `button` role to the element. Users of assistive technologies will then be able to understand what the control is and interact with it correctly, i.e. have the ability to 'click' on the element.

Built-in views in vizia have a role already assigned to them. The role should be set by the user for custom views, or to override the role of a built-in view.

## Name

The name of a view is usually the first thing read by a screen reader.

A name can be added to a view using the `name()` modifier, which accepts a value or lens that can be converted to a string. 

```rust
Element::new(cx).name("open");
```

For some views, the name is also the content and so a name is provided. For example, the `Label` view sets its name to its text string. For other views, such as a `Checkbox` the name should be specified.

## Value

Some views have a value 