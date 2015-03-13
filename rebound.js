/**
* Module dependencies.
*/

// Core Dependencies
  var express         = require('express');
  var http            = require('http');
  var path            = require('path');

  var favicon         = require('serve-favicon');
  var logger          = require('morgan');
  var errorHandler    = require('errorhandler');
  var cookieParser    = require('cookie-parser');
  var bodyParser      = require('body-parser');
  var methodOverride  = require('method-override');
  var compress        = require('compression');

// Routing
  var home          = require('./routes/home');
  var git          = require('./routes/git');

// Static Content Rendering
  var sass            = require('node-sass');
  var hbs             = require('express3-handlebars');
//  var helpers         = require('./src/handlebars');
//  var cons            = require('consolidate');
//  var concat          = require('./src/concat');


// Dev Flag
  var devEnv = (process.env.NODE_ENV)?false:true;

// Init Core
  var app = express();
      app.use(favicon(__dirname + '/public/images/favicon.ico')); // Deliver favicon
      app.use(logger('dev')); // Dev level logging
      app.use(compress());
      app.use(bodyParser.json()); // Parse received json values
      app.use(bodyParser.urlencoded()); // Parse URL encoded values
      app.use(methodOverride()); // enable DELETE and PUT
      app.use(cookieParser('wNDu-dn~+j{nasd9823oi{(2')) // required before session.

// Development Logging
  if (devEnv) {
    app.use(errorHandler());
  }

// Set View Rendering Engine
  app.engine('handlebars', hbs({
    defaultLayout: 'main',
    partialsDir: 'views/shared',
  //  helpers: helpers
  }));
  app.set('view engine', 'handlebars');


// Set Static Content Locations
  app.set('views', path.join(__dirname, 'views'));
  app.use(express.static(path.join(__dirname, 'public')));

  // Page Request Routes
  app.get('/', home.index);
  app.get('/home', home.index);
  app.post('/git/push', git.push);
  app.get('/*', home.index);



// Start Server
  app.set('port', process.env.PORT || 4001);
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
