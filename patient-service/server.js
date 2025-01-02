const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use('/files', express.static('public'));

app.use(bodyParser.json());
// app.use('/patient', userRouter);

app.listen(4000, () => {
  console.log(`user service listening at http://localhost:4000`);
});

