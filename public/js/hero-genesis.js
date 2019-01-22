$(document).ready(function () {
  $("#getStarted").on("click", function () {
    $.get("/game", function (data) {
      $("body").html(data);
    })
  });

  $(".list-group-item").on("click", function () {
    var id = this.id;
    var type = "dnd5e";
    $.get("/form/" + type + "/" + id, function (data) {
      $("body").html(data);
    });
  });

  $("#goToDnd5e").on("click", function () {
    var type = "dnd5e";
    $.get("/form/" + type, function (data) {
      $("body").html(data);
    });
  });

  $("#submitFormDnd5e").on("click", function (e) {
    e.preventDefault();
    console.log("CLICKED");
    var type = "dnd5e";
    var newCharacter = {
      name: $("#nameText").val(),
      class: $("#classText").val(),
      background: $("#backgroundText").val(),
      race: $("#raceText").val(),
      alignment: $("#alignmentText").val(),
      experience: $("#experienceVal").val(),
      personalityTraits: $("#personalityTraitsText").val(),
      ideals: $("#idealsText").val(),
      bonds: $("#bondsText").val(),
      flaws: $("#flawsText").val(),
      featuresAndTraits: $("#featuresAndTraitsText").val(),
      author: $("#authorText").val(),
      gameType: "DnD 5e"
    }
    console.log("Loggggggging");
    $.post("/form/" + type, newCharacter, function (data) {
      console.log("New post=" + data)
    }).then($.get("/creations/all", function (data) {
      $("body").html(data);
    }));
  });

  $(function () {
    var images = ['../images/elf1.png', '../images/elf2.png', '../images/wizard.png', '../images/wizard2.png'];
    $('#myPicture').css({ 'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')' });
  });

  $("#add").on("click", function () {
    var name = ['dave', 'mike', 'emily', 'aaron'];
    $('#nameText').val(name[Math.floor(Math.random() * name.length)]);
  });

  $("#alignmentAdd").on("click", function () {
    var name = ['Lawful Good', 'Neutral', 'Lawful Evil', 'Neutral Evil','Neutral Good','Chaotic Good','Chaotic Neutral','Chaotic Evil','Lawful Neutral'];
    $('#alignmentText').val(name[Math.floor(Math.random() * name.length)]);
  });

  $("#classAdd").on("click", function () {
    var name = ['Gardener', 'Ranger', 'Woodland Monk', 'Blacksmith','Bounty Hunter','Knight','Baker','Hunter','Lumberjack','Barbarian','Bard','Cleric','Druid','Paladin','Rogue','Sorcerer','Warlock','Wizard'];
    $('#classText').val(name[Math.floor(Math.random() * name.length)]);
  });

  $("#raceAdd").on("click", function () {
    var name = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome','Half-Elf','Halfling','Half-Orc','Human','Tiefling','Aarakocra','Genasi','Goliath','Aasimar','Bugbear','Firbolg','Goblin','Hobgoblin','Kenku','Kobold','Lizardfolk','Orc','Tabaxi','Triton','Yuan-ti Pureblood','Feral Tiefling','Tortle','Gith','Changeling','Kalashtar','Shifter','Warforged','Centaur','Loxodon','Minotaur','Simic Hybrid','Vedalken'];
    $('#raceText').val(name[Math.floor(Math.random() * name.length)]);
  });
});