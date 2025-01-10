# Rules & Selectors

Vizia currently supports a custom subset of the CSS standard. This section provides an overview and reference of the supported CSS selectors, selector combinators and pseudo-classes available in vizia. The following section provides a list of available style properties.

## Style Rules
A typical style rule might look something like this:

```css
hstack.one label {
    background-color: red;
    width: 30px;
}
```

The first part before the opening brace is called a [selector](#selectors), which determines which views the rule applies to, and the part inside the brackets are a list of properties and values to apply to the styling of matching views.

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