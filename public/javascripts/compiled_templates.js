define(['Handlebars'], function(Handlebars) {

this["Collegia"] = this["Collegia"] || {};
this["Collegia"]["Views"] = this["Collegia"]["Views"] || {};

Handlebars.registerPartial("footer", this["Collegia"]["Views"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer>\n  <div class=\"footer-wrapper\">\n  </div>\n</footer>\n";
  }));

Handlebars.registerPartial("head", this["Collegia"]["Views"]["head"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<meta charset=\"utf-8\" />\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n<link rel=\"stylesheet\" href=\"/fonts/font-awesome-4.0.3/css/font-awesome.min.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/stylesheets/main.css\">\n\n<title>Rebound Js</title>\n\n<meta name=\"description\" content=\"Automatic data binding for Backbone using HTMLBars\" />\n\n<meta name=\"HandheldFriendly\" content=\"True\" />\n<meta name=\"MobileOptimized\" content=\"320\" />\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"white\">\n<meta name=\"viewport\" content=\"initial-scale=1,user-scalable=no,maximum-scale=1,minimal-ui\">\n\n<link rel=\"shortcut icon\" href=\"/images/favicon.ico\">\n<link rel=\"icon\" href=\"/images/favicon.ico\" type=\"image/x-icon\">\n\n\n\n<!-- <script>\n  // This is called with the results from from FB.getLoginStatus().\n  function statusChangeCallback(response) {\n    console.log('statusChangeCallback');\n    console.log(response);\n    // The response object is returned with a status field that lets the\n    // app know the current login status of the person.\n    // Full docs on the response object can be found in the documentation\n    // for FB.getLoginStatus().\n    if (response.status === 'connected') {\n      // Logged into your app and Facebook.\n      testAPI();\n    } else if (response.status === 'not_authorized') {\n      // The person is logged into Facebook, but not your app.\n      document.getElementById('status').innerHTML = 'Please log ' +\n        'into this app.';\n    } else {\n      // The person is not logged into Facebook, so we're not sure if\n      // they are logged into this app or not.\n      document.getElementById('status').innerHTML = 'Please log ' +\n        'into Facebook.';\n    }\n  }\n\n  // This function is called when someone finishes with the Login\n  // Button.  See the onlogin handler attached to it in the sample\n  // code below.\n  function checkLoginState() {\n    FB.getLoginStatus(function(response) {\n      statusChangeCallback(response);\n    });\n  }\n\n  window.fbAsyncInit = function() {\n  FB.init({\n    appId      : '{your-app-id}',\n    cookie     : true,  // enable cookies to allow the server to access\n                        // the session\n    xfbml      : true,  // parse social plugins on this page\n    version    : 'v2.0' // use version 2.0\n  });\n\n  // Now that we've initialized the JavaScript SDK, we call\n  // FB.getLoginStatus().  This function gets the state of the\n  // person visiting this page and can return one of three states to\n  // the callback you provide.  They can be:\n  //\n  // 1. Logged into your app ('connected')\n  // 2. Logged into Facebook, but not your app ('not_authorized')\n  // 3. Not logged into Facebook and can't tell if they are logged into\n  //    your app or not.\n  //\n  // These three cases are handled in the callback function.\n\n  FB.getLoginStatus(function(response) {\n    statusChangeCallback(response);\n  });\n\n  };\n\n  // Load the SDK asynchronously\n  (function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = \"//connect.facebook.net/en_US/sdk.js\";\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'facebook-jssdk'));\n\n  // Here we run a very simple test of the Graph API after login is\n  // successful.  See statusChangeCallback() for when this call is made.\n  function testAPI() {\n    console.log('Welcome!  Fetching your information.... ');\n    FB.api('/me', function(response) {\n      console.log('Successful login for: ' + response.name);\n      document.getElementById('status').innerHTML =\n        'Thanks for logging in, ' + response.name + '!';\n    });\n  }\n</script> -->\n";
  return buffer;
  }));

