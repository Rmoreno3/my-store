const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

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

// Middlewares de errores
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
