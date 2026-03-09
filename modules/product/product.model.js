const { ObjectId } = require("mongodb");
const { getDB } = require("../../config/db");
const collectionName = "products";

async function createProduct(data) {
  const db = getDB();
  const result = await db.collection(collectionName).insertOne(data);
  return result;
}

async function getProducts() {
  const db = getDB();
  return db.collection(collectionName).find().toArray();
}

async function getProductById(id) {
  const db = getDB();
  return db.collection(collectionName).findOne({ _id: new ObjectId(id) });
}

async function updateProduct(id, data) {
  const db = getDB();
  return db.collection(collectionName).updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
}

async function deleteProduct(id) {
  const db = getDB();
  return db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};