# Removing Windows Shell

If you don't need the shell to appear when running your application on Windows, you can add the following to the `main.rs` file:

```rs
#![windows_subsystem = "windows"]
```