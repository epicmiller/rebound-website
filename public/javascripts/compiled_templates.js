define(['Handlebars'], function(Handlebars) {

this["Collegia"] = this["Collegia"] || {};
this["Collegia"]["Views"] = this["Collegia"]["Views"] || {};

Handlebars.registerPartial("footer", this["Collegia"]["Views"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<footer>\n  <div class=\"footer-wrapper\">\n  </div>\n</footer>\n<script src=\"/javascripts/prism.js\" type=\"text/javascript\"></script>";
  },"useData":true}));

Handlebars.registerPartial("head", this["Collegia"]["Views"]["head"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<meta charset=\"utf-8\" />\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n<link rel=\"stylesheet\" href=\"/fonts/font-awesome-4.0.3/css/font-awesome.min.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/stylesheets/main.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/stylesheets/prism.css\">\n\n\n<title>Rebound Js</title>\n\n<meta name=\"description\" content=\"Automatic data binding for Backbone using HTMLBars\" />\n\n<meta name=\"HandheldFriendly\" content=\"True\" />\n<meta name=\"MobileOptimized\" content=\"320\" />\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"white\">\n<meta name=\"viewport\" content=\"initial-scale=1,user-scalable=no,maximum-scale=1,minimal-ui\">\n\n<link rel=\"shortcut icon\" href=\"/images/favicon.ico\">\n<link rel=\"icon\" href=\"/images/favicon.ico\" type=\"image/x-icon\">\n\n<script src=\"/javascripts/vendor/underscore/underscore.js\" type=\"text/javascript\"></script>\n<script src=\"/javascripts/vendor/reboundjs/rebound.runtime.js\" id=\"Rebound\">\n{\n  \"root\": \"/\",\n  \"globalComponents\": {},\n  \"jsPath\": \"/templates/:app.js\",\n  \"cssPath\": \"/stylesheets/apps/:app.css\",\n  \"triggerOnFirstLoad\": true,\n  \"routeMapping\": {\n\n  }\n}\n</script>";
  },"useData":true}));

Handlebars.registerPartial("loading", this["Collegia"]["Views"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "Loading...";
  },"useData":true}));

Handlebars.registerPartial("nav", this["Collegia"]["Views"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<nav>\n  <ul class=\"nav-content\">\n    <li>\n      <a href=\"/\" class=\"menu-item menu-logo\">\n        <img src=\"/images/rebound.svg\">\n      </a>\n    </li>\n  </ul>\n</nav>";
  },"useData":true}));

this["Collegia"]["Views"]["404"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "Oops! We couldn't find the page you're looking for!\n";
  },"useData":true});

this["Collegia"]["Views"]["layouts/main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<!DOCTYPE html>\n<html class=\"no-js\">\n  <head>\n";
  stack1 = this.invokePartial(partials.head, '    ', 'head', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </head>\n\n  <body id=\""
    + escapeExpression(((helper = (helper = helpers.app || (depth0 != null ? depth0.app : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"app","hash":{},"data":data}) : helper)))
    + "\">\n\n";
  stack1 = this.invokePartial(partials.nav, '    ', 'nav', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    <div class=\"main\">\n      <div class=\"wrapper\">\n\n          ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n      </div>\n    </div>\n\n";
  stack1 = this.invokePartial(partials.footer, '    ', 'footer', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n  </body>\n</html>\n";
},"usePartial":true,"useData":true});

return this["Collegia"];

});