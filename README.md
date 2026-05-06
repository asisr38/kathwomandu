# Kathwomandu

Next.js App Router site for Kathwomandu, migrated from the original static HTML landing page.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Verification

```bash
pnpm lint
pnpm build
```

The build uses `next/font` for self-hosted Google Fonts, so it needs network access the first time fonts are fetched.

## Deployment

Deploy on Vercel with the default Next.js settings. The project uses pnpm and includes `pnpm-lock.yaml`.
