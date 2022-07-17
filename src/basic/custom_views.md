# Custom Views

<!-- Demonstrates custom views by refactoring the person example into its own re-usable view. -->

<!-- There will be a more advanced guide to custom views in a later section which will demonstrate how to build a slider. -->

A custom view can be used to create re-usable components which can contain model data and react to events.

Let's refactor the `Person` example so far into a custom view.

First, we declare a struct to hold any view specific data:

```rust
pub struct PersonView {

}
```
In this case our custom view doesn't contain any data (yet) because we'll be binding it to the `Person` model data.

To make this a view, we implement the `View` trait for it:

```rust
impl View for PersonView {}
```

This, allows us to call the `build` method, which we'll use in the constructor to build the view into the context:

```rust
impl PersonView {
    pub fn new(cx: &mut Context) -> Handle<Self> {
        Self {

        }.build(cx, |cx| {

        })
    }
}
```

The `build` method returns a `Handle` which we return from the constructor.

The closure passed to `build` can be used to construct any child views, and we'll add here the [previous code](./property_binding.md) to build the person view. 

```rust
impl PersonView {
    pub fn new(cx: &mut Context) -> Handle<Self> {
        Self {

        }.build(cx, |cx| {
            HStack::new(cx, |cx|{
            
                Label::new(cx, Person::name.map(|name| name.chars().next().unwrap()))
                    .font_size(30.0)
                    .background_color(Person::color)
                    .class("profile_icon");
                
                VStack::new(cx, |cx|{
        
                    Label::new(cx, Person::name)
                        .font_size(20.0);
                    
                    Label::new(cx, Person::email);
                })
                .top(Stretch(1.0))
                .bottom(Stretch(1.0));
            })
            .background_color(Color::from("#EEEEEE"))
            .height(Auto)
            .child_space(Pixels(10.0))
            .col_between(Pixels(10.0));
        })
        .height(Auto)
    }
}
```

Note that `PersonView` is a container view and so we use `height(Auto)` on the returned handle from `build` to ensure that out custom view will 'hug' its contents.

Finally, we can use our custom view like any other:

```rust
PersonView::new(cx);
```

The complete code is then:

```rust
use vizia::prelude::*;

const STYLE: &str = r#"
    .profile_icon {
        height: 65px;
        width: 65px;
        child-space: 1s;
        border-radius: 50%;
    }
"#;

#[derive(Lens)]
pub struct Person {
    pub name: String,
    pub email: String,
    pub color: Color,
}

impl Model for Person {}

pub struct PersonView {}

impl View for PersonView {}

impl PersonView {
    pub fn new(cx: &mut Context) -> Handle<Self> {
        Self {

        }.build(cx, |cx| {
            HStack::new(cx, |cx|{
            
                Label::new(cx, Person::name.map(|name| name.chars().next().unwrap()))
                    .font_size(30.0)
                    .background_color(Person::color)
                    .class("profile_icon");
                
                VStack::new(cx, |cx|{
        
                    Label::new(cx, Person::name)
                        .font_size(20.0);
                    
                    Label::new(cx, Person::email);
                })
                .top(Stretch(1.0))
                .bottom(Stretch(1.0));
            })
            .background_color(Color::from("#EEEEEE"))
            .height(Auto)
            .child_space(Pixels(10.0))
            .col_between(Pixels(10.0));
        })
        .height(Auto)
    }
}

fn main() {
    Application::new(|cx|{

        cx.add_theme(STYLE);

        Person {
            name: String::from("John Doe"),
            email: String::from("john.doe@company.com"),
            color: Color::from("#4040AA"),
        }.build(cx);

        PersonView::new(cx);
    })
    .inner_size((400, 100))
    .run();
}
```

![](../img/property_binding.png)
