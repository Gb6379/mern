const express = require('express');
const connectDB = require('./config/db_connection')
const app = express();
const routes = require('./routes')

const PORT = process.env.PORT || 5000

//db connection
connectDB();

//initialize middleware
app.use(express.json({extended: false}))


//routes file that has got the controller routes whthin
app.use(routes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))