exports.index = function(req, res){
  res.render('about', {
    title: 'ReboundJs - Home',
    app: 'home'
  });
};