Handlebars.registerPartial("modules/ghost-user", this["Collegia"]["Views"]["modules/ghost-user"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB3aWR0aD0iNzQ0LjA5NDQ4ODE5IiBoZWlnaHQ9IjEwNTIuMzYyMjA0NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDx0aXRsZT5HcmV5IHNpbGhvdWV0dGUgb2YgcGVyc29uPC90aXRsZT4KCiA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhNyI+aW1hZ2Uvc3ZnK3htbEdob3N0IFByb2ZpbGU8L21ldGFkYXRhPgogPGc+CiAgPHRpdGxlPlVzZXIgR2hvc3Q8L3RpdGxlPgogIDxnIG9wYWNpdHk9IjAuOTUiIGlkPSJ1c2VyIj4KICAgPHBhdGggZmlsbD0iI2JmYmZiZiIgaWQ9InBhdGgyMzk2IiBkPSJtNDYuNDI4NTcsNzc4LjA0NjYzMWMwLC0xMC42NTIzNDQgMTcuNzM4NjY3LC0xMDIuMjAyNzU5IDIwLjc0NTE5NywtMTA3LjA2NzQ0NGMxLjA3MTE5LC0xLjczMzIxNSAzLjczMTk1NiwtMTIuOTYwMDIyIDUuOTEyNzY2LC0yNC45NDg0MjVjNS4wODcyOCwtMjcuOTY1NDU0IDE0LjQ2NjU5MSwtNTguMDEzMTIzIDE5Ljk4NzQxOSwtNjQuMDMyMTA0YzIuMzczMzUyLC0yLjU4NzUyNCAyMy42NzA4NzYsLTguNzM4MDk4IDQ3LjMyNzg3MywtMTMuNjY4MDNjNzIuNjc0Njk4LC0xNS4xNDQ3NzUgMTA0LjcwNTIxNSwtMjYuODEwNDI1IDEyMC41MTg5ODIsLTQzLjg5MzMxMWM3LjUzNzUwNiwtOC4xNDI0NTYgMTguOTM3Mzc4LC0xNi42Mjg2NjIgMjUuMzMzMDM4LC0xOC44NTgxODVjMTAuMTYxMzc3LC0zLjU0MjI2NyAxMS42Mjg0NzksLTUuNzk1OTkgMTEuNjI4NDc5LC0xNy44NjM2NDdjMCwtNy41OTU0OSAtMi4zMjE2NTUsLTE3LjE0MTIzNSAtNS4xNTkxOCwtMjEuMjEyODNjLTIuODM3NTI0LC00LjA3MTU5NCAtNi40MDc1MzIsLTE1LjAwMjgwOCAtNy45MzMzNSwtMjQuMjkxNTk1Yy0xLjUyNTg0OCwtOS4yODg3NTcgLTUuOTU5Njg2LC0xOS45MTAwMDQgLTkuODUzMDI3LC0yMy42MDI2OTJjLTMuODkzMzExLC0zLjY5MjcxOSAtNy4wNzg3OTYsLTguNDA1NDg3IC03LjA3ODc5NiwtMTAuNDcyODM5YzAsLTIuMDY3MzUyIC0zLjc5OTkyNywtOC44OTg0MzggLTguNDQ0MzM2LC0xNS4xODAxNDVjLTcuMjAzMDE4LC05Ljc0MjQ2MiAtOC41MTM0NzQsLTE2LjQ3ODM5NCAtOC45MTQ3NDksLTQ1LjgyMjgxNWMtMC43NzUyMjMsLTU2LjY5MzE0NiA0LjA4NDYyNSwtODIuNjM1NzQyIDE5Ljk2MDg5MiwtMTA2LjU1NDM1MmMyMi40MTcxNzUsLTMzLjc3MjkwMyA2NS43MDgyNTIsLTU3LjE2NDUyIDEwNS45OTQ1MDcsLTU3LjI3MjM4NWMxNS43NDE3NiwtMC4wNDIxNDUgMjIuMzU1ODY1LDEuNzgzMDA1IDI4Ljk2NjEyNSw3Ljk5Mjk5NmM0Ljk5MTY2OSw0LjY4OTQzOCAxNi43MjI1MzQsOS4zMzY5NzUgMjguMTExOTA4LDExLjEzNzM3NWMyMi42NTk5MTIsMy41ODIwNjIgNDMuMDM5NDU5LDE3Ljk3MjE5OCA1Mi45MzQ0NzksMzcuMzc3NDcyYzQuOTc0NjcsOS43NTU4OSA2LjU2MzQxNiwyMi4xMjA2MjEgNi41Njc4NDEsNTEuMTE1OTgyYzAuMDAzMjY1LDIxLjQ0MzA4NSAxLjY1NDc1NSwzOS4yNjYyNjYgMy43NTg4NSw0MC41NjY2ODFjMTAuMjA1NDc1LDYuMzA3MzQzIDAuNjg0OTY3LDQ5Ljg4NjIgLTE1LjMyNTIyNiw3MC4xNDk0NzVjLTYuMDIwMzU1LDcuNjE5NTk4IC0xMC45ODMxNTQsMTYuOTA4MzU2IC0xMS4wMjg0NzMsMjAuNjQxNjkzYy0wLjA0NTM0OSwzLjczMzM2OCAtMy40MjMwNjUsMTQuMTUwMDI0IC03LjUwNjA3MywyMy4xNDgxNjNjLTEzLjU2MDI3MiwyOS44ODQxNTUgLTguODk0MDQzLDU5LjQ2MTAyOSAxMC40MjU0NzYsNjYuMDgxNTEyYzMuNjAwMDY3LDEuMjMzNjczIDEyLjQ1NjY2NSw5Ljg0MzY1OCAxOS42ODEyNDQsMTkuMTMzMjdjNy4yMjQ2MDksOS4yODk2NzMgMTcuMzU3ODQ5LDE3Ljg0NDcyNyAyMi41MTgyOCwxOS4wMTExNjljNS4xNjA0LDEuMTY2NTY1IDI4LjMwMjc5NSw5LjU1NTg0NyA1MS40Mjc0MjksMTguNjQzMDA1YzIzLjEyNDY5NSw5LjA4NzA5NyA0My4xNzE5OTcsMTYuNTIyMDM0IDQ0LjU0OTYyMiwxNi41MjIwMzRjMS4zNzc2MjUsMCA5LjgyMDc0LDQuNjQ0MzQ4IDE4Ljc2MjUxMiwxMC4zMjA4NjJjMTUuOTc5NTUzLDEwLjE0NDIyNiAyNC4xMjI5MjUsMjMuNjg1MDU5IDI0LjEyMjkyNSw0MC4xMTE2MzNjMCw0LjQxNjAxNiAzLjQ5MjM3MSwxNC43MTk0MjEgNy43NjA4MDMsMjIuODk2NDg0YzYuODY5MDgsMTMuMTU5MTggMTEuNTQ0NDM0LDM4LjM5NDgzNiAyMS4wMDY3MTQsMTEzLjM4NDc2NmwyLjAxMjYzNCwxNS45NTA0MzlsLTMxOS4zODY0MTQsMGwtMzE5LjM4NjM3MiwwbDAsLTkuNDQ0MjE0eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+";
  }));

