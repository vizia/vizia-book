# Stylesheets

Vizia currently supports only a small subset of the CSS standard. This section provides an overview and reference of the supported CSS selectors, selector combinators, pseudo-classes, and pseudo-elements available in vizia. The following section provides a list of available style properties.

## Style Rules
A typical style rule might look something like this:
```css
hstack.one label {
    background-color: red;
    width: 30px;
}
```
The first part before the opening brace is called a selector, which determines which views the rule applies to, and the part inside the brackets are a list of properties and values to apply to the styling of matching views.

## Selectors
- `id (#id-name)`

Selects elements with the specified id name. An id name can be added to a view with the `id` style modifier and must be a unique name.
- `element (element-name)`

Selects elements with the specified element name. The element name of a view is specific to its type and is given by the return value of the `element` method on the `View` trait implementation.
- `class (.class-name)`

Selects elements with the specified class name. A class name cab be added to a view with the `class` style modifier. The `toggle_class` modifier can be used to conditionally add/remove a class from a view, typically with the use of a lens to a boolean.
```rust
// When the boolean value `AppData::flag` is true, the view has the class name 'foo'.
Element::new(cx).toggle_class("foo", AppData::flag);
```
- `universal (*)`

Selects all elements.

## Selector Combinators
- `descendant (space)`

Selects elements which match the selector after the space if they are descended from an element which matches the selector before the space. For example: 
```css
hstack label {

}
```
will select any `Label` which has an `HStack` as an ancestor further up the [tree](../views/view_tree.md).
- `child (>)`

Selects elements which match the selector after the space if they are the child of an element which matches the selector before the space. For example: 
```css
hstack > label {

}
```
will select any `Label` which has an `HStack` as a parent.

## Pseudo-classes
- `:root`

Selects the root window.
- `:hover`

Selects the currently hovered element.
- `:checked`

Selects any element which has been marked as checked. A view can be marked as checked with the `checked` style modifier.
- `:disabled`

Selects any element which has been marked as disabled. A view can be marked as disabled with the `disabled` style modifier.
- `:active`

Selects any element which has been marked as active.
- `:focus`

Selects the currently focused view.
- `:focus-visible`

Selects the currently focused view if the view was focused via keyboard navigation.


## Pseudo-elements
*Not currently supported*
<!-- ## Selectors
Styling in CSS works by matching rules to views. A *style rule* is made up of a selector followed by a declaration, i.e. a list of properties and their desired values.

The selector determines which views the rule applies to. For example, the following rule applies to any `Button` view in the application:

```css
button {
    background-color: red;
}
```


### Element Name
The `button` keyword here is an element name and is used to select views of a certain type, e.g. all buttons or all checkboxes. The element name of a view is determine by the `element()` method in the view trait, for example:

```rust
impl View for Button {
    fn element(&self) -> Option<&'static str> {
        Some("button")
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
7. Focused -->