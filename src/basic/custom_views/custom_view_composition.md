# Custom View Composition

In the [last section](./custom_views.md) we built the skeleton for a custom `ColorPicker` view. In this section we're going to build out the body of the view using sub-views.

To keep things simple, the `ColorPicker` view will be made up of 5 sub-views. The first is another custom view which we will build and will allow us to pick a value and saturation from a 2D x-y pad. The other views are labels which will display the chosen 