const express = require('express');
const routes = require('./routes/index');
const app = express();

app.use('/', routes);
app.use('/students', routes);
app.use('/studenst/:major', routes);

app.listen(1245);

export default app;