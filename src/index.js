require('dotenv').config();
const PORT = process.env.PORT || 5000;
const experss = require('express');

const app = experss();

//=================================
const middlewareLogRequest = require('./middlewares/logs.js');
app.use(middlewareLogRequest);
app.use(experss.json());

const usersRoute = require('./routes/users.js');
app.use('/users', usersRoute);

//=================================

app.listen(PORT, () => {
    console.log(`Server berjalan di localhost:${PORT}`);
});