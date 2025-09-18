---
title: Card Component
description: A flexible container component for grouping related content
---

The Card component provides a flexible container for grouping related content with optional header and footer sections.

## Basic Usage

### Lit Element

```html
<kaon-card title="Card Title">
  <p>This is the card content.</p>
  <span slot="footer">Footer content</span>
</kaon-card>
```

### Vue Component

```vue
<template>
  <KaonCard title="Card Title">
    <p>This is the card content.</p>
    <template #footer>
      <span>Footer content</span>
    </template>
  </KaonCard>
</template>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | `''` | Optional title displayed in the header |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Main content area |
| `footer` | Footer content area |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--kaon-card-border-radius` | `8px` | Card border radius |
| `--kaon-card-shadow` | `0 2px 4px rgba(0, 0, 0, 0.1)` | Card shadow |
| `--kaon-card-padding` | `16px` | Card padding |