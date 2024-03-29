# Binding Nested Data

Let's say we have the following application data structure:

```rs
#[derive(Lens)]
pub struct AppData {
    nested: NestedData,
}

#[derive(Lens)]
pub struct NestedData {
    name: String,
}
```

Provided that both the parent and nested structures derive the `Lens` trait, we can use the `then()` lens modifier to produce a lens which targets the nested data:

```rs
fn main() {
    Application::new(|cx|{

        AppData {
            nested: NestedData {
                name: String::from("John Doe"),
            },
        }.build(cx);

        Label::new(cx, AppData::nested.then(NestedData::name));
    })
    .inner_size((400, 100))
    .run();
}
```

If the nested data structure does not dderive `Lens`, then the `map_ref()` modifier can be used:

```rs
fn main() {
    Application::new(|cx|{

        AppData {
            nested: NestedData {
                name: String::from("John Doe"),
            },
        }.build(cx);

        Label::new(cx, AppData::nested.map_ref(|nested| &nested.name));
    })
    .inner_size((400, 100))
    .run();
}
```

