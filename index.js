const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');

const User = require('./models/user')
const Product = require('./models/product');
const Vendor = require('./models/vendor');

app.use(express.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


// use express router
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    // seedProducts();
    // addProducts()
    
    console.log(`Server is running on port: ${port}`);
});

const seedProducts = () => {
    Product.create({
        name: 'The Times of India',
        type: 'Newspaper',
        description: 'The Times of India Newspaper',
        rate: 5
    },(error) => {
        console.log(error)
    })
    Product.create({
        name: 'The Hindu',
        type: 'Newspaper',
        description: 'The Hindu Newspaper',
        rate: 5
    },(error) => {
        console.log(error)
    })
    Product.create({
        name: 'Autocar',
        type: 'Magazine',
        description: 'The Autocar Magazine',
        rate: 250
    },(error) => {
        console.log(error)
    })
}

const addProducts = () => {

    Product.find({},(err,products) => {
        if(err) console.log(err)

        const prod = [];

        products.forEach(element => {
            prod.push(element)
        });

        Vendor.findOneAndUpdate({email:'unitedps@gmail.com'},{products: prod},{},(err, resp) => {
            if(err) console.log(err)
        })
    })
}