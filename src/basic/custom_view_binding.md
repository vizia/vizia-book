# Custom View Binding

Ths custom view in the [previous section](./custom_views.md) will work as long as there is some `Person` model data higher up in the tree. However, we want to specify some specific model data to bind to. To do this, we'll add a lens as an input to the constructor:

```rust
impl PersonView {
    pub fn new<L>(cx: &mut Context, lens: L) -> Handle<Self> 
    where L: Lens<Target = Person>
    {
        Self {

        }.build(cx, |cx| {
            HStack::new(cx, |cx|{
            
                Label::new(cx, lens.clone().then(Person::name)
                .map(|name| name.chars().next().unwrap()))
                    .font_size(30.0)
                    .background_color(lens.clone().then(Person::color))
                    .class("profile_icon");
                
                VStack::new(cx, |cx|{
        
                    Label::new(cx, lens.clone().then(Person::name))
                        .font_size(20.0);
                    
                    Label::new(cx, lens.clone().then(Person::email));
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

We've used a generic for the input so that we can use a `where` clause to constrain the type to implement lens with a `Target` type of `Person`. We could have also done the following, which is equivalent:

```rust
impl PersonView {
    pub fn new(cx: &mut Context, lens: impl Lens<Target = Person>) {
        ...
    }
}
```

However, this becomes more difficult to read with more and more lens inputs.

## The `Then` lens

The `lens` input to the constructor has a target type of `Person`, however, for our labels and background-color modifier we need lenses which target different fields of the `Person` type. To do this we use the `then()` method on the input lens like so:

```rust
lens.clone().then(Person::name);
```

Note that in every place we have used the `lens` we `clone()` it to prevent any closures taking ownership of the lens.

Finally, when we construct the `PersonView` we pass a lens to the constructor:

```rust
PersonView::new(cx, Person::root);
```

The `root` lens allows us to bind to the entire model, rather than a field or sub-piece of it, and is generated for us by the `Lens` derive on the `Person` struct.

The complete code is now:

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
    pub fn new<L>(cx: &mut Context, lens: L) -> Handle<Self> 
    where L: Lens<Target = Person>
    {
        Self {

        }.build(cx, |cx| {
            HStack::new(cx, |cx|{
            
                Label::new(cx, lens.clone().then(Person::name)
                .map(|name| name.chars().next().unwrap()))
                    .font_size(30.0)
                    .background_color(lens.clone().then(Person::color))
                    .class("profile_icon");
                
                VStack::new(cx, |cx|{
        
                    Label::new(cx, lens.clone().then(Person::name))
                        .font_size(20.0);
                    
                    Label::new(cx, lens.clone().then(Person::email));
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

        PersonView::new(cx, Person::root);
    })
    .inner_size((400, 100))
    .run();
}
```