# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality
TODO: Explain what each script does in the root-level `package.json` file:

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

- `start`: Starts the server.
- `develop`: Starts both the server and client.
- `install`: Installs dependencies for both the server and client.
- `seed`: Seeds the server (probably the db).
- `build`: Builds the client.


## Client-side Functionality
TODO: Explain what this script does in the client-side `client/package.json` file:

```json
"proxy": "http://localhost:3001",
```

This is where the server communicates with the client.

## Server-side Functionality
TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

If it’s the production environment, use the built client in `client/build` folder.

TODO: Add a comment describing the functionality of this route in `server/server.js`:

```js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```

When a user visits the homepage, they see this index.html file.
