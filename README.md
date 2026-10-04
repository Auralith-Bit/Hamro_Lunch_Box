# Hamro Lunch Box

Local-first restaurant billing, order, delivery, and ingredient inventory app built with React, Vite, and Tailwind CSS.

## Start the app

From the project folder, run:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To create and serve a production build, run `npm run build` followed by `npm run preview`.

If PowerShell blocks `npm.ps1`, use `npm.cmd run dev` or `npm.cmd run build` instead. The app no longer depends on Google Fonts loading over the network.

## Demo accounts

| Role | Username | Password |
|---|---|---|
| Admin | `admin` | `admin123` |
| Reception | `reception` | `reception123` |
| Delivery | `driver1` / `driver2` | `driver123` |

## Included workflows

- Multi-item customer invoices, cash and QR payments, partial payments, balances, invoice search, and individual print views.
- Nepalese rupee display, Nepal-local invoice timestamps, mobile-number checks, optional configurable VAT, and business PAN/VAT profile fields.
- Discounts, split cash/QR/wallet/bank payment recording, A4 invoice printing, order service type and delivery notes.
- Ingredient stock receiving, recipe-based kitchen batches, prepared-product stock, supplier purchases, stock adjustments, wastage, returns, movement history, and low-stock alerts.
- Expense entry, daily/weekly/monthly/custom transaction and stock-usage reports, delivery assignment, manual WhatsApp message handoff, and reminder history.
- Browser-data backup and restore.

## Data and tax limitations

All business records are saved in the current browser's local storage. This is a single-browser demo: records are not synced between staff devices, and demo credentials do not provide server-side security. Download backups regularly. A shared deployment needs an API, database, user authentication, authorization, and automated backups.

VAT is optional and disabled by default. This app does not connect to IRD/CBMS and is not presented as IRD-listed e-billing software. Confirm registration and invoice requirements with an accountant before using it for tax reporting.
# Deploying to Vercel

This is a Vite single-page app. Vercel can detect its build settings automatically; the root `vercel.json` sends app routes back to `index.html` so browser refreshes work.

## Deploy with the Vercel CLI

From the project root:

```sh
npm install
npx vercel login
npx vercel
```

Review the preview URL and test the app. To publish a production deployment, run:

```sh
npx vercel --prod
```

The first CLI deployment will ask you to link this folder to a Vercel project. You can configure a custom domain in that project’s Vercel dashboard.

## Deploy from Git

Push this project to a Git provider, import the repository in Vercel, and keep the detected Vite settings (`npm run build` and `dist`). Vercel will create preview deployments for changes and production deployments from the configured production branch.

## Important data and security limits

This deployment hosts the frontend only. The current app saves records in each browser’s local storage, so records are not shared between devices or staff and can be lost if browser storage is cleared. Demo accounts and role checks are part of the frontend and are not secure authentication. Use sample data for a public deployment; do not enter real customer, staff, or business records until a secured backend, database, and server-side authentication are connected. Vercel hosting alone does not provide those services.
