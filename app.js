const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
    // console.log('In add product middleware');
    res.send('<form action = "/product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add product</form>');
    next();             //Allows the request to continue to the next middleware in the line
});

app.post('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    // console.log('In home middleware');
    res.send('<h1> Hello from Express!</h1>');
});

// const server = http.createServer(app);

app.listen(3000);