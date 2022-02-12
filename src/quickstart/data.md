# Application Data

So far we have seen how views can be composed together to form a visual tree. Now we will learn how to 'bind' views in the tree to the data of our application.

In general it is a good idea to have a separation between your application data and the UI elements which present that data. For example, your application data might contain a list of peoples names, which is then presented with a `List` view.

To keep this separation data in vizia is stored adjacent to the visual tree. This means that data is not stored within the views themselves.