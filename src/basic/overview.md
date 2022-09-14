# Overview

This chapter covers the basic concepts of Vizia, some of which are demonstrated in the [walkthrough](../walkthrough/introduction.md), but in more detail.

# Reactive UI

Vizia is a reactive UI framework. This means that visual elements which represent some state of the application will update when this state changes. Interacting with these visual elements causes the application state to change.

A reactive UI then is a feedback loop of application state change and visual element updates.

In Vizia, this pattern can be broken down into four concepts:

 1. **Models** - Data representing the state of an application.
 2. **Views** - The visual elements which present the application state as a graphical user interface.
 3. **Binding** - The link between model data and views which causes them to update when the data changes.
 4. **Events** - Messages which views send to models to trigger changes to the data.



<!-- In Vizia, views **bind** to models so that they update when the application data changes. Views send **events** to models to change the data. -->

<!-- ## The View Tree
Views in Vizia are composed to form a tree.

This view tree is then used to determine the size and position of elements, as well as the order that elements should be rendered into the window. -->

