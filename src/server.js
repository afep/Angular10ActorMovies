const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/dist/angular-movies-search'));
app.get('/',function(req,res){
    res.sendFile(path.join('/dist/angular-movies-search/index.html'));
});

app.listen(process.env.PORT || 3000);