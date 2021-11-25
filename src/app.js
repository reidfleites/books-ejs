import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import * as BooksController from './controllers/booksControllers.js';
import * as PersonsController from './controllers/personsController.js';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const __dirname = path.resolve(path.dirname(''));

const staticDirectory = path.join(__dirname, './public');
 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(staticDirectory));
const port = process.env.PORT || 3100;
const mongoConnectString = process.env.MONGO_URI;
mongoose.connect(mongoConnectString);




app.get('/', async (req, res) => {
    const books=await BooksController.getAllBooks();
    const persons=await PersonsController.getAllPersons();
    
    res.render('index', {
        pageTitle: "Tech Bookstore",
        books,
        persons
    });
});



app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});