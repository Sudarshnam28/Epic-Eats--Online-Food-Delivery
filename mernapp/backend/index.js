const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');
app.use(cors());
const mongoDB=require("./db");
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

})