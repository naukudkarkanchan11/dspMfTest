const express = require('express');
const app = express();

let middleware = require('./middleware');
let root = require('./root');
let userRoutes = require('./routes/userRoute');
let adminRoutes = require('./routes/adminRoute');

app.use(middleware);
app.use ('/', root);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
 
app.listen(3000);