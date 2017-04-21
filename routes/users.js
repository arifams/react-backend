var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');

// adding line for username
res.json([{
		id: 1,
		username: "satu"
	}, {
		id: 2,
		username: "dua"
	}]);
});

module.exports = router;