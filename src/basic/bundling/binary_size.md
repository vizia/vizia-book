# Reducing Binary Size

Add this to the `Cargo.toml` of your project to reduce binary size in release mode.
```toml
[profile.release]
codegen-units = 1
lto = true
opt-level = "z"
panic = "abort"
strip = true
```