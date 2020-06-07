//jshint esversion:6
alert("hello");
var root = $(":root" );

$(document).ready(function(){
    $("div.clickable").on('click', function () {
        alert('Click');
    });
});

$(document).on("change", "input[name='mode-button']", function () {
  alert("change");
  var checked = $("input").prop("checked");
  //light theme
  if(this.checked === true){
    root.css("--bg-color","white");
    root.css('--top-color', "hsl(225, 100%, 98%)");
    root.css("--head-color","hsl(230, 17%, 14%)");
    root.css("--text-color","hsl(228, 12%, 44%)");
    root.css("--card-bg","hsl(227, 47%, 96%)");
  }
  // dark theme
  if(this.checked === false){
    root.css("--bg-color","hsl(230, 17%, 14%)");
    root.css("--top-color", "hsl(232, 19%, 15%)");
    root.css("--head-color","white");
    root.css("--text-color","hsl(228, 34%, 66%)");
    root.css("--card-bg","hsl(228, 28%, 20%)");
  }
});
