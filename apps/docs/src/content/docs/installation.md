---
title: Installation
description: How to install and set up KaonUI in your project
---

# Installation

KaonUI provides packages for both Lit Elements and Vue.js. Choose the installation method that matches your project setup.

## Prerequisites

- Node.js 18 or higher
- A modern bundler (Vite, Webpack, etc.)

## For Lit Projects

```bash
pnpm add @kaonui/lit-components
```

```typescript
import '@kaonui/lit-components';

// Use in HTML
<kaon-button variant="primary">Click me</kaon-button>
```

## For Vue Projects

```bash
pnpm add @kaonui/vue-components
```

```typescript
import { createApp } from 'vue';
import KaonUI from '@kaonui/vue-components';

const app = createApp({});
app.use(KaonUI);
```

```vue
<template>
  <KaonButton variant="primary" @click="handleClick">
    Click me
  </KaonButton>
</template>
```

## Development Setup

For contributing to KaonUI:

```bash
git clone https://github.com/Conventional-Convention/kaonui.git
cd kaonui
pnpm install
pnpm dev
```