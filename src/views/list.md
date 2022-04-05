# List

A list lets you display an element for each item of a vector.
It works by binding to the length of the vector, and then calling the closure you provide with a lens pointing to each item of the vector in sequence.
Like so:

```rust
List::new(cx, AppData::my_vector_of_strings, |cx, string_lens| {
    Label::new(cx, string_lens);
});
```

If you need to display an element for each item of another kind of data structure, consider implementing your own lens, or bugging us to merge <https://github.com/vizia/vizia/pull/32>.
