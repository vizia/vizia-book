

# Setup
Start by creating a new `lib` Rust project:

```bash
cargo new --lib vizia_plug
```

Next, add the following to the generated `Cargo.toml` file:

```toml
[lib]
crate-type = ["cdylib", "lib"]
```

The `nih-plug` crate provides a compatibility layer between nih-plug and Vizia, called `nih-plug-vizia`, which, for now, depends on a modified fork of both Vizia and Baseview.

Add the `nihplug-vizia` crate as a dependency like so:

```toml
[dependencies]
nih_plug_vizia = {git = "https://github.com/robbert-vdh/nih-plug", features = ["assert_process_allocs", "standalone"]}
```

The specified features allow running the plugin as a standalone application as well as an audio plugin for a host application. This is can be very useful developing and testing the UI before building the plugin.