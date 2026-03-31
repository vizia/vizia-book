# Getting Started

## Installing Rust
The Vizia framework is built using the Rust programming language. Currently, to use Vizia, you will need to install the Rust compiler by following the instructions over at [https://www.rust-lang.org/learn/get-started](https://www.rust-lang.org/learn/get-started).

## Platform Build Requirements

Depending on your target OS and backend, you will also need platform-specific build tools and libraries.

### Windows

- Install [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) with the C++ toolchain.
- Use the `x86_64-pc-windows-msvc` Rust target (default for Rust on Windows).

### macOS

No additional setup is required on macOS. The default Rust toolchain and system libraries are sufficient to build Vizia applications.

### Linux

For Ubuntu and Debian-based distributions, install build essentials plus common X11 and Wayland development packages:

```sh
sudo apt update
sudo apt install build-essential libssl-dev pkg-config cmake libgtk-3-dev libclang-dev
```



## Running the Examples
The [Vizia repository](https://github.com/vizia/vizia) on github contains a number of example applications. To run these examples, first clone the repository to a local directory, then with your terminal of choice, navigate to this directory and run the following command:

```bash
cargo run --example name_of_example
```

Where `name_of_example` should be replaced with the example name.

There are also example applications which are packages with their own `Cargo.toml` files. To run, for example, the widget gallery, use the following command:

```bash
cargo run -p widget_gallery
```

Where `widget_gallery` should be replaced with the name of the example package you wish to run.


