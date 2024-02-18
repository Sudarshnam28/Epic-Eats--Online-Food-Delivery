const mongoose = require('mongoose');
const mongoURI = 'mongodb://Vaishnavi28:9014612943@ac-wwiix5g-shard-00-00.nbglr9t.mongodb.net:27017,ac-wwiix5g-shard-00-01.nbglr9t.mongodb.net:27017,ac-wwiix5g-shard-00-02.nbglr9t.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-erf6dg-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const fetched_data = await mongoose.connection.db.collection('food_items');
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection('food_category');
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.food_category = catData;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = mongoDB;

