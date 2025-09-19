# Resonite Modding Wiki

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Resonite](https://img.shields.io/badge/Resonite-Modding-blue)](https://resonite.com)

The official documentation site for Resonite modding, providing comprehensive guides for creating mods using BepisLoader and the BepInEx framework.

## 📚 Documentation Overview

This wiki contains documentation for:

- **Getting Started** - Installation guides for mod loaders and using existing mods
- **Creating Mods** - Step-by-step tutorials for developing your own Resonite mods
- **Guides** - Advanced topics including:
  - Configuration management
  - Localization with BepisLocaleLoader
  - Debugging and troubleshooting
- **BepInEx API Reference** - Auto-generated documentation for BepInEx classes and methods

## 🚀 Quick Start

### For Users

Visit the live documentation at [modding.resonite.net](https://modding.resonite.net/) to:

- Learn how to install mod loaders
- Browse and install community mods
- Troubleshoot common issues

### For Developers

Get started creating Resonite mods:

1. Follow the [Installation Guide](/getting-started/installation) to set up BepisLoader
2. Create your first project using the [BepInEx Template](https://github.com/ResoniteModding/BepInEx.Templates)
3. Learn from the [Writing Code](/creating-a-mod/writing-code) guide
4. Publish to [Thunderstore](https://thunderstore.io/c/resonite/)

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm package manager

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server at localhost:4321
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
.
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Custom Astro components
│   ├── content/
│   │   ├── docs/       # Documentation content (MDX files)
│   │   └── config.ts   # Content collection config
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
└── package.json        # Project dependencies
```

## 📝 Contributing

We welcome contributions! Here's how you can help:

### Adding/Updating Documentation

1. Fork this repository
2. Create a new branch for your changes
3. Edit or add MDX files in `src/content/docs/`
4. Test your changes locally with `pnpm dev`
5. Submit a pull request

### Documentation Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Test all code snippets
- Follow the existing file structure
- Add appropriate frontmatter metadata

### Reporting Issues

Found an error or have a suggestion? Please [open an issue](https://github.com/your-repo/issues) with:

- Page URL or file path
- Description of the issue
- Suggested fix (if applicable)

## 🔧 Technologies

- [Astro](https://astro.build) - Static site generator
- [Starlight](https://starlight.astro.build) - Documentation theme
- [MDX](https://mdxjs.com) - Markdown with components
- [Svelte](https://svelte.dev) - Interactive components
- [TypeScript](https://www.typescriptlang.org) - Type safety

## 📄 License

This documentation is licensed under [MIT License](LICENSE).
