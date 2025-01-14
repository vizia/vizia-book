# Rules & Selectors

Vizia currently supports a custom subset of the CSS standard. This section provides an overview and reference of the supported CSS selectors, selector combinators and pseudo-classes available in vizia.

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

### Basic Selectors

| Selector         | Description                                                       |
|------------------|-------------------------------------------------------------------|
| type      | Selects all views that have the given element name, e.g. `button` will select all `Button` views.                |
| class     | Sselects all views that have the given class name prefixed with a period, e.g. `.class-name` will match any view that has `class("class-name")`. A class name can be added to a view with the `class` style modifier. The `toggle_class` modifier can be used to conditionally add/remove a class from a view, typically with the use of a lens to a boolean.        |
| ID        | Selects views with the specified ID name, prefixed with a hash, e.g. `#id-name` will match the view that has `id("id-name")`.  An ID name can be added to a view with the `id` style modifier and must be a unique name.       |
| universal | The universal selector, denoted with an asterisk, selects all views.        |

### Combinators

Using combinators, we can combine selectors to select views based on their relationship to other views within the tree.

| Combinator       | Description                                                       |
|------------------|-------------------------------------------------------------------|
| descendant       | Selects views which match the selector after the space if they are descended from an view which matches the selector before the space. For example, `hstack label` will match any `Label` which has an `HStack` as an ancestor further up the tree. |
| child            | Selects views which match the selector after the greater than character (`>`) if they are the child of a view which matches the selector before the greater than character. For example, `hstack > label` will match any `Label` which has an `HStack` as a parent. |
| subsquent-sibling            | The subsequent-sibling combinator, denoted with a tilde (`~`), selects siblings. Given `A ~ B`, all views matching `B` will be selected if they are preceded by `A`, provided both `A` and `B` share the same parent. |
| next-sibling            | The next-sibling combinator, denoted by the plus symbol (`+`), is similar to the subsequent-sibling. However, given `A + B`, it only matches `B` if `B` is immediately preceded by `A`, with both sharing the same parent.  |



### Pseudo-classes

| Pseudo-class       | Description               | 
|--------------------|---------------------------|
| `:root`            | Selects the root window.  | 
| `:hover`           | Selects the currently hovered view. | 
| `:checked`         | Selects any view which has been marked as checked. A view can be marked as checked with the [`checked`](https://docs.vizia.dev/vizia/modifiers/trait.StyleModifiers.html#method.checked) style modifier. | 
| `:disabled`        | Selects any view which has been marked as disabled. A view can be marked as disabled with the [`disabled`](https://docs.vizia.dev/vizia/modifiers/trait.StyleModifiers.html#method.disabled) style modifier. | 
| `:active`          | Selects any view which has been marked as active. | 
| `:focus`           | Selects the currently focused view. | 
| `:focus-visible`   | Selects the currently focused view if the view was focused via keyboard navigation. | 

