exports.index = function(req, res){
  res.render('shared/loading', {
    title: 'ReboundJs - Home',
    app: 'home'
  });
};
