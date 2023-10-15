const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Rutas
routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
