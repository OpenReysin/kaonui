# KaonUI

A modern component library built with Lit Elements and Vue wrappers, featuring TypeScript support, Biome.js linting, and a turbo repo setup.

![KaonUI Test App](https://github.com/user-attachments/assets/391fe134-2b0c-42cb-b5c8-b57c7f19dab5)

## Features

- 🚀 **Modern Stack**: Built with Lit Elements for web standards compliance
- 🎯 **Vue Integration**: Pre-built Vue wrappers with full TypeScript support
- 📱 **Responsive**: Mobile-first design approach
- ♿ **Accessible**: WCAG 2.1 AA compliant components
- 🎨 **Customizable**: CSS custom properties for easy theming
- 📦 **Tree-shakable**: Import only what you need
- 🛠️ **Developer Experience**: Turbo repo with Biome.js linting and formatting

## Project Structure

```
kaonui/
├── packages/
│   ├── lit-components/     # Core Lit Element components
│   └── vue-components/     # Vue wrapper components
├── apps/
│   └── test-app/          # Vue.js test application
├── turbo.json            # Turbo repo configuration
├── biome.json           # Biome.js linting and formatting
└── pnpm-workspace.yaml # Workspace configuration
```

## Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

```bash
git clone https://github.com/Conventional-Convention/kaonui.git
cd kaonui
npm install  # or pnpm install
```

### Development

```bash
# Build all packages
npm run build

# Run linting
npm run lint

# Format code
npm run format

# Run the test app
cd apps/test-app
npm run dev
```

### For Lit Projects

```bash
npm add @kaonui/lit-components
```

```typescript
import '@kaonui/lit-components';

// Use in HTML
<kaon-button variant="primary">Click me</kaon-button>
<kaon-card title="My Card">
  <p>Card content</p>
</kaon-card>
```

### For Vue Projects

```bash
npm add @kaonui/vue-components
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
  <KaonCard title="My Card">
    <p>Card content</p>
    <template #footer>
      <KaonButton variant="secondary">Action</KaonButton>
    </template>
  </KaonCard>
</template>
```

## Available Components

### Button Component

A versatile button component with multiple variants and states.

**Properties:**
- `variant`: `'primary' | 'secondary' | 'danger'` (default: `'primary'`)
- `disabled`: `boolean` (default: `false`)

**Events:**
- `kaon-click` (Lit) / `click` (Vue): Fired when button is clicked

### Card Component

A flexible container component for grouping related content.

**Properties:**
- `title`: `string` (optional title displayed in header)

**Slots:**
- `default`: Main content area
- `footer`: Footer content area

## Scripts

- `npm run build` - Build all packages
- `npm run dev` - Start development mode
- `npm run lint` - Run Biome.js linting
- `npm run format` - Format code with Biome.js
- `npm run test` - Run tests
- `npm run clean` - Clean build artifacts

## Technologies Used

- **Lit Elements**: Web components standard
- **Vue.js**: Progressive JavaScript framework
- **TypeScript**: Type safety
- **Vite**: Fast build tool
- **Biome.js**: Fast linter and formatter
- **Turbo**: High-performance build system

## License

GPL-3.0 License - see the [LICENSE](LICENSE) file for details.