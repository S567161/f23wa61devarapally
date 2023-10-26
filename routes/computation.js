var express = require('express');
var router = express.Router();
var rand = Math.random();
var imul = Math.imul(rand);
var log = Math.log(rand);
var log10 = Math.log10(rand);
/* get HOME PAGE. */
router.get('/', function(req, res, next) {
  var x = req.query.x;
  if(x!=null){
    rand=x;
  }
  res.render('computation', { title: `Function imul is applied to ${rand} is ${imul}, Function log is applied to ${rand} is ${log}, Function log10 is applied to ${rand} is ${log10}` });
});

module.exports = router;