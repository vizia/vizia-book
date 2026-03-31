# Theming

Vizia supports light and dark mode theming through CSS custom properties (variables). The built-in theme exposes a set of tokens that can be overridden to create custom themes.

## Theme modes

Switch between light and dark mode by emitting an `EnvironmentEvent`:

```rust,ignore
cx.emit(EnvironmentEvent::SetThemeMode(ThemeMode::DarkMode));
cx.emit(EnvironmentEvent::SetThemeMode(ThemeMode::LightMode));
```

Vizia reads the system preference by default, so no setup is needed for automatic dark/light mode support.

## Built-in CSS variables

The default theme exposes these tokens:

| Variable | Description |
|---|---|
| `--background` | Root background color. |
| `--foreground` | Default text color. |
| `--primary` | Primary action/button color. |
| `--primary-foreground` | Text color on primary surfaces. |
| `--secondary` | Secondary accent color. |
| `--secondary-foreground` | Text on secondary surfaces. |
| `--muted` | Muted background. |
| `--muted-foreground` | Muted text. |
| `--accent` | Highlight accent color. |
| `--accent-foreground` | Text on accent surfaces. |
| `--border` | Border color. |
| `--ring` | Focus ring color. |
| `--destructive` | Danger/destructive action color. |
| `--destructive-foreground` | Text on destructive surfaces. |

## Overriding token values

Supply a stylesheet that redefines tokens:

```css
:root {
    --primary: #7c3aed;
    --primary-foreground: #ffffff;
    --ring: #7c3aed;
}

:root.dark {
    --background: #0f0f0f;
    --foreground: #f5f5f5;
    --primary: #a78bfa;
}
```

Add the stylesheet before building views:

```rust,ignore
cx.add_stylesheet(include_style!("theme_override.css")).unwrap();
```

## Ignoring the default theme

To build a fully custom theme from scratch, set `ignore_default_theme` before building the app:

```rust,ignore
Application::new(|cx| {
    cx.ignore_default_theme = true;
    cx.add_stylesheet(include_style!("my_theme.css")).unwrap();
    // ...
}).run()
```

## See also

- [Stylesheets](../resources/stylesheets.md)
- [Variables](./variables.md)
