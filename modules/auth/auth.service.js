const { getDB } = require("../../config/db");
const bcrypt = require("bcrypt");
const collectionName = "users";

async function registerUser(data) {
  const db = getDB();
  data.password = await bcrypt.hash(data.password, 10);
  const result = await db.collection(collectionName).insertOne(data);
  return result;
}

async function loginUser(email, password) {
  const db = getDB();
  const user = await db.collection(collectionName).findOne({ email });
  if (!user) return null;
  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;
  return user;
}

module.exports = { registerUser, loginUser };