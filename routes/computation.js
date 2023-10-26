var express = require('express');
var router = express.Router();

/* get HOME PAGE. */
router.get('/', function(req, res, next) {
  var x = req.query.x;
  
  
  if(x!=null){
    var rand=x;
  }
  else{
    var rand = Math.floor(Math.random()*100);
  }
  
  var imul = Math.imul(rand);
  var log = Math.log(rand);
  var log10 = Math.log10(rand);
  res.render('computation', { 
    title: `Function imul is applied to ${rand} is ${imul}, 
  Function log is applied to ${rand} is ${log}, 
  Function log10 is applied to ${rand} is ${log10}` });
});

module.exports = router;