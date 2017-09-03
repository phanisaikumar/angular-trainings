var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'+process.argv[2]));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(9999);

console.log("Server is running on 9999");