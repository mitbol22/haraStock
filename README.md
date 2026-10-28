# haraStock

Stock, sales, forecasts and supplier orders for small shops, in one place.
Built with [Next.js](https://nextjs.org) (App Router), React, TypeScript and Tailwind CSS.

> Status: UI only. All pages use hard-coded sample data — the database is not connected yet.

## Getting started

```bash
npm install                  # 1. install packages (first time only)
cp .env.example .env.local   # 2. create your env file, then fill in DATABASE_URL
npm run dev                  # 3. start the app
```

Open [http://localhost:3000](http://localhost:3000). Pages reload automatically when you save a file.

## Pages

Each folder inside `src/app/` is one URL. The `page.tsx` inside it is what shows on screen.

| URL          | File                         | Who uses it | What it shows                                   |
| ------------ | ---------------------------- | ----------- | ----------------------------------------------- |
| `/`          | `src/app/page.tsx`           | Everyone    | Sign in / Register                              |
| `/dashboard` | `src/app/dashboard/page.tsx` | Manager     | Summary cards, sales chart, items needing action |
| `/stock`     | `src/app/stock/page.tsx`     | Staff       | Stock table + record received stock             |
| `/supplier`  | `src/app/supplier/page.tsx`  | Supplier    | Partner shop stock, restock requests, promos    |

Other files:

- `src/app/layout.tsx` — wraps every page (fonts, `<html>`, `<body>`, browser tab title)
- `src/app/globals.css` — global styles (Tailwind is imported here)
- `public/` — images/icons served as-is (e.g. `/next.svg`)

## Environment variables

- `.env.example` — template, **committed** to git. Lists every variable with fake values.
- `.env.local` — your real values, **not committed** (ignored by `.gitignore`).

| Variable       | Used for                                   |
| -------------- | ------------------------------------------ |
| `DATABASE_URL` | Connection string to the database (server only) |

Only variables starting with `NEXT_PUBLIC_` are visible in the browser, so never put secrets in one.
Restart `npm run dev` after changing `.env.local`.

## Scripts

| Command         | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Build for production             |
| `npm run start` | Run the production build         |
| `npm run lint`  | Check the code for common issues |
