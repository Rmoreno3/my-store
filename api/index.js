const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

// Middleware
app.use(express.json());

// Ruta principal
app.get('/api', (req, res) => {
  res.send('Hello World');
});

// Rutas
routerApi(app);

// Middlewares de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
