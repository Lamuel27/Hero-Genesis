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
    var images = ['../images/elf1.png', '../images/elf2.png', '../images/wizard.png', '../images/wizard2.png', '../images/orc.png', '../images/viking.png'];
    $('#myPicture').css({ 'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')' });
  });

  $("#add").on("click", function () {
    var firstName = ['Grumpy', 'Tiddlywinks', 'Frederick', 'Moist', 'Gell', 'Rimmy', 'Katya', 'Khoshekh', 'Zhouo', 'Scrambles', 'Scumble', 'Hrothgar', 'Mongo', 'Shapes', 'Cotton', 'Índo', 'Buddy', 'Johnny', 'Larry', 'Frog', 'Footsie', 'Baghdan', 'Thumbs', 'Big Jim', 'Howlie', 'Greg', 'Old Ben', 'Shouter', 'Pan', 'Steve', 'Rude', 'Fella', 'Howdy', 'Boy', 'Diggin-Me-Own-Grave', 'One-Foot-In-The-Grave', 'Flippin-Coins', 'Boylad', 'Guyman', 'Kitta', 'Fera', 'Kid', 'Jewelia', 'Lordy', 'Bobby', 'Token', 'Hose', 'Knots', 'Chumpy', 'Willa', 'Eleanor', 'Horse', 'Arrol', 'Palms', 'Victoria', 'By-The-Grace-Of-God', 'Gorthwin', 'Arsen', 'Puffy', 'Genie', 'Kraster', 'Cave', 'Fats', 'Oopsie', 'Carson', 'Brian', 'Jack', 'Have-You-Seen-My-Shoes', 'Bart', 'Bort', 'Bork', 'Porky', 'Farce', 'Dance-On-Your-Grave', 'Obsidian', 'Jade', 'Raven', 'Blackbird', 'Crow', 'Amethyst', 'Fisty', 'Forks', 'Spoons', 'Knives', 'Ask-Him', 'Pickles', 'Sasha', 'Pointy', 'Gilgamesh', 'Kira', 'Blades', 'Toothy', 'Punchy', 'Fang', 'Axelford', 'Wheels', 'Reginald', 'Face', 'Loaf', 'Excelsior', 'Curse', 'River', 'Freya', 'Estelle', 'Iris', 'Leif', 'Stealy', 'Do-What-I-Say-And-Nobody-Gets-Hurt', 'Nobody', 'Ouchie', 'This-Is-A-Stickup', 'Candy-From-A-Baby'];
    var lastName = ['Bandersnatch', 'McKnight', 'Asfaro', 'the Redeemed', 'Younglass', 'Treefriend', 'the Great', 'Greenberg', 'the Destroyer', 'the Death Dealer', 'the Mighty', 'the Insignificant', 'the Afeard', 'Fuzhkalá', 'Skywalker', 'the Ghost', 'the Welcome', 'the Wise', 'the Highbrow', 'Earthcrawler', 'Boomstick', 'of the Jungle', 'Hardhelm', 'Ironskull', 'Feran', 'Big Toe', 'Battleborn', 'Thunderaxe', 'Bonesmasher', 'Stormwhisperer', 'Stormbringer', 'Godkiller', 'Hardedge', 'Goodgrave', 'Goodgrief', 'Knobhead', 'Roball', 'Cutpurse', 'Johnson', 'Goldsnatch', 'Stickyfingers', 'Young', 'Hedgehog', 'Baker', 'Smith', 'Shoemaker', 'Breadwinner', 'Redshirt', 'Sidequest', 'Furrier', 'Mander', 'the Dumb', 'the Fool', 'the First', 'the Last', 'of the Forest', 'of the Meadows', 'Meanderson', 'Cavedweller', 'McGhee', 'the Undefeated', 'the Unbeliever', 'the Faithful', 'Simpson', 'Longman', 'McKenzie', 'Longears', 'the Beak', 'Shitknives', 'Forger', 'the Forgetful', 'the Patient', 'McTeeth', 'Stabberson', 'Hamfist', 'Quickfinger', 'Shadowblade', 'the Horrible', 'Homebound', 'Rainbringer', 'Stonegrinder', 'Codak', 'Skullcrusher', 'Schreiber', 'McStealyface', 'the Unsuspicious', 'Goldman', 'Worrier', 'Hunter', 'Fisher', 'Gathers', 'Picker', 'Shepherd', 'Goddard', 'Leafblower', 'Snow', 'Icecrusher', 'Blizzard', 'Singer', 'Mountainpeak', 'Salesman', 'Bateman', 'Demonspawn', 'Rockefeller', 'Redman', 'Sprocket', 'Aglet', 'Doodad', 'Device'];
    $('#nameText').val(firstName[Math.floor(Math.random() * firstName.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)]);
  });

  $("#alignmentAdd").on("click", function () {
    var name = ['Lawful Good', 'Neutral', 'Lawful Evil', 'Neutral Evil', 'Neutral Good', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil', 'Lawful Neutral'];
    $('#alignmentText').val(name[Math.floor(Math.random() * name.length)]);
  });

  $("#classAdd").on("click", function () {
    var name = ['Gardener', 'Ranger', 'Woodland Monk', 'Blacksmith', 'Bounty Hunter', 'Knight', 'Baker', 'Hunter', 'Lumberjack', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Paladin', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
    $('#classText').val(name[Math.floor(Math.random() * name.length)]);
  });

  $("#raceAdd").on("click", function () {
    var name = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling', 'Aarakocra', 'Genasi', 'Goliath', 'Aasimar', 'Bugbear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku', 'Kobold', 'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-ti Pureblood', 'Feral Tiefling', 'Tortle', 'Gith', 'Changeling', 'Kalashtar', 'Shifter', 'Warforged', 'Centaur', 'Loxodon', 'Minotaur', 'Simic Hybrid', 'Vedalken'];
    $('#raceText').val(name[Math.floor(Math.random() * name.length)]);
  });
});