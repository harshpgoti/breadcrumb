const express = require('express')
// cors = require('cors'),
bodyParser = require('body-parser');

const app = express();
app.use(express.json());
// app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./src/routes/breadcrumbRoutes'));

app.listen(5000);