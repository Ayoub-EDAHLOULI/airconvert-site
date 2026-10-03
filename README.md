# airconvert-site

The website for AirConvert.

## Scripts

```bash
npm install
npm run dev        # local development server
npm run lint       # ESLint
npm run build      # production build (typechecks as part of the build)
npm start          # run the production build locally
```

## Docker

```bash
docker build -t airconvert-site .
docker run -d --name airconvert-site --restart unless-stopped -p 3000:3000 airconvert-site
```

The image uses Next.js `output: "standalone"` and runs `node server.js` as a non-root user on port 3000.

## Website

https://airconvert.ayoubedahlouli.com

## License

Made by [Ayoub Edahlouli](https://ayoubedahlouli.com).
