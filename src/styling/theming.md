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
| `--card` | Card surface background color. |
| `--card-foreground` | Text color on card surfaces. |
| `--popover` | Popover/menu surface background color. |
| `--popover-foreground` | Text color on popover surfaces. |
| `--primary` | Primary action/button color. |
| `--primary-hover` | Hover state color for primary actions. |
| `--primary-active` | Active/pressed state color for primary actions. |
| `--primary-foreground` | Text color on primary surfaces. |
| `--secondary` | Secondary accent color. |
| `--secondary-hover` | Hover state color for secondary actions. |
| `--secondary-active` | Active/pressed state color for secondary actions. |
| `--secondary-foreground` | Text on secondary surfaces. |
| `--muted` | Muted background. |
| `--muted-foreground` | Muted text. |
| `--accent` | Highlight accent color. |
| `--accent-foreground` | Text on accent surfaces. |
| `--border` | Border color. |
| `--input` | Input surface/border tone. |
| `--ring` | Focus ring color. |
| `--destructive` | Danger/destructive action color. |
| `--chart-1` | Chart series color 1. |
| `--chart-2` | Chart series color 2. |
| `--chart-3` | Chart series color 3. |
| `--chart-4` | Chart series color 4. |
| `--chart-5` | Chart series color 5. |
| `--sidebar` | Sidebar background color. |
| `--sidebar-foreground` | Sidebar default text color. |
| `--sidebar-primary` | Sidebar primary accent color. |
| `--sidebar-primary-foreground` | Text color on sidebar primary surfaces. |
| `--sidebar-accent` | Sidebar hover/selection accent color. |
| `--sidebar-accent-foreground` | Text color on sidebar accent surfaces. |
| `--sidebar-border` | Sidebar border color. |
| `--sidebar-ring` | Sidebar focus ring color. |

These tokens are defined for both light (`:root`) and dark (`.dark`) modes in the default theme.

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
    cx.add_stylesheet(include_style!("my_theme.css")).unwrap();
    // ...
})
.ignore_default_theme()
.run()
```

## See also

- [Stylesheets](../resources/stylesheets.md)
- [Variables](./variables.md)
