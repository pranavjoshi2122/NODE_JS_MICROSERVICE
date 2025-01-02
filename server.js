const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { dbConnection } = require('./db.connection');
const userRouter = require('./routes/user.routes');

require("./kafka");
const app = express();
const port = 3000;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
dbConnection();

app.use(express.static('public'));
app.use('/files', express.static('public'));

app.use(bodyParser.json());
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`user service listening at http://localhost:${port}`);
});

