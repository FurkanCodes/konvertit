## About the Project

STILL WORK IN PROGRESS!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It is a simple conversion platform that uses FFMPEG and WASM to utilize computer's resources to convert videos, images to desired format. 

WARNING:
The performance is dependent on your computers' power.
There might be some bugs while converting.
## BUGS
- The loading bar does not reflect the actual progress, it is because FFMPEG library does not provide loading state currently.
- Sometimes, image conversion fails.

## TODO
- Make it completely Typesafe(as of now, the logic is not typesafe)
- Convert trancoding logic into its own Hook,
- Add mobile responsiveness


## Features

- Light/dark mode toggle
- Video and image conversion



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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
