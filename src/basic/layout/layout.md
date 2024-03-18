# Layout

The position and size of a view is determined by its layout properties. Vizia uses a custom layout system called [morphorm](https://github.com/vizia/morphorm) which can achieve similar results to flexbox.

### Layout Type
The layout type property determines how children of a node will be arranged. There are two variants:
- `LayoutType::Row` - The node will arrange its children into a horizontal row.
- `LayoutType::Column` - The node will arrange its children into a vertical column.

![](docs/images/layout_type.svg)

### Size
The size of a node is determined by its `width` and `height` properties. These properties are specified with `Units`, which has four variants:
- `Units::Pixels(val)` - Sets the size to a fixed number of pixels.

![](/docs/images/size_pixels.svg)
- `Units::Percentage(val)` - Sets the size to a percentage of the nodes parent size.

![](/docs/images/size_percentage.svg)
- `Units::Stretch(factor)` - Sets the size to a proportion of the free space of the parent within the same axis.

![](/docs/images/size_stretch.svg)
- `Units::Auto` - Sets the size to either hug the nodes children, or to inherit the [content size](#content-size) of the node.

![](/docs/images/size_auto.svg)

### Content Size
Content size is used to determine the size of a node which has no children but may have an intrinsic size due to contents which do not correspond to nodes in the layout tree. For example, a node which contains text has an intrinsic size of the bounds of the text, which may introduce a dependency between the width and height (i.e. when text wraps). Similarly, content size can be used to size a node with a particular aspect ratio by constraining the height to be some proportion of the width (or conversely).

![](/docs/images/content_size.svg)

### Space
The position of a node within a stack can be adjusted by the spacing applied to each of its four sides:
- `left` - The space that should be applied to the left side of the node. This takes precedent over `right` spacing.
- `right` - The space that should be applied to the right side of the node.
- `top` - The space that should be applied to the top side of (above) the node. This takes precedent over `bottom` space.
- `bottom` - The space that should be applied to the bottom side of (below) the node.

![](/docs/images/spacing.svg)

Spacing is specified with `Units`, which has four variants:
- `Units::Pixels(val)` - Sets the spacing to a fixed number of pixels.

![](/docs/images/space_pixels.svg)
- `Units::Percentage(val)` - Sets the spacing to a percentage of the nodes parent size.

![](/docs/images/space_percentage.svg)
- `Units::Stretch(factor)` - Sets the spacing to a proportion of the free space of the parent within the same axis.

![](/docs/images/space_stretch.svg)
- `Units::Auto` - Sets the spacing to inherit the [child spacing](#child-space) of the parent.

![](/docs/images/space_auto.svg)

### Position Type
The position type property determines whether a node should be positioned in-line with its siblings in a stack, or out-of-line and independently of its siblings. There are two variants:
- `PositionType::ParentDirected` - The node will be positioned relative to its in-line position with its siblings.
- `PositionType::SelfDirected` - The node will be positioned out-of-line and relative to the top-left corner of its parent.

![](/docs/images/position_type.svg)

Self directed nodes do not contribute to the size of the parent when the parent size is set to auto.

### Child Space
The child space of a node applies space around its children by overriding the individual auto spacing of the nodes children and is also specified with `Units`.
- `child_left` - The space that should be applied between the left side of the view and its children with individual `Auto` left spacing. Applies to all children in a vertical stack and to the first child in a horizontal stack.

![](/docs/images/child_left.svg)
- `child_right` - The space that should be applied between the right side of the view and its children with individual `Auto` right spacing. Applies to all children in a vertical stack and to the first child in a horizontal stack.

![](/docs/images/child_right.svg)
- `child_top` - The space that should be applied between the top side of the view and its children with individual `Auto` top spacing. Applies to all children in a horizontal stack and to the first child in a vertical stack.

![](/docs/images/child_top.svg)
- `child_bottom` - The space that should be applied between the bottom side of the view and its children with individual `Auto` bottom spacing. Applies to all children in a horizontal stack and to the first child in a vertical stack.

![](/docs/images/child_bottom.svg)

There are two additional child-spacing properties for setting the space between child nodes:
- `row-between` - The space that should be applied between the children within a `Column` layout. Works by overriding the individual `top` and `bottom` spacing of the children if they are set to `Auto`.
- `col-between` - The space that should be applied between the children within a `Row` layout. Works by overriding the individual `left` and `right` spacing of the children if they are set to `Auto`.

![](/docs/images/space_between.svg)

### Constraints
All spacing and size properties can be constrained with corresponding minimum and maximum properties, which are also specified using `Units`. For example, the `width` of a node can be constrained with the `min_width` and `max_width` properties.

![](/docs/images/min_width_pixels.svg)

Specifying a minimum size of `Auto` will cause the node to be at least as large as its contents.

![](/docs/images/min_width_auto.svg)