const express = require('express');
const { ConsoleReporter } = require('jasmine');
const app = express();
const express = require('path');

app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT || 8080);

//PathLocationStrategy
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console working!');