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

  $("#homeButton").on("click", function () {
    $.get("/", function (data) {
      $("body").html(data);
    })
  });

  $("#viewAllButton").on("click", function () {
    $.get("/creations/all", function (data) {
      $("body").html(data);
    })
  });

  $("#gamePickerButton").on("click", function () {
    $.get("/game", function (data) {
      $("body").html(data);
    })
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
    var images = ['../images/elf1.png', '../images/elf2.png', '../images/wizard.png', '../images/wizard2.png', '../images/orc.png', '../images/viking.png', '../images/Barbarian.PNG', '../images/Dragon.PNG', '../images/Dwarf.PNG'];
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
    var name = ['Pirate', 'Gladiator', 'Gardener', 'Ranger', 'Woodland Monk', 'Blacksmith', 'Bounty Hunter', 'Knight', 'Baker', 'Hunter', 'Lumberjack', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Paladin', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
    $('#classText').val(name[Math.floor(Math.random() * name.length)]);
  });

  $("#raceAdd").on("click", function () {
    var name = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling', 'Aarakocra', 'Genasi', 'Goliath', 'Aasimar', 'Bugbear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku', 'Kobold', 'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-ti Pureblood', 'Feral Tiefling', 'Tortle', 'Gith', 'Changeling', 'Kalashtar', 'Shifter', 'Warforged', 'Centaur', 'Loxodon', 'Minotaur', 'Simic Hybrid', 'Vedalken'];
    $('#raceText').val(name[Math.floor(Math.random() * name.length)]);
  });

  $('#personalityAdd').on("click", function () {
    var trait = [
      'I’ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.',
      'I am utterly serene, even in the face of disaster.',
      'The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.',
      'I feel tremendous empathy for all who suffer.',
      'I’m oblivious to etiquette and social expectations.',
      'I connect everything that happens to me to a grand, cosmic plan.',
      'I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.',
      'I am working on a grand philosophical theory and love sharing my ideas.',
      'I know a story relevant to almost every situation.',
      'Whenever I come to a new place, I collect local rumors and spread gossip.',
      'I’m a hopeless romantic, always searching for that “special someone.”',
      'Nobody stays angry at me or around me for long, since I can defuse any amount of tension.',
      'I love a good insult, even one directed at me.',
      'I get bitter if I’m not the center of attention.',
      'I’ll settle for nothing less than perfection.',
      'I change my mood or my mind as quickly as I change key in a song.',
      'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.',
      'The common folk love me for my kindness and generosity.',
      'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.',
      'I take great pains to always look my best and follow the latest fashions.',
      'I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.',
      'Despite my noble birth, I do not place myself above other folk. We all have the same blood.',
      'If you do me an injury, I will crush you, ruin your name, and salt your fields.',
      'My language is as foul as an otyugh nest.',
      'I like a job well done, especially if I can convince someone else to do it.',
      'I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.',
      'I express affection or contempt in ways that are unfamiliar to others.',
      'I honor my deities through practices that are foreign to this land.',
      'I begin or end my day with small traditional rituals that are unfamiliar to those around me.',
      'I am always calm, no matter what the situation.',
      'The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.',
      'I would rather make a new friend than a new enemy.',
      'I am incredibly slow to trust.Those who seem the fairest often have the most to hide.',
      'I dont pay attention to the risks in a situation. Never tell me the odds.',
      'The best way to get me to do something is to tell me I cant do it.',
      'I blow up at the slightest insult.'];
    $('#personalityTraitsText').val(trait[Math.floor(Math.random() * trait.length)]);
  });

  $('#idealsAdd').on("click", function () {
    var ideals = [
      'Honor. I don’t steal from others in the trade.',
      'Freedom. Chains are meant to be broken, as are those who would forge them.',
      'Charity. I steal from the wealthy so that I can help people in need.',
      'Greed. I will do whatever it takes to become wealthy.',
      'People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care.',
      'Redemption. There’s a spark of good in everyone.',
      'Beauty. When I perform, I make the world better than it was.',
      'Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are.',
      'Creativity. The world is in need of new ideas and bold action.',
      'Greed. I’m only in it for the money and fame.',
      'People. I like seeing the smiles on people’s faces when I perform. That’s all that matters.',
      'Honesty. Art should reflect the soul; it should come from within and reveal who we really are.',
      'Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity.',
      'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine.',
      'Independence. I must prove that I can handle myself without the coddling of my family.',
      'Power. If I can attain more power, no one will tell me what to do.',
      'Family. Blood runs thicker than water.',
      'Noble Obligation. It is my duty to protect and care for the people beneath me.',
      'Greater Good. Our lot is to lay down our lives in defense of others.',
      'Responsibility. I do what I must and obey just authority.',
      'Independence. When people follow orders blindly, they embrace a kind of tyranny.',
      'Might. In life as in war, the stronger force wins.',
      'Nation. My city, nation, or people are all that matter.',
      'Honesty. The smallest deception paves the way to grievous sin.',
      'Piety. Devotion to the angels and the rites of the church is all that keeps the world from destruction.',
      'Order. The laws of Avacyn are meant to preserve the social order—everything in its proper place.',
      'Humanity. Human life is to be cherished and preserved against the horrors of the night.',
      'Knowledge. The path to holiness comes through understanding of the world.',
      'Punishment. It is better for the innocent to suffer than for the guilty to escape their due.'
    ];
    $('#idealsText').val(ideals[Math.floor(Math.random() * ideals.length)]);
  });

  $('#bondsAdd').on("click", function () {
    var bonds = [
      'One day, I will claim vengeance against the monster that took my family from me.',
      'My weapon is all I have to remember my beloved mentor by.',
      'The geist of my beloved speaks to me sometimes.',
      'My dear sibling is now a werewolf.',
      'A small crossways chapel is my spiritual home.',
      'I will face any challenge to win the approval of my family.',
      'My house’s alliance with another noble family must be sustained at all costs.',
      'Nothing is more important than the other members of my family.',
      'I am in love with the heir of a family that my family despises.',
      'My loyalty to my sovereign is unwavering.',
      'The common folk must see me as a hero of the people.',
      'My instrument is my most treasured possession, and it reminds me of someone I love.',
      'Someone stole my precious instrument, and someday I’ll get it back.',
      'I want to be famous, whatever it takes.',
      'I idolize a hero of the old tales and measure my deeds against that person’s.',
      'I will do anything to prove myself superior to my hated rival.',
      'I would do anything for the other members of my old troupe.',
      'I’m trying to pay off an old debt I owe to a generous benefactor.',
      'My ill-gotten gains go to support my family.',
      'Something important was taken from me, and I aim to steal it back.',
      'I’m guilty of a terrible crime. I hope I can redeem myself for it.',
      'Someone I loved died because of a mistake I made. That will never happen again.',
      'The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need.',
      'I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine.',
      'The forest has provided me with food and shelter. In return, I protect forests and those who dwell within.',
      'Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly.',
      'I come from a noble family, and one day I’ll reclaim my lands and title from those who stole them from me.',
      'A powerful person killed someone I love. Some day soon, I’ll have my revenge.',
      'I swindled and ruined a person who didn’t deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.'
    ];
    $('#bondsText').val(bonds[Math.floor(Math.random() * bonds.length)]);
  });

  $('#flawsAdd').on("click", function () {
    var flaws = [
      'I am troubled by the wild rage and bloodlust that lurks in my own heart.',
      'I have come to believe that I executed an innocent person.',
      'I drink to forget the horrors I’ve seen.',
      'I might have made a promise to a demon that I can’t keep.',
      'I’ll do whatever grim task must be done, for my soul is already lost.',
      'I secretly believe that everyone is beneath me.',
      'I hide a truly scandalous secret that could ruin my family forever.',
      'I too often hear veiled insults and threats in every word addressed to me, and I’m quick to anger.',
      'I have an insatiable desire for carnal pleasures.',
      'In fact, the world does revolve around me.',
      'By my words and actions, I often bring shame to my family.',
      'I’ll do anything to win fame and renown.',
      'I’m a sucker for a pretty face.',
      'A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.',
      'I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.',
      'I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.',
      'Despite my best efforts, I am unreliable to my friends.',
      'When I see something valuable, I can’t think about anything but how to steal it.',
      'When faced with a choice between money and my friends, I usually choose the money.',
      'If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.',
      'I have a “tell” that reveals when I am lying.',
      'I turn tail and run when things look bad.',
      'An innocent person is in prison for a crime that I committed. I’m okay with that.',
      'I am very uncomfortable indoors and underground.',
      'I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison.',
      'Elf this, elf that. I am sick and tired of the elves.',
      'I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly.',
      'I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it.',
      'I believe the gods have cursed me and my family. We are all doomed, doomed I tell you!'
    ];
    $('#flawsText').val(flaws[Math.floor(Math.random() * flaws.length)]);
  });

  // var print = require('print-html')

  // printJS('#print', 'html');
  // $( "#prin" ).on( "click", function(  ) {
  // print();
  // });
  // $("#print").printThis();

  

});