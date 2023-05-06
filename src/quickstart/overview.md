# Overview

In this quick start guide we'll build a very simple counter application consisting of two buttons, one for incrementing the counter and one for decrementing, and a label showing the counter value.


The final application will look like the following:

// Image here

## Reactive UI

Vizia is a reactive UI framework. This means that visual elements which represent some state of the application will update when this state changes. Interacting with these visual elements causes the application state to change.

A reactive UI then is a feedback loop of application state change and visual element updates.

In Vizia, this pattern can be broken down into four concepts:

 1. **Models** - Data representing the state of an application.
 2. **Views** - The visual elements which present the application state as a graphical user interface.
 3. **Binding** - The link between model data and views which causes them to update when the data changes.
 4. **Events** - Messages which views send to models to trigger changes to the data.

 // Diagram here