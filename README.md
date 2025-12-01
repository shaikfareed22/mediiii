This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Important note: this project contains an API route (`src/app/api/predict/route.ts`). Because of that, do NOT build the site as a static-only export (e.g. `next export`), since static exports cannot serve API routes or server functions. Deploy to Vercel (recommended) or another platform that supports Next.js server/API routes so the API continues to work.

## Adding disease data

To add or extend the dataset the app uses to match symptoms, edit `src/data/symptoms.json`. Each entry should be an object with the following shape:

```
{
	"disease": "Example Disease",
	"description": "Short description of the disease.",
	"symptoms": ["symptom1", "symptom2"],
	"precautions": ["Precaution 1", "Precaution 2"],
	"medications": ["Med A", "Med B"],
	"workouts": ["Light walk", "Stretching"],
	"diets": ["Avoid X", "Include Y"]
}
```

Add more entries to the array in `src/data/symptoms.json`. The API does simple token matching, so include common synonyms for better matching (for example: `"headache", "head pain"`).

## Deploying to Vercel (recommended)

Recommended: connect this GitHub repository to Vercel via the Vercel dashboard — this requires no manual tokens and provides the smoothest experience for Next.js apps.

- Go to https://vercel.com/new and import your GitHub repository.
- Vercel will build and deploy on every push to branches you configure (by default `master` or `main`).

If you prefer to deploy from GitHub Actions, you can use a deployment workflow that requires setting repository secrets.

1) Create a Vercel token:

- Sign in to Vercel -> Settings -> Tokens -> Create Token. Copy the token.

2) Find your Vercel Organization ID and Project ID (via the Vercel dashboard or `vercel` CLI). You can also use the Vercel API.

3) In your GitHub repository settings -> Secrets -> Actions, add the following secrets:
- `VERCEL_TOKEN` (the token you created)
- `VERCEL_ORG_ID` (your Vercel organization ID)
- `VERCEL_PROJECT_ID` (your Vercel project ID)

4) With the supplied workflow (`.github/workflows/deploy-vercel.yml`) the site will be deployed on push to `master`.

Note: Alternatively, connect the repo directly in the Vercel UI for a simpler setup — no secrets needed.
