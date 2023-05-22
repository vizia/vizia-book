# Making the Application Accessible

Making the application accessibility is about making it so that assistive technologies, such as a screen reader, can navigate and query the application.

Our application so far is actually already mostly accessible as the built-in views, such as the buttons, are already set up to be accessible. However, even though the built-in views are accessible, this does not mean the app is automatically accessible.

For the case of our counter, when the increment or decrement buttons are pressed, causing the count to change, a screen reader does not know to speak the current count to inform the user of the change. To account for this we can use something called a 'live region'. 


A live region is a view which has changing content but is not itself interactive. In the counter application a label shows the current counter value. This label is not itself interactive but has content which changes, and so should be marked as a live region. This will cause, for example, a screen reader to announce the value when the count changes.

A view can be marked as a live region with the `live()` modifier:

```rust
Label::new(cx, AppData::count)
    .class("count")
    .live(Live::Assertive);
```

If we were to use our counter application with a screen reader enabled now, the count value would be spoken when either of the buttons are pressed.

<!-- // Video here -->
