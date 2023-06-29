const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct } = require('../database/products');

router.get('/', async (req, res) => {
  const products = await getAllProducts();
  res.send({ status: 'OK', data: products });
});

router.get('/:productId', async (req, res) => {
  try {
    const product = await getProduct(req.params.productId);

    if (!product) {
      res.status(404).send({ status: 'FAILED', error: 'Product not found' });
      return;
    }

    res.send({ status: 'OK', data: product });
  } catch (e) {
    res.status(401).send({ status: 'FAILED', error: e.message });
  }
});

module.exports = router;



// const express =require('express');
// const router = express.Router();
// const {getAllProducts,getProduct} = require('../database/products')

// router.get('/', async (req,res) =>{
//     const products = await getAllProducts();
//     console.log(products);
//     res.send({status:'ok',data:products});
// });

// router.get('/:productId', async (req,res)=>{
//     try {
//         const Product = await getProduct(req.params.productId)
    
//         if(!Product){
//             res.status(404).send({status:'Failed' , error : 'Product not found'})
//             return;
//         }

//         res.send({status:'ok',data: Product});


//     } catch (e) {
//         res.status(401).send({status:'FAILED',error:e.message});
//     }
// })

// module.exports = router;