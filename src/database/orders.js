const getDB = require('./db');

const getOrder = async (ref) => {
  return await getDB().orders.findOne({ ref });
};

const createOrder = async (order) => {
  const result = await getDB().orders.insertOne(order);
  return { ...order, _id: result.insertedId };
};

module.exports = {
  getOrder,
  createOrder,
};


// const db =require('./db');

// //db.orders
// const getOrder = async (ref) =>{
//     return await db.orders.findOne({ref})
// }

// const createOrder = async (order)=>{
//    const result = await db.orders.insertOne(order);
//    return {...order, _id: result.insertedId };
// };

// module.exports={
//     getOrder,
//     createOrder,
// };