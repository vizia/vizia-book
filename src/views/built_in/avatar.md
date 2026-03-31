# Avatar

An element used to visually represent a person or entity.

## When To Use It

Use Avatar for profile photos, user initials, presence indicators, or other compact identity markers. Avatars work well in lists, headers, comments, chat UIs, and grouped participant displays.

## Constructing an Avatar

A `Avatar` takes content such as an icon, text, or an image. By default, the avatar uses the `Circle` variant.

```rust,ignore
Avatar::new(cx, |cx| {
	Svg::new(cx, ICON_USER);
});
```

Use the `variant` modifier to change the shape, and `badge` to attach a status or count indicator:

```rust,ignore
Avatar::new(cx, |cx| {
	Label::new(cx, "GA");
})
.variant(AvatarVariant::Square);

Avatar::new(cx, |cx| {
	Image::new(cx, "profile.png");
})
.variant(AvatarVariant::Rounded)
.badge(|cx| Badge::empty(cx).class("success"));
```

Use `AvatarGroup` to display multiple overlapping avatars together:

```rust,ignore
AvatarGroup::new(cx, |cx| {
	Avatar::new(cx, |cx| {
		Svg::new(cx, ICON_USER);
	});

	Avatar::new(cx, |cx| {
		Label::new(cx, "GA");
	});

	Avatar::new(cx, |cx| {
		Image::new(cx, "profile.png");
	});
});
```

Use `max_visible` to cap how many avatars are shown. Any overflow is replaced with a `+N` overflow avatar automatically:

```rust,ignore
AvatarGroup::new(cx, |cx| {
	for _ in 0..6 {
		Avatar::new(cx, |cx| { Svg::new(cx, ICON_USER); });
	}
})
.max_visible(3);
```

## AvatarGroup Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `variant` | `impl Res<AvatarVariant>` | Sets the shape of all avatars in the group. | `Circle` |
| `control_size` | `impl Res<ControlSize>` | Sets the size of all avatars in the group. | `Medium` |
| `max_visible` | `impl Res<usize>` | Maximum number of visible avatars; overflows show a `+N` avatar. | No limit |

## Avatar Modifiers

| Modifier | Type | Description | Default |
|---|---|---|---|
| `variant` | `impl Res<AvatarVariant>` | Sets the avatar shape to `Circle`, `Square`, or `Rounded`. | `Circle` |
| `control_size` | `impl Res<ControlSize>` | Sets the avatar size: `ExtraSmall` (24px), `Small` (32px), `Medium` (42px), `Large` (56px). | `Medium` |
| `badge` | `FnOnce(&mut Context) -> Handle<Badge>` | Adds a badge to the avatar, typically for status or count. | No badge |

## Components and Styling

A basic avatar is rendered as a single `avatar` element containing your provided content. `AvatarGroup` renders as an `avatar-group` container around multiple avatars.

| Selector | Description |
|---|---|
| `avatar` | The outermost avatar element. |
| `avatar.circle` | Applied by default for circular avatars. |
| `avatar.square` | Applied when using `AvatarVariant::Square`. |
| `avatar.rounded` | Applied when using `AvatarVariant::Rounded`. |
| `avatar.xsmall` | Applied when using `ControlSize::ExtraSmall` (24px). |
| `avatar.small` | Applied when using `ControlSize::Small` (32px). |
| `avatar.medium` | Applied when using `ControlSize::Medium` (42px, default). |
| `avatar.large` | Applied when using `ControlSize::Large` (56px). |
| `avatar > svg` | Targets icon content inside the avatar. |
| `avatar > image` | Targets image content inside the avatar. |
| `avatar-group` | The container for grouped avatars. |
| `avatar-group > avatar` | Individual avatars inside an avatar group. |
| `avatar-group.circle > avatar` | Applies circular clipping to group members. |
| `avatar-group.xsmall > avatar` | Size classes applied to group members via `control_size`. |

### Theming

| Selector | Property | Value |
|---|---|---|
| `avatar` | `background-color` | `var(--accent)` |
| `avatar` | `color`, `fill` | `var(--foreground)` |
| `avatar.circle` | `corner-radius` | `50%` |
| `avatar.square` | `corner-radius` | `0px` |
| `avatar.rounded` | `corner-radius` | `4px` |
| `avatar.medium` | `size` | `42px` (default) |
| `avatar > svg` | `size` | `1s` (stretches to fill padding box) |
| `avatar-group > avatar` | `border` | `2px solid #fff` |

Customize avatar appearance using shape selectors and your own content styling:

```css
avatar {
	background-color: var(--secondary);
	color: var(--secondary-foreground);
}

avatar.rounded {
	corner-radius: 8px;
}

avatar-group > avatar {
	border: 2px solid var(--background);
}
```

## Accessibility

`Avatar` does not add interactive behavior or a specialized accessibility role by default. Its accessibility depends on the content it contains and the context in which it is used.

### Decorative Avatars

If the avatar is purely decorative and nearby text already identifies the person or entity, no additional accessibility labeling is usually needed.

### Meaningful Avatars

If the avatar conveys meaningful information on its own, provide an accessible name with `name`:

```rust,ignore
Avatar::new(cx, |cx| {
	Image::new(cx, "profile.png");
})
.name("George Atkinson");
```

### Avatar with Visible Text

If the avatar is paired with visible text, keep the text adjacent so assistive technologies and sighted users receive the same context:

```rust,ignore
HStack::new(cx, |cx| {
	Avatar::new(cx, |cx| {
		Label::new(cx, "GA");
	});

	Label::new(cx, "George Atkinson");
})
.height(Auto)
.gap(Pixels(8.0));
```


