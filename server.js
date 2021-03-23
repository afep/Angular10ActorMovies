const express = require('express');
const { ConsoleReporter } = require('jasmine');
const app = express();
const express = require('path');

app.use(express.static(__dirname+'/dist'));
const PORT = process.env.PORT || 8080;
app.listen(PORT);

//PathLocationStrategy
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})
app.set("port", PORT);
console.log('Console working!');