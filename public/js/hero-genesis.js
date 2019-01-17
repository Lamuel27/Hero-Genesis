$(document).ready(function(){
  $("#getStarted").on("click", function(){
      $.get("/game", function(data){
        $("body").html(data);
      })
    });
  $("#submitType").on("click", function(){
    $.get("/form/:type", function(data){
      $("body").html(data);
    });
  });
});