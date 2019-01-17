// Change below references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveChar: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getChar: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  }
};

// refreshChar gets new examples from the db and repopulates the list
var refreshChar = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list

var submitChar = function(event) {
event.preventDefault();

  var char = {
    name: $("#nameText").val().trim(),
    class: $("#classTest").val().trim(),
    level: $("#levelVal").val().trim(),
    background: $("#backgroundText").val().trim(),
    race: $("#raceText").val().trim(),
    alignment: $("#alignmentText").val().trim(),
    experience: $("#experienceVal").val().trim(),
    personalityTraits: $("#personalityTraitsText").val().trim(),
    ideals: $("#idealsText").val().trim(),
    bonds: $("#bondsText").val().trim(),
    flaws: $("#flawsText").val().trim(),
    featuresAndTraits: $("#featuresAndTraitsText").val().trim()
  };
  console.log(char);

  // Change below to reflect the data inputs
  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveChar(example).then(function() {
    refreshChar();
  });

  //Change below for our project
  $exampleText.val("");
  $exampleDescription.val("");
};

// Add event listener to the submit button
$submitBtn.on("click", submitChar);

