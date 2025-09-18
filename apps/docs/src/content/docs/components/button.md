---
title: Button Component
description: A versatile button component with multiple variants and states
---

# Button Component

The Button component is a fundamental interactive element that triggers actions when clicked.

## Basic Usage

### Lit Element

```html
<kaon-button>Default Button</kaon-button>
<kaon-button variant="secondary">Secondary</kaon-button>
<kaon-button variant="danger">Danger</kaon-button>
<kaon-button disabled>Disabled</kaon-button>
```

### Vue Component

```vue
<template>
  <KaonButton @click="handleClick">Default Button</KaonButton>
  <KaonButton variant="secondary">Secondary</KaonButton>
  <KaonButton variant="danger">Danger</KaonButton>
  <KaonButton disabled>Disabled</KaonButton>
</template>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Visual style variant |
| `disabled` | `boolean` | `false` | Whether the button is disabled |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `kaon-click` (Lit) / `click` (Vue) | `CustomEvent` | Fired when button is clicked |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--kaon-button-border-radius` | `4px` | Button border radius |
| `--kaon-button-padding` | `8px 16px` | Button padding |