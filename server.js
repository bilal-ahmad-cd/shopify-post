const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// routers products
const productRouter = require('./routes/product')
app.use('/api/products', productRouter);

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}...`);
})