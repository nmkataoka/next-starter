This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install nvm, then:

```
nvm install
nvm use
corepack enable
```

Install deps:

```
pnpm i
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Unit tests

```
pnpm test
```

or
```
pnpm test:watch
```


## E2E Tests

```
pnpm run build
pnpm run start
```

In another terminal tab:
```
pnpm exec playwright test
```
