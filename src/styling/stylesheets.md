
# Stylsheets
As shown in the previous section, Vizia can use CSS stylesheets to apply shared styling to views. However, Vizia currently only supports only a small subset of the CSS standard. This section provides an overview and reference of the supported CSS specification.

## Selectors
Styling in CSS works by matching rules to views. A *style rule* is made up of a selector, followed by a list of properties and their desired values.

The selector determines which views the rule applies to. For example, the following rule applies any `Button` view in the application:

```css
button {
    background-color: red;
}
```


### Element Name
The `button` keyword here is an element name and is used to select views of a certain type, e.g. all buttons or all checkboxes. The element name of a view is determine by the `element()` method in the view trait, for example:

```rust
impl View for Button {
    fn element(&self) -> Option<String> {
        Some("button".to_string())
    }
}
```

### Class Name
It is also possible to add one or more class names to views using the `.class()` modifier:

```rust
Element::new(cx).class("foo");
```

These class names can then be used in selectors to target these views:

```css
.foo {
    background-color: red; 
}
```
> Note that class names in CSS begin with a '.'

There is also a `.toggle_class()` modifier for toggling a class name on a view using a boolean or a lens to some boolean state:

```rust
Element::new(cx).toggle_class("foo", AppData::flag);
```

When `AppData::flag` is true then the class name `foo` is added to the view, and removed when `AppData::flag` is false.

### Id Name
An id name can be used to select a specific view. The id name is applied using the `.id()` modifier:

```rust
Element::new(cx).id("bar");
```
Which can then be selected in CSS:

```css
#bar {
    background-color: red;
}
```
> Note that id names in CSS begin with a '#'

Unlike class names, id names are unique and cannot be shared between multiple views.

### Pseudo-Classes
Pseudo-classes allow specifying style rules based on the state of a view.

For example, the background color of a button can be changed from red to blue when hovered with the following CSS:

```css
button {
    background-color: red;
}

button:hover {
    background-color: blue;
}
```

The pseudo-class selector, `hover`, is applied to the element name selector, `button`, to specify the style change that should occur when the button is hovered with the mouse cursor. 

There are currently 7 available pseudo-class selectors:

1. Hovered
2. Pressed
3. Checked
4. Disabled
5. Selected
6. Active
7. Focused