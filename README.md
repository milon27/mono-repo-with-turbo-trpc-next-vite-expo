# Mono repo with turbo trpc next vite expo

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `backend`: an [TRPC](https://trpc.io/) app with express adapter
- `web`: a [Next.js](https://nextjs.org/) app
- `@repo/ui`: React component library shared by next js, vite applications built with shadcn-ui and tailwind css
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/trpc`: a trpc package which contains all router and used in both next js for typecast and backend for setup the router.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

## Useful Links

Learn more about this mono repo on this notion link:

- [Notion Doc](https://m27lab.notion.site/Turbo-Repo-b21af4b3e67845b084ac1dec906533ac)

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
