# MyPortfolio

A modern portfolio website built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/).

## Features
- ⚡️ Fast development with Vite
- ⚛️ React for UI
- 🛡️ TypeScript for type safety
- 🌐 Ready for deployment on Netlify

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash

# Install dependencies
 npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view your app.

### Building for Production

```bash
npm run build
# or
yarn build
```

The output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## Deploying to Netlify

1. Push your code to a GitHub repository.
2. Connect your repository to Netlify.
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Deploy!

**Note:** Ensure all files (especially `src/main.tsx`) are committed and pushed to your repository. Netlify is case-sensitive and requires all entry files to be present.

---

## Project Structure

```
MyPortfolio/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── assets/
│   └── components/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## License

This project is open source and available under the [MIT License](LICENSE). 