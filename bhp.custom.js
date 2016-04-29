document.addEventListener("DOMContentLoaded", function(event) {
  var user = BHP.Global.CurrentUser();

  var CustomBHP = {
    log: function(msg){
      console.log("%c" + msg, "color: green; background: black; padding: 2px;");
    }
  }

  var backgroundUrl = "https://tjhorner.com/wallpapers/Twi.png";

  var SYLLABUS_POSITION = {
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
    BOTTOM: 3
  };

  var syllabusPosition = SYLLABUS_POSITION.LEFT;

  function striptags(str){
    return str.replace(/(<([^>]+)>)/ig,"");
  }

  function getUnit(id, callback){
    $.getJSON("/userservices/unit/{" + id + "}", function(unit){
      console.log(unit);
    });
  }

  function addStyleFor(el, css){
    var node = document.createElement('style');
    node.innerHTML = el + "{" + css + "}";
    document.body.appendChild(node);
  }

  function addBackgroundForColor(color, url, align){
    addStyleFor(".unit." + color + " .hero", "background-image: url(" + url + ") !important; background-position: " + align);
  }

  if(user.Email === "me@tjhorner.com"){
    // enable it
    CustomBHP.log("Custom BHP enabled.");
    CustomBHP.log("User: " + striptags(user.FirstName) + " " + striptags(user.LastName));
    CustomBHP.log("Selected background URL: " + backgroundUrl);

    addStyleFor("html", "background: url(" + backgroundUrl + "); background-size: cover");

    CustomBHP.log("Syllabus position: " + syllabusPosition);

    switch(syllabusPosition){
      case SYLLABUS_POSITION.LEFT:
        var posCss = "10% 0 auto";
        break;
      case SYLLABUS_POSITION.RIGHT:
        var posCss = "10% 10% 0 auto";
        break;
      case SYLLABUS_POSITION.BOTTOM:
        var posCss = "20% auto 0 auto";
        break;
      default:
        var posCss = "";
        break;
    }

    addStyleFor(".syllabus", "margin: " + posCss + " !important");
    addStyleFor(".activityItem", "box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.46);");
    addBackgroundForColor("purple", "https://tjhorner.com/wallpapers/Twi.png", "0px 10%");
    addBackgroundForColor("lightpurple", "https://tjhorner.com/wallpapers/Twi.png", "0px 10%");
    addBackgroundForColor("lightgray", "https://tjhorner.com/custom-bhp/derpy.png", "0px 80%");
  }
});
