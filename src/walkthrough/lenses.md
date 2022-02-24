# All About Lenses

You may have noticed something weird about the counter example.
Here's a zoomed-in view of the strange part:

```rust
#[derive(Lens)]
pub struct AppData {
	number: i32,
}

// ...

		Binding::new(cx, AppData::number, |cx, number| {

// ...
```

What does it mean to reference a field of a struct like that?
Here's a hint: this isn't usually valid Rust.
When we say `AppData::number`, we're referring to a _static variable_ defined by `derive(Lens)`.
This variable is, surprise, a lens!

Lenses are property getter objects, allowing you to "select" some part of the model and inspect it at will.
These objects are passed to bindings to let them store the fact that you would like to bind to something specific, instead of having to rebuild the descendants of a binding every time any aspect of the model changes.
Lenses are also very cheap, since they don't store any data of their own, just how to access some data.
This means you can pass lenses around freely without worrying about lifetimes, ownership, or cloning.

Now, let's look at the other strange part of the example:

```rust
// ...

		Binding::new(cx, AppData::number, |cx, number| {
			// The value we're passed is almost, but not quite,
			// the number we care about. Let's get it!
			let number = *number.get(cx);

			// Build our second view
			Label::new(cx, &number.to_string());
		});

// ...
```

What, exactly, is the value that gets passed to the binding's closure?
It is, surprise, the same lens we passed in!
Lenses come in with a method to pull their data out of the associated model.
`*number.get(cx)` is equivalent to the following: `cx.data::<AppData>().unwrap().number`.

## Lenses Under the Hood

So far, we've only talked about the lenses that are created through the Lens derive macro.
There are other kinds of lenses!

The lens trait declaration looks something like this:

```rust
pub trait Lens: 'static + Clone {
    type Source;
    type Target;

    fn view<O, F: FnOnce(Option<&Self::Target>) -> O>(&self, source: &Self::Source, map: F) -> O;
}
```

As you can see, every lens has two associated types, a Source and a Target.
The view function's job is, more or less, to transform a Source reference into a Target reference.
We'll get into why its signature is more complicated than that in a second!
For our AppData::number lens, we have `Source = AppData` and `Target = i32`.

The `get(cx)` function, as we saw before, grabs the source reference out of the current context (finds the most recent ancestor in the tree that has an appropriate model built into it).
Then, it runs `view` to transform a source reference into a target reference, and finally, clones the data out of reference in order to return it.
It may look like `get(cx)` returns a reference since we're dereferencing it, but the value returned actually has ownership over the data.

## Even More Lenses: Then

Let's say you have the following setup:

```rust
#[derive(Lens, Default)]
pub struct AppData {
	pub some_struct: SomeStruct
}

impl Model for AppData {}

#[derive(Lens, Default)]
pub struct SomeStruct {
	pub field1: i32,
	pub field2: i32,
}

// ...

	AppData::default().build(cx);

// ...
```

So we have an AppData built as a model in our tree, and it has a SomeStruct as a member.
How can we bind just to `field1`, without rebuilding the tree when `field2` is changed?
We have two lenses, `AppData::some_struct` (which has `Source = AppState` and `Target = SomeStruct`) and `SomeStruct::field1` (which has `Source = SomeStruct` and `Target = i32`), and we would like to somehow join them together.

The syntax for this is `AppData::some_struct.then(SomeStruct::field1)`.
This creates a `Then` lens, a lens which combines two other lenses to get the output of the second lens given the input of the first lens.
This lens has `Source = AppData` and `Target = i32`, so it can be used just like you would any other lens, including as part of another Then lens!
For example, `Binding::new(cx, AppData::some_struct.then(SomeStruct::field1), |cx, lens| { ... })`.

## Even More Lenses: Map

Let's say you have the following setup:

```rust
#[derive(Lens)]
pub struct AppData {
	pub my_list: Vec<i32>,
}
```

...and you want to be able to bind to _just the length_ of the list.
You can do that by creating a Map lens, or a lens that can compute arbitrary data for its target instead of just referencing a part of its source.
It looks like this: `AppData::my_list.map(|my_list| my_list.len())`.
This creates a lens with `Source = AppData` and `Target = usize`.
Any binding using this lens will only rebuild its children when it detects the length of the list has changed - not any of its contents!

## Bindings Under the Hood

Let's take a short detour to talk about why your choice of lens matters.
First, when you build a binding, the lens you pass in must have a source type which implements `Model` and a target type that implements `Data`.
We haven't seen `Data` yet, but it is very simple: here is its full definition:

```rust
pub trait Data: 'static + Clone {
    fn same(&self, other: &Self) -> bool;
}
```

When you have an object that is `Data`, you can clone it and you can check if it's the `same` as some other data.
This is everything that is needed for the entire lifecycle for bindings:

- When a binding is created, Vizia stores a clone of the data the lens computes
- After any change is made to any part of the model, Vizia loops through all bindings and recomputes the data through the lens
- If the data presently in the model is different from the newly computed data, the binding is rerun and the stored data is updated.

This is why it matters which lenses you use!
The data you bind to must be small, since it will be cloned whenever it changes, and the lens computation must be cheap, since it will be done whenever _anything_ in the app changes!

## Property Bindings

Bonus round!
Now that you understand both lenses and styling, you can use a more efficient but more limited form of binding which doesn't rebuild any of the tree but can instead set style attributes.
Take a look at this:

```rust
        HStack::new(cx, |cx| {
            Label::new(cx, "Label 1").space(Units::Auto);
            Label::new(cx, "Label 2").space(Units::Auto);
        })
            .bind(AppData::spacing, |handle, spacing| {
                let col = Units::Pixels(*spacing.get(handle.cx));
                handle.col_between(col);
            });
```

Assuming that `spacing` is an `f32`, this should automatically bind the space between the two labels (the width of the column between the HStack's children) to that part of the model.
This works by creating a regular binding with no children whose builder closure has a reference to another part of the tree.

In the case that you have a lens whose Target is the same type as a property setter expects, you can pass the lens directly to the property setter as a shorthand, and it will do the above for you!
