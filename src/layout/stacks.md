
By deault, the layout system in Vizia will arrange the children of a view into a vertical stack or column.

# Stacks

Vizia provides two container views for easily arranging elements into a column or row:

 - `VStack` - arranges its children into a vertical column
 - `HStack` - arranges its children into a horizontal row

## Stack Size
By default, both the `VStack` and the `HStack` will fill thir parent horizontally in width and hug their children vertically in height.

## Adding Paddings
Space between the container and the children of a `HStack` or `VStack` can be applied with the `child-space` property.

In Vizia, padding, margins, and alignment are all acheived by altering the space around views. For example, padding can