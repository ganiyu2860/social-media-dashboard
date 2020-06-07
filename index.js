//jshint esversion:6
var root = $(":root" );

$("input:checkbox").change(function(){
  alert("change");
  var checked = $("input").prop("checked");
  //light theme
  if(checked === true){
    root.css("--bg-color","white");
    root.css('--top-color', "hsl(225, 100%, 98%)");
    root.css("--head-color","hsl(230, 17%, 14%)");
    root.css("--text-color","hsl(228, 12%, 44%)");
    root.css("--card-bg","hsl(227, 47%, 96%)");
  }
  // dark theme
  if(checked === false){
    root.css("--bg-color","hsl(230, 17%, 14%)");
    root.css("--top-color", "hsl(232, 19%, 15%)");
    root.css("--head-color","white");
    root.css("--text-color","hsl(228, 34%, 66%)");
    root.css("--card-bg","hsl(228, 28%, 20%)");
  }
});
