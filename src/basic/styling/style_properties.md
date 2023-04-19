# List of supported style properties

This section provides a list of the currently supported CSS style properties in vizia.

For the corresponding modifier name, replace any hyphens with a underscores. For example, `background-color` in CSS becomes the`background_color()` modifier in Rust.

Most properties follow the CSS specification. Any differences are highlighted. Layout properties are shown in the [layout section](../layout/layout_properties.md) of the guide.

## Display

- display
- visibility
- opacity

## Clipping

- overflow
- clip-path (inset only)

## Filtering
- backdrop-filter

## Border

- border
  - border-color
  - border-width

- border-corner-shape
  - border-top-left-shape
  - border-top-right-shape
  - border-bottom-left-shape
  - border-bottom-right-shape

- border-radius
  - border-top-left-radius
  - border-top-right-radius
  - border-bottom-left-radius
  - border-bottom-right-radius

## Outline

- outline
  - outline-color
  - outline-width
  - outline-offset

## Background
- background
  - background-color
  - background-image
    - linear-gradient()
    - radial-gradient()
  - background-position
  - background-size

## Text

- font-size
- color
- font-weight
- font-style
- font-stretch
- font-family
- selection-color
- caret-color
- [ ] user-select
- text-wrap
- [ ] letter-spacing
- [ ] line-height
- [ ] text-decoration
  - [ ] text-decoration-color
  - [ ] text-decoration-line
  - [ ] text-decoration-thickness
- [ ]  text-indent
- [ ] text-overflow
- [ ] text-shadow
- [ ] text-transform
- [ ] text-underline-offset
- [ ] word-break
- [ ] word-spacing

## Box Shadow

- box-shadow
  - h-offset
  - v-offset
  - blur
  - spread
  - color
  - inset

## Transform

- transform
  - matrix()
  - rotate()
  - translate()
  - translateX()
  - translateY()
  - scale()
  - scaleX()
  - scaleY()
  - skew()
  - skewX()
  - skewY()
- translate
- rotate
- scale
- transform-origin

## Transition

- transition
  - transition-delay
  - transition-duration
  - transition-property
  - transition-timing-function

## Other
- z-index
- cursor

# List of supported selectors

## Selectors

- id
- element
- class
- universal

## Combinators
- child (>)
- descendant (space)
- adjacent sibling (+)
- sibling (~)
- selector list ( , )

## Pseudo-classes

### Input pseudo-classes
- enabled
- disabled
- read-only
- read-write
- [ ] placeholder-shown
- [ ] default
- checked
- [ ] indeterminate
- [ ] blank
- [ ] valid
- [ ] invalid
- [ ] in-range
- [ ] out-of-range
- [ ] required
- [ ] optional

### Linguistic pseudo-classes
- [ ] lang()
- [ ] dir()

### Tree-structural pseudo-classes
- root
- empty
- first-child
- last-child
- only-child

### User-action pseudo-classes
- hover
- active
- over
- focus
- focus-visible
