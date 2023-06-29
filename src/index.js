const express = require('express');
const productRoutes = require('./router/productRoutes');
const orderRoutes = require('./router/orderRoutes');
const paymentRoutes = require('./router/paymentRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);

app.get('/', (req, res) => {
  res.send('<h2>Hello world </h2>');
});

app.listen(PORT, () => {
  console.log('API is listening on port', PORT);
});



// const express = require('express');
// const ProductRouter =require('./router/productRouter');
// const orderRouter = require('./router/orderRouter');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());
// app.use('/products',ProductRouter);
// app.use('./orders',orderRouter);

// app.get('/',(req,res)=>{
//     res.send('<h2>Hello world </h2>');
// })

// app.listen(PORT,()=>{
//     console.log('API is lisening on port',PORT);
// })