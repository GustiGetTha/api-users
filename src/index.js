require('dotenv').config();
const PORT = process.env.PORT || 5000;
const experss = require('express');

const app = experss();

// app.method(path, handler);

// use untuk middleware atau general method
// app.use("/", (req, res, next) => {
    //     res.send("Hello World");
    // });
    
    // log setiap request
    // app.use((req, res, next) => {
        //     console.log('log terjadi request ke API ini');
        //     next();
        // })
        
        // app.get("/", (req, res) => {
            //     res.send("GET Method");
            // })
            
            app.post("/post", (req, res) => {
                res.send("POST Method");
            });
            
            app.get("/html", (req, res) => {
                res.send("<h1>H1 HTML</h1>");
            });
            
            app.get("/json", (req, res) => {
                res.json({
        nama: "Jason",
        alamat: "Samarinda"
    });
});

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