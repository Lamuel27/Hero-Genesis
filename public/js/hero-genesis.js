$(document).ready(function(){
  $("#getStarted").on("click", function(){
      $.get("/game", function(data){
        $("body").html(data);
      })
    });
  $("#goToDnd5e").on("click", function(){
    var type = "dnd5e";
    $.get("/form/"+type, function(data){
      $("body").html(data);
    });
  });
  $("#goToFateAcc").on("click", function(){
    console.log("CLicked fate")
    var type = "fateacc";
    $.get("/form/"+type, function(data){
      $("body").html(data);
    });
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
    }).then($.get("/creations/all", function(data){
      $("body").html(data);
    }));
  });
  $("#submitFormFateAcc").on("click", function(e){
    e.preventDefault();
    var type="fateacc";
    var newCharacter = {
        name: $("#nameText").val(),
        description: $("#descriptionText").val(),
        highConcept: $("#highConceptText").val(),
        trouble: $("#troubleText").val(),
        aspect3: $("#aspect3Text").val(),
        aspect4: $("#aspect4Text").val(),
        aspect5: $("#aspect5Text").val(),
        stunts: $("#stuntsText").val()
    }
    $.post("/form/" + type, newCharacter, function(data){
      console.log("New post="+data)
    }).then($.get("/creations/all", function(data){
      $("body").html(data);
    }));
  })
});