const express = require('express');
const path = require('path');

const app = express();

/*app.use(express.static(__dirname+'/../../dist/angular-movies-search'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/../../dist/angular-movies-search/index.html'));
});*/

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  });

app.listen(process.env.PORT || 8080);