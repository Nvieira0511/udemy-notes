var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send("hello from todos route");
});

module.exports = router;