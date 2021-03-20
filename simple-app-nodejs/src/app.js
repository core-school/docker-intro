const express = require('express');
const _ = require('lodash');
const app = express();

const mistery = _.sample(['CORE',"CODE","SCHOOL","https://www.corecode.school"]);
console.log(`This server is running with mistery: ${mistery}`)

app.get('/',(req,res) => res.json({mistery}))


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));