Handlebars.registerPartial("modules/logo", this["Collegia"]["Views"]["modules/logo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "data:image/png;base64,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";
  }));

Handlebars.registerPartial("modules/user-card", this["Collegia"]["Views"]["modules/user-card"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  {@math key=\"{$idx}\" method=\"mod\" operand=\"12\"}\n    {@eq value=0}\n      <div class=\"users-list\">\n    {/eq}\n  {/math}\n\n  {@math key=\"{$idx}\" method=\"mod\" operand=\"6\"}\n    {@eq value=0}\n      <div class=\"six-users\">\n    {/eq}\n  {/math}\n\n  {@math key=\"{$idx}\" method=\"mod\" operand=\"12\"}\n    {@eq value=0}\n      <div class=\"four-users\">\n    {/eq}\n    {@eq value=8}\n      <div class=\"four-users\">\n    {/eq}\n  {/math}\n\n  {@math key=\"{$idx}\" method=\"mod\" operand=\"2\"}\n    {@eq value=0}\n      <div class=\"two-users\">\n    {/eq}\n  {/math}\n\n  <a href=\"/profile/";
  if (helper = helpers.uid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"user-card\">\n    <img src=\"";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <h3 class=\"user-name small-text sans-serif\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p class=\"user-school x-small-text dark-text\">";
  if (helper = helpers.school) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.school); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p class=\"user-goal serif\"><span>$";
  if (helper = helpers.raised) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.raised); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> of $";
  if (helper = helpers.goal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.goal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p class=\"user-tagline x-small-text serif\">\"";
  if (helper = helpers.tagline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tagline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"</p>\n    <div class=\"user-bar\"><span style=\"width:";
  if (helper = helpers.percent) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percent); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span></div>\n  </a>\n\n  {@math key=\"{$idx}\" method=\"mod\" operand=\"2\"}\n    {@eq value=1}\n      </div>\n    {/eq}\n  {/math}\n\n  {@math key=\"{$idx}\" method=\"mod\" operand=\"12\"}\n    {@eq value=3}\n      </div>\n    {/eq}\n    {@eq value=11}\n      </div>\n    {/eq}\n  {/math}\n  {@math key=\"{$idx}\" method=\"mod\" operand=\"6\"}\n    {@eq value=5}\n      </div>\n    {/eq}\n  {/math}\n  {! Close users-list !}\n  {@math key=\"{$idx}\" method=\"mod\" operand=\"12\"}\n    {@eq value=11}\n      </div>\n    {/eq}\n  {/math}\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.users), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));

Handlebars.registerPartial("nav", this["Collegia"]["Views"]["nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav>\n  <ul class=\"nav-content\">\n    <li>\n      <a href=\"/\" class=\"menu-item menu-logo\">\n        <img src=\"/images/rebound.svg\">\n      </a>\n    </li>\n  </ul>\n</nav>\n";
  }));

this["Collegia"]["Views"]["404"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Oops! We couldn't find the page you're looking for!\n";
  });

this["Collegia"]["Views"]["about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["Collegia"]["Views"]["discover"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n Discover!\n";
  });

this["Collegia"]["Views"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<section class=\"banner\">\n  <div class=\"wrapper\">\n    <img src=\"";
  stack1 = self.invokePartial(partials['modules/logo'], 'modules/logo', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"logo\" alt=\"Collegia Logo\">\n    <h1 class=\"title\">Collegia</h1>\n    <h2 class=\"sub-title large-header\">Let's end student debt together</h2>\n    <form action=\"/\" id=\"email-signup\">\n      <input type=\"email\" placeholder=\"Enter your email here\">\n      <input type=\"submit\" value=\"Keep me informed!\">\n    </form>\n  </div>\n</section>\n\n<section class=\"how-it-works\">\n  <div class=\"wrapper\">\n    <h3 class=\"sub-title\">The Collegia Movement</h3>\n    <ol>\n      <li class=\"step\">\n        <span class=\"number large-header\">1</span>\n        <h4>Choose a Student</h4>\n        <p>Students and recent graduates sign up and set a fundraising goal for their campaign. Their profiles are showcased on our site to browse.</p>\n      </li>\n      <li class=\"step\">\n        <span class=\"number large-header\">2</span>\n        <h4>Make a Contribution</h4>\n        <p>Give your contribution directly to a student, or describe the type of recipients you want to support, and we'll make sure the funds get to them.</p>\n      </li>\n      <li class=\"step\">\n        <span class=\"number large-header\">3</span>\n        <h4>Kickstart A Future</h4>\n        <p>When the student meets their goal, or their campaign ends, funds from  students' accounts are paid directly to their loan or college.</p>\n      </li>\n    </ol>\n  </div>\n</section>\n\n<section class=\"users-youre-helping\">\n  <div class=\"wrapper\">\n    <h3 class=\"sub-title\">Students you're helping</h3>\n      ";
  stack1 = self.invokePartial(partials['modules/user-card'], 'modules/user-card', (depth0 && depth0.pageData), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <a href=\"/discover\" class=\"button light\">View more students</a>\n  </div>\n</section>\n\n<section class=\"faces-of-debt\">\n  <div class=\"wrapper\">\n    <h3 class=\"sub-title\">The Faces of Student Debt</h3>\n    <ul class=\"story-viewer\">\n      <li class=\"story active\">\n        <img src=\"/images/splash/stories/victoria.png\" alt=\"Picture of Victoria\">\n        <blockquote>\"Graduating from nursing school was my dream. Now that I am a nurse, I'm able to give back to the community. Paying off my student loans would allow me to restart my life debt-free.\"</blockquote>\n        <p> &mdash; Victoria, Bachelor of Science in Nursing</p>\n      </li>\n      <li class=\"story\">\n        <img src=\"/images/splash/stories/victoria.png\" alt=\"Picture of Victoria\">\n        <blockquote>\"Graduating from nursing school was my dream. Now that I am a nurse, I'm able to give back to the community. Paying off my student loans would allow me to restart my life debt-free.\"</blockquote>\n        <p> &mdash; Victoria, Bachelor of Science in Nursing</p>\n      </li>\n      <li class=\"story\">\n        <img src=\"/images/splash/stories/victoria.png\" alt=\"Picture of Victoria\">\n        <blockquote>\"Graduating from nursing school was my dream. Now that I am a nurse, I'm able to give back to the community. Paying off my student loans would allow me to restart my life debt-free.\"</blockquote>\n        <p> &mdash; Victoria, Bachelor of Science in Nursing</p>\n      </li>\n      <li class=\"story\">\n        <img src=\"/images/splash/stories/victoria.png\" alt=\"Picture of Victoria\">\n        <blockquote>\"Graduating from nursing school was my dream. Now that I am a nurse, I'm able to give back to the community. Paying off my student loans would allow me to restart my life debt-free.\"</blockquote>\n        <p> &mdash; Victoria, Bachelor of Science in Nursing</p>\n      </li>\n      <li class=\"story\">\n        <img src=\"/images/splash/stories/victoria.png\" alt=\"Picture of Victoria\">\n        <blockquote>\"Graduating from nursing school was my dream. Now that I am a nurse, I'm able to give back to the community. Paying off my student loans would allow me to restart my life debt-free.\"</blockquote>\n        <p> &mdash; Victoria, Bachelor of Science in Nursing</p>\n      </li>\n    </ul>\n    <ul class=\"story-selector\">\n      <li><input type=\"radio\" name=\"stories\" id=\"story-1\" checked><label class=\"story-button\" for=\"story-1\"></label></li>\n      <li><input type=\"radio\" name=\"stories\" id=\"story-2\"><label class=\"story-button\" for=\"story-2\"></label></li>\n      <li><input type=\"radio\" name=\"stories\" id=\"story-3\"><label class=\"story-button\" for=\"story-3\"></label></li>\n      <li><input type=\"radio\" name=\"stories\" id=\"story-4\"><label class=\"story-button\" for=\"story-4\"></label></li>\n      <li><input type=\"radio\" name=\"stories\" id=\"story-5\"><label class=\"story-button\" for=\"story-5\"></label></li>\n    </ul>\n  </div>\n</section>\n";
  return buffer;
  });

this["Collegia"]["Views"]["layouts/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!DOCTYPE html>\n<html class=\"no-js\">\n  <head>\n    ";
  stack1 = self.invokePartial(partials.head, 'head', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </head>\n\n  <body id=\"";
  if (helper = helpers.app) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.app); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n    ";
  stack1 = self.invokePartial(partials.nav, 'nav', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"main\">\n      <div class=\"wrapper\">\n\n          ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      </div>\n    </div>\n\n    ";
  stack1 = self.invokePartial(partials.footer, 'footer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  </body>\n</html>\n";
  return buffer;
  });

this["Collegia"]["Views"]["profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n\n<section class=\"edit-campaign\" class=\"placeholder\">\n  <div class=\"edit-campaign-container\">\n\n    <h3 class=\"profile-edit-title\">\n      <b>Step 1:</b> Campaign Creation\n    </h3>\n\n    <div class=\"edit-campaign-form\">\n      <span class=\"prompt\">I want to raise: &nbsp;&nbsp; $</span>\n      <label for=\"profile-campaign-amount\" class=\"placeholder edit-campaign-amount\">\n        <input type=\"text\" id=\"profile-campaign-amount\" name=\"campaignAmount\" value=\"";
  if (helper = helpers.campaignAmount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.campaignAmount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n        <span>Enter amount here</span>\n      </label>\n      <span class=\"prompt\">in</span>\n      <label for=\"profile-campaign-months\" class=\"placeholder edit-campaign-months\">\n        <input type=\"text\" id=\"profile-campaign-months\" name=\"campaignMonths\" value=\"";
  if (helper = helpers.campaignMonths) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.campaignMonths); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n        <span>months</span>\n      </label>\n      <label for=\"profile-campaign-years\" class=\"placeholder edit-campaign-years\">\n        <input type=\"text\" id=\"profile-campaign-years\" name=\"campaignYears\" value=\"";
  if (helper = helpers.campaignYears) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.campaignYears); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n        <span>years</span>\n      </label>\n    </div>\n  </div>\n</section>\n\n<div class=\"profile-container\">\n\n  <i class=\"profile-banner\" style=\"\n    background-image:url(";
  if (helper = helpers.banner) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.banner); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ");\n    background-image:url(";
  if (helper = helpers.banner) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.banner); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "),url(/images/users/banner/ghost.png);\n    \">\n\n    <h3 class=\"profile-edit-title\">\n      <b>Step 2:</b> Profile Page\n    </h3>\n\n    <i class=\"edit-icon fa fa-pencil\"></i>\n    <form enctype=\"multipart/form-data\" method=\"post\" class=\"user-banner-form\" action=\"/user/banner/update\">\n      <input type=\"file\" name=\"image\" accept=\"image/*\">\n    </form>\n    <img src=\"";
  if (helper = helpers.banner) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.banner); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Banner\">\n\n    <button class=\"fa fa-camera\">Click or drag-and-drop to upload profile/cover photo</button>\n\n  </i>\n\n  <i class=\"profile-image\" style=\"\n    background-image:url(";
  if (helper = helpers.largeImage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.largeImage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ");\n    background-image:url(";
  if (helper = helpers.largeImage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.largeImage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "),url(";
  stack1 = self.invokePartial(partials['modules/ghost-user'], 'modules/ghost-user', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\n    \">\n    <i class=\"edit-icon fa fa-pencil\"></i>\n    <form enctype=\"multipart/form-data\" method=\"post\" class=\"user-image-form\" action=\"/user/image/update\">\n      <input type=\"file\" name=\"image\" accept=\"image/*\">\n    </form>\n    <img src=\"";
  if (helper = helpers.largeImage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.largeImage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Profile Image\">\n  </i>\n\n  <h1 class=\"name-headline\">";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n  <section class=\"profile-content\">\n    <h5 class=\"sans-serif \">Basic Info</h5>\n\n      <label for=\"profile-user-first-name\" class=\"placeholder first-third\">\n        <input type=\"text\" id=\"profile-user-first-name\" name=\"firstName\" value=\"";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n        <span class=\"lock\">First Name</span>\n      </label>\n      <label for=\"profile-user-middle-name\" class=\"placeholder middle-third\">\n        <input type=\"text\" id=\"profile-user-middle-name\" name=\"middleName\" value=\"";
  if (helper = helpers.middleName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.middleName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n        <span class=\"lock\">Middle Name</span>\n      </label>\n      <label for=\"profile-user-last-name\" class=\"placeholder last-third\">\n        <input type=\"text\" id=\"profile-user-last-name\" name=\"lastName\" value=\"";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n        <span class=\"lock\">Last Name</span>\n      </label>\n\n      <label for=\"profile-user-tagline\" class=\"placeholder\">\n        <span class=\"tip x-small-text\">A tweet-sized autobiography to showcase who you are. Keep it short and sweet.</span>\n        <input type=\"text\" id=\"profile-user-tagline\" name=\"tagline\" value=\"";
  if (helper = helpers.tagline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tagline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\" maxlength=\"140\">\n        <dd data-maxlength=\"140\"></dd>\n        <span class=\"lock\">Tagline (140 characters max)</span>\n      </label>\n\n      <label for=\"profile-user-pitch\" class=\"placeholder\">\n        <span class=\"tip x-small-text\">Your chance to tell your story. What would life look like with no student debt?</span>\n        <textarea type=\"text\" id=\"profile-user-pitch\" name=\"pitch\" value=\"";
  if (helper = helpers.pitch) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pitch); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\"></textarea>\n        <span class=\"lock\">Elevator Pitch</span>\n      </label>\n\n\n      <label for=\"profile-user-college\" class=\"placeholder first-half\">\n        <input type=\"text\" id=\"profile-user-college\" name=\"college\" value=\"";
  if (helper = helpers.collegeName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.collegeName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n        <span>University Name</span>\n      </label>\n\n      <div id=\"dd\" class=\"wrapper-dropdown-multiselect last-half\">\n          <span class=\"label\">Field of study</span>\n          <ul class=\"dropdown\">\n              <li><input type=\"checkbox\" id=\"fiel-1\" name=\"fieldOfStudy\" value=\"donut\"><label for=\"fiel-1\">Eat a donut</label></li>\n              <li><input type=\"checkbox\" id=\"fiel-2\" name=\"fieldOfStudy\" value=\"neighbour\"><label for=\"fiel-2\">Spy on my neighbours</label></li>\n              <li><input type=\"checkbox\" id=\"fiel-3\" name=\"fieldOfStudy\" value=\"T-rex\"><label for=\"fiel-3\">Feed my T-Rex</label></li>\n            <li><input type=\"checkbox\" id=\"fiel-1\" name=\"fieldOfStudy\" value=\"donut\"><label for=\"fiel-1\">Eat a donut</label></li>\n            <li><input type=\"checkbox\" id=\"fiel-2\" name=\"fieldOfStudy\" value=\"neighbour\"><label for=\"fiel-2\">Spy on my neighbours</label></li>\n            <li><input type=\"checkbox\" id=\"fiel-3\" name=\"fieldOfStudy\" value=\"T-rex\"><label for=\"fiel-3\">Feed my T-Rex</label></li><li><input type=\"checkbox\" id=\"fiel-1\" name=\"fieldOfStudy\" value=\"donut\"><label for=\"fiel-1\">Eat a donut</label></li>\n            <li><input type=\"checkbox\" id=\"fiel-2\" name=\"fieldOfStudy\" value=\"neighbour\"><label for=\"fiel-2\">Spy on my neighbours</label></li>\n            <li><input type=\"checkbox\" id=\"fiel-3\" name=\"fieldOfStudy\" value=\"T-rex\"><label for=\"fiel-3\">Feed my T-Rex</label></li><li><input type=\"checkbox\" id=\"fiel-1\" name=\"fieldOfStudy\" value=\"donut\"><label for=\"fiel-1\">Eat a donut</label></li>\n            <li><input type=\"checkbox\" id=\"fiel-2\" name=\"fieldOfStudy\" value=\"neighbour\"><label for=\"fiel-2\">Spy on my neighbours</label></li>\n            <li><input type=\"checkbox\" id=\"fiel-3\" name=\"fieldOfStudy\" value=\"T-rex\"><label for=\"fiel-3\">Feed my T-Rex</label></li>\n          </ul>\n      </div>\n\n      <div id=\"dd\" class=\"wrapper-dropdown first-half\">\n          <span class=\"label\">Highest level completed</span>\n          <ul class=\"dropdown\">\n              <li><input type=\"radio\" id=\"level-3\" name=\"highestLevel\" value=\"highSchool\"><label for=\"level-3\">None</label></li>\n              <li><input type=\"radio\" id=\"level-4\" name=\"highestLevel\" value=\"highSchool\"><label for=\"level-4\">High School Degree</label></li>\n              <li><input type=\"radio\" id=\"level-5\" name=\"highestLevel\" value=\"2\"><label for=\"level-5\">Associates Degree</label></li>\n              <li><input type=\"radio\" id=\"level-6\" name=\"highestLevel\" value=\"4\"><label for=\"level-6\">Bachelors Degree</label></li>\n              <li><input type=\"radio\" id=\"level-7\" name=\"highestLevel\" value=\"masters\"><label for=\"level-7\">Masters Degree</label></li>\n              <li><input type=\"radio\" id=\"level-8\" name=\"highestLevel\" value=\"phd\"><label for=\"level-8\">Doctorate</label></li>\n\n          </ul>\n      </div>\n\n      <label for=\"profile-user-graduation\" class=\"placeholder last-half\">\n        <input type=\"text\" id=\"profile-user-graduation\" name=\"graduation\" value=\"";
  if (helper = helpers.graduation) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.graduation); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n        <span>Graduation/Andicipated Graduation</span>\n      </label>\n\n\n      <label for=\"profile-user-education-story\" class=\"placeholder\">\n        <span class=\"tip x-small-text\">Tell us some more about your college career</span>\n        <textarea type=\"text\" id=\"profile-user-education-story\" name=\"educationStory\" value=\"";
  if (helper = helpers.educationStory) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.educationStory); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\"></textarea>\n        <span>Education</span>\n      </label>\n\n\n\n    \n\n      <div id=\"dd\" class=\"wrapper-dropdown first-half\">\n          <span class=\"label\">Industry</span>\n          <ul class=\"dropdown\">\n              <li><input type=\"radio\" id=\"industry-3\" name=\"highestLevel\" value=\"highSchool\"><label for=\"industry-3\">None</label></li>\n              <li><input type=\"radio\" id=\"industry-4\" name=\"highestLevel\" value=\"highSchool\"><label for=\"industry-4\">High School Degree</label></li>\n              <li><input type=\"radio\" id=\"industry-5\" name=\"highestLevel\" value=\"2\"><label for=\"industry-5\">Associates Degree</label></li>\n              <li><input type=\"radio\" id=\"industry-7\" name=\"highestLevel\" value=\"4\"><label for=\"industry-7\">Bachelors Degree</label></li>\n              <li><input type=\"radio\" id=\"industry-8\" name=\"highestLevel\" value=\"masters\"><label for=\"industry-8\">Masters Degree</label></li>\n              <li><input type=\"radio\" id=\"industry-9\" name=\"highestLevel\" value=\"phd\"><label for=\"industry-8\">Doctorate</label></li>\n\n          </ul>\n      </div>\n\n      <label for=\"profile-user-education-story\" class=\"placeholder\">\n        <span class=\"tip x-small-text\">Tell us about your current/past employment experience</span>\n        <textarea type=\"text\" id=\"profile-user-education-story\" name=\"educationStory\" value=\"";
  if (helper = helpers.educationStory) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.educationStory); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\"></textarea>\n        <span>Employment Background</span>\n      </label>\n\n    \n\n    <p class=\"terms-and-conditions\"><input type=\"checkbox\" id=\"legal-1\" name=\"tcsAgreement\" value=\"true\"><label for=\"legal-1\">I agree to the terms & conditions</label></p>\n\n    <a href=\"/legal/service\" class=\"secondary-link\">Terms of Service</a>\n    <a href=\"/legal/grants\" class=\"secondary-link\">Terms of Grants</a>\n    <a href=\"/legal/privacy\" class=\"secondary-link\">Privacy Policy</a>\n\n\n    <button class=\"save-basic-profile light\">Save</button>\n\n  </section>\n\n  <section class=\"profile-content\">\n    <h5 class=\"sans-serif \">Advanced Info</h5>\n    <p class=\"section-info\">The more complete this section is, the more likely you will be considered for Collegia special grants! Items marked private will only be used for our own grant consideration process and won't be visible on your profile.</p>\n\n\n    <h6 class=\"sans-serif \">Personal Info</h6>\n\n\n    \n\n    <label for=\"profile-user-primary-phone\" class=\"placeholder first-half\">\n      <input type=\"text\" id=\"profile-user-primary-phone\" name=\"primaryPhone\" value=\"";
  if (helper = helpers.primaryPhone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.primaryPhone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n      <span>Primary phone number</span>\n    </label>\n\n    <label for=\"profile-user-secondary-phone\" class=\"placeholder last-half\">\n      <input type=\"text\" id=\"profile-user-secondary-phone\" name=\"secondaryPhone\" value=\"";
  if (helper = helpers.secondaryPhone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secondaryPhone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n      <span>Secondary phone number</span>\n    </label>\n\n\n    \n\n    <div class=\"profile-user-birthday\">\n      <label class=\"profile-edit-label\">Date of birth</label>\n      <div id=\"dd\" class=\"wrapper-dropdown first-third\">\n          <span class=\"label\">Month</span>\n          <ul class=\"dropdown\">\n              <li><input type=\"radio\" id=\"birthday-month-1\" name=\"birthdayMonth\" value=\"1\"><label for=\"birthday-month-1\">Jan</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-2\" name=\"birthdayMonth\" value=\"2\"><label for=\"birthday-month-2\">Feb</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-3\" name=\"birthdayMonth\" value=\"3\"><label for=\"birthday-month-3\">Mar</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-4\" name=\"birthdayMonth\" value=\"4\"><label for=\"birthday-month-4\">Apr</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-5\" name=\"birthdayMonth\" value=\"5\"><label for=\"birthday-month-5\">May</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-6\" name=\"birthdayMonth\" value=\"6\"><label for=\"birthday-month-6\">Jun</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-7\" name=\"birthdayMonth\" value=\"7\"><label for=\"birthday-month-7\">Jul</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-8\" name=\"birthdayMonth\" value=\"8\"><label for=\"birthday-month-8\">Aug</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-9\" name=\"birthdayMonth\" value=\"9\"><label for=\"birthday-month-9\">Sept</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-10\" name=\"birthdayMonth\" value=\"10\"><label for=\"birthday-month-10\">Oct</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-11\" name=\"birthdayMonth\" value=\"11\"><label for=\"birthday-month-11\">Nov</label></li>\n              <li><input type=\"radio\" id=\"birthday-month-12\" name=\"birthdayMonth\" value=\"12\"><label for=\"birthday-month-12\">Dec</label></li>\n          </ul>\n      </div>\n      <div id=\"dd\" class=\"wrapper-dropdown first-third\">\n          <span class=\"label\">Day</span>\n          <ul class=\"dropdown\">\n            ";
  stack1 = (helper = helpers['for'] || (depth0 && depth0['for']),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, 1, 31, 1, options) : helperMissing.call(depth0, "for", 1, 31, 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </ul>\n      </div>\n\n      <div id=\"dd\" class=\"wrapper-dropdown first-third\">\n          <span class=\"label\">Year</span>\n          <ul class=\"dropdown\">\n              ";
  stack1 = (helper = helpers['for'] || (depth0 && depth0['for']),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, 1955, 2016, 1, options) : helperMissing.call(depth0, "for", 1955, 2016, 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </ul>\n      </div>\n    </div>\n\n    <div id=\"dd\" class=\"wrapper-dropdown last-half\">\n        <span class=\"label\">Citizenship Status</span>\n        <ul class=\"dropdown\">\n            <li><input type=\"radio\" id=\"citizenship-1\" name=\"citizenship\" value=\"1\"><label for=\"citizenship-1\">U.S. citizen</label></li>\n            <li><input type=\"radio\" id=\"citizenship-2\" name=\"citizenship\" value=\"2\"><label for=\"citizenship-2\">Eligible noncitizen</label></li>\n            <li><input type=\"radio\" id=\"citizenship-3\" name=\"citizenship\" value=\"3\"><label for=\"citizenship-3\">Neither citizen nor eligible noncitizen </label></li>\n        </ul>\n    </div>\n\n\n    \n\n    <div id=\"dd\" class=\"wrapper-dropdown last-half dependancy-status\">\n        <span class=\"label\">Dependancy Status</span>\n        <ul class=\"dropdown\">\n            <li><input type=\"radio\" id=\"dependancy-1\" name=\"dependancyStatus\" value=\"1\"><label for=\"dependancy-1\">Dependant</label></li>\n            <li><input type=\"radio\" id=\"dependancy-2\" name=\"dependancyStatus\" value=\"2\"><label for=\"dependancy-2\">Independant</label></li>\n        </ul>\n    </div>\n\n    <label for=\"profile-user-num-dependants\" class=\"placeholder last-third\">\n      <input type=\"text\" id=\"profile-user-num-dependants\" name=\"numDependants\" class=\"num-dependants\" value=\"";
  if (helper = helpers.numDependants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.numDependants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\">\n      <span># of dependants</span>\n    </label>\n\n\n    \n\n\n\n\n    <h6 class=\"sans-serif \">Emergency Contact</h6>\n\n    <h6 class=\"sans-serif \">Additional College Info</h6>\n\n\n  </section>\n\n  <section class=\"profile-content\">\n\n  </section>\n\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n              <li><input type=\"radio\" id=\"birthday-year-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" name=\"birthdayYear\" value=\"1\"><label for=\"birthday-year-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</label></li>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <li><input type=\"radio\" id=\"birthday-year-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" name=\"birthdayYear\" value=\"1\"><label for=\"birthday-year-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</label></li>\n              ";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, (depth0 && depth0.pageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

return this["Collegia"]["Views"];

});