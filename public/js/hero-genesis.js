$(document).ready(function(){
  $("#getStarted").on("click", function(){
      $.get("/game", function(data){
        $("body").html(data);
      })
    });
  $("#submitType").on("click", function(){
    var type = "dnd5e";
    $.get("/form/:type", type, function(data){
      $("body").html(data);
    })
  });
  $("#submitFormDnd5e").on("click", function(e){
    e.preventDefault();
    console.log("CLICKED");
    var type= "dnd5e";
    var newCharacter = {
        name: $("#nameText").val(),
        class: $("#classText").val(),
        level: $("#levelVal").val(),
        background: $("#backgroundText").val(),
        race: $("#raceText").val(),
        alignment: $("#alignmentText").val(),
        experience: $("#experienceVal").val(),
        personalityTraits: $("#personalityTraitsText").val(),
        ideals: $("#idealsText").val(),
        bonds: $("#bondsText").val(),
        flaws: $("#flawsText").val(),
        featuresAndTraits: $("#featuresAndTraitsText").val()
    }
    console.log("Loggggggging");
    $.post("/form/" + type, newCharacter, function(data){
      console.log("New post="+data)
    }).then($.get("/creations/all)", function(data){
      $("body").html(data);
    }));
  });
});