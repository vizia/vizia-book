# Lens Map

The `map()` method on a lens can be used to derive data from the target of the lens. This is useful for when the lens target is not the right type for the binding, but a value of the correct type can be derived from it.

For example, the first letter used for the profile icon can be derived from the name of the person:

```rust
use vizia::prelude::*;

const STYLE: &str = r#"
    .profile_icon {
        height: 65px;
        width: 65px;
        child-space: 1s;
        background-color: #AA4040;
        border-radius: 50%;
    }
"#;

#[derive(Lens)]
pub struct Person {
    pub name: String,
}

impl Model for Person {}

fn main() {
    Application::new(|cx|{

        cx.add_theme(STYLE);

        Person {
            name: String::from("John Doe"),
        }.build(cx);

        HStack::new(cx, |cx|{
            
            Label::new(cx, Person::name.map(|name| name.chars().next().unwrap()))
                .font_size(30.0)
                .class("profile_icon");

            Label::new(cx, Person::name)
                .font_size(20.0);
        
        })
        .child_space(Stretch(1.0))
        .child_left(Pixels(10.0))
        .col_between(Pixels(10.0));
    })
    .inner_size((400, 100))
    .run();
}
```

<img src="../img/stylesheet.png" alt="" width="400"/>

Change the name in the model and re-run the application to see that the values of the labels change accordingly. 