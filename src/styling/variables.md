# CSS Variables

CSS custom properties, commonly known as CSS variables, allow you to store values that can be reused throughout your stylesheets. They provide a way to centralize styling values, making it easier to maintain consistent styling across your application and make dynamic style changes.

## Defining Variables

Variables are defined using the `--variable-name` syntax and can contain any valid CSS value. They are typically defined on the `:root` selector to make them globally available, but can also be scoped to specific selectors.

### Global Variables

Define variables globally on the `:root` selector to make them accessible throughout your entire stylesheet:

```css
:root {
    --primary-color: rgb(0, 150, 255);
    --secondary-color: rgb(100, 200, 50);
    --spacing-unit: 10px;
    --border-radius: 5px;
    --font-size-large: 18px;
}
```

### Scoped Variables

Variables can also be defined on specific selectors, making them available only to that element and its descendants:

```css
button {
    --button-bg: rgb(50, 100, 255);
    --button-padding: 8px 12px;
    background-color: var(--button-bg);
    padding: var(--button-padding);
}

button:hover {
    --button-bg: rgb(30, 80, 200);
}
```

## Using Variables

Variables are referenced using the `var()` function. You can use them anywhere you would use a normal CSS value:

```css
:root {
    --primary-color: rgb(0, 150, 255);
    --text-color: rgb(50, 50, 50);
    --spacing: 12px;
}

label {
    color: var(--text-color);
    font-size: var(--font-size-large);
}

hstack {
    space: var(--spacing);
    background-color: var(--primary-color);
}
```

## Referencing Other Variables

Variables can reference other variables, which is useful for creating derived values:

```css
:root {
    --base-color: rgb(100, 150, 200);
    --highlight-color: var(--base-color);
    --compliment-color: rgb(200, 150, 100);
}
```

## Variable Inheritance

CSS variables are inherited by child elements, allowing you to define values at a parent level and use them in children:

```css
:root {
    --text-color: rgb(0, 0, 0);
    --font-size: 14px;
}

hstack {
    --text-color: rgb(255, 255, 255);  /* Override for this element */
}

label {
    color: var(--text-color);          /* Uses inherited value */
    font-size: var(--font-size);       /* Uses parent value */
}
```

## Animating Variables

Variables can be animated using transitions, allowing you to create smooth style changes:

```css
hstack {
    --bg-color: rgb(100, 150, 200);
    background-color: var(--bg-color);
    transition: --bg-color 0.3s;
}

hstack:hover {
    --bg-color: rgb(200, 100, 150);
}
```

This is particularly useful for creating interactive effects without needing to animate individual properties. When a variable changes, any property using that variable will smoothly transition to the new value.

## Supported Variable Types

Variables can hold values of any CSS type supported by Vizia:

- **Colors**: `rgb(255, 0, 0)`, `#FF0000`, named colors
- **Lengths**: `10px`, `1.5em`, `50%`, `5vh`
- **Numbers**: `0.5`, `2`, `-1`
- **Durations**: `1s`, `500ms`
- **Angles**: `90deg`, `1.57rad`
- **Keyword values**: `center`, `flex`, `row`

```css
:root {
    --primary-color: rgb(0, 150, 255);
    --border-width: 2px;
    --opacity-value: 0.8;
    --animation-duration: 0.5s;
    --rotation-angle: 45deg;
}
```

