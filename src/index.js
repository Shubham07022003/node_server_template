const express = require('express');
const{PORT} = require('./config');

const apiRoutes = require('./routes');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

//routes
app.use('/api',apiRoutes);

app.listen(PORT, ()=>{
    console.log(`sucessfully  server created by shubham : ${PORT }`)
});

//this is first file which is executed when we run the server