## BackEnd Commands 
| Command  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| npm run database| Excecute all commands for deploy database |
| npm start| Run the api |

## BackEnd .Env File 

>These are the variables that backend need

| Variable Name  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| PORT | Port number which back end will be deployed
| JWT_SECRET | The salt necessary for the token|
|NODE_ENV| The currently enviroment|
|PRO_DB_USER| Production user database|
|PRO_DB_HOST| Production host database|
|PRO_DB_PASSWORD| Production password database|
|PRO_DB_PORT| Production port database|
|PRO_DB_NAME| Production name database|
|DEV_DB_USER| Development user database|
|DEV_DB_HOST| Development host database|
|DEV_DB_PASSWORD| development password database|
|DEV_DB_PORT| development port database|
|DEV_DB_NAME| development name database|

------------------------------------------------------------------------------------------
## frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

