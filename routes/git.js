
/*
 * On git events
 */

exports.push = function(req, res){
  var data = req.body;
  require('../bin/update');
  res.json({status: true});
};
