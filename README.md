# Hamro Lunch Box

Restaurant ordering and operations app arranged as a small full-stack monorepo. The frontend is React + Vite, the API is Express, and MySQL schema/configuration live in `database/` and `backend/`.

## Project structure

```text
frontend/                 React application and Vite configuration
  src/                    Pages, components, and frontend data
backend/                  Express API
  src/config/              MySQL connection pool
  src/routes/              API route handlers
database/                  MySQL schema and future migrations
```

## Setup

Install workspace dependencies from the project root:

```powershell
npm install
```

Create the local MySQL database using `database/schema.sql`, then copy `backend/.env.example` to `backend/.env` and set the local database credentials. Start the API and frontend in separate terminals:

```powershell
npm run dev:backend
npm run dev
```

The API listens on `http://localhost:3000`; `GET /api/health` checks the MySQL connection. The frontend runs on Vite's usual `http://localhost:5173` address. Production frontend builds use `npm run build` and produce `frontend/dist`.

## Current data behavior

The existing frontend still stores business data in browser local storage. The backend and relational schema are the foundation for moving that data behind authenticated API endpoints; the UI is not yet connected to MySQL. Demo credentials remain frontend-only and are not suitable for a public deployment. Export backups before clearing browser data.

## Demo accounts

| Role | Username | Password |
|---|---|---|
| Admin | `admin` | `admin123` |
| Reception | `reception` | `reception123` |
| Delivery | `driver1` / `driver2` | `driver123` |

VAT is optional and disabled by default. The app does not connect to IRD/CBMS and is not presented as IRD-listed e-billing software.
