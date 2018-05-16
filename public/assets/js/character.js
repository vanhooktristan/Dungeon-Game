// global variables area ======================================================================== //
var slayerDataValue = "";
var slayerPicName = "";
var slayerName = "";
var slayerImg = "";
var slayerPic = "";
var newSlayer = {};

// functions area ============================================================================== //
function validateForm(slayerObj) {
  var fldsValidated = true;
  $(".modal-body-area").empty();

  if (slayerName === "") {
    fldsValidated = false;
    // send slayer name is not populated message to error modal-body-area
    slayerNameErr1 = $("<p>").text("Your slayer name is not populated!");
    slayerNameErr1.addClass("modal-err-msg");
    slayerNameErr1.addClass("font-weight-bold");
    slayerNameErr1.addClass("mt-3");
    $(".modal-body-area").append(slayerNameErr1);
    // ask user to give new slayer a name
    slayerNameErr2 = $("<p>").text("Please give your slayer a name.");
    slayerNameErr2.addClass("modal-err-msg, font-italic");
    $(".modal-body-area").append(slayerNameErr2);
  }
  if (slayerPic === "") {
    fldsValidated = false;
    // send slayer image has not been selected message to error modal-body-area
    slayerNameErr3 = $("<p>").text("A slayer image has not been selected!");
    slayerNameErr3.addClass("modal-err-msg");
    slayerNameErr3.addClass("font-weight-bold");
    $(".modal-body-area").append(slayerNameErr3);
    // ask user to pick a slayer image 
    slayerNameErr4 = $("<p>").text("Please click one of the slayer images listed on the right.");
    slayerNameErr4.addClass("modal-err-msg, font-italic");
    $(".modal-body-area").append(slayerNameErr4);
  }
  if (fldsValidated === false) {
    $("#slayer-error-modal").modal("show");
  }
  return fldsValidated;
};

// main process area ============================================================================ //
$(function () {

  $(".slayer").on("click", function (event) {
    event.preventDefault();
    slayerDataValue = ($(this).data("slayer-value"));
    slayerPicName = ($(this).attr("name"));
    $("#image-input").text(slayerPicName);

    $("#slayer-img-lg").remove();
    slayerImg = $("<img>");
    slayerImg.attr("id", "slayer-img-lg");
    slayerImg.attr("src", "/assets/images/" + slayerDataValue);
    slayerImg.attr("data-slayer-value", slayerDataValue);
    $(".slayer-img-area").append(slayerImg);
  });

  $("#slayer-create-btn").on("click", function (event) {
    event.preventDefault();
    var name = $("#name-input").val().trim();
    var strength = $("#strength-input").val();
    var vitality = $("#vitality-input").val();
    var agility = $("#agility-input").val();
    var image = slayerDataValue;

    slayerName = name;
    slayerPic = image;

    newSlayer = {
      name: name,
      level: 1,
      strength: strength,
      vitality: vitality,
      agility: agility,
      image: image
    };

    // validate that the sum of new slayer traits equals 9 points.
    var traitSum = parseInt(newSlayer.strength) +
      parseInt(newSlayer.vitality) +
      parseInt(newSlayer.agility);

    if (traitSum !== 9) {
      $("#slayer-trait-strength").text(newSlayer.strength);
      $("#slayer-trait-vitality").text(newSlayer.vitality);
      $("#slayer-trait-agility").text(newSlayer.agility);
      $("#slayer-trait-total").text(traitSum);
      $("#trait-sum-modal").modal("show");
    }
    else {
      // verify that the new slayer character has an image and a name.
      var fieldsValidated = validateForm(newSlayer);
      // if all new slayer data valid, send confirm modal to player.
      if (fieldsValidated === true) {
        $("#cfm-slayer-img").text(slayerPicName);
        $("#cfm-slayer-name").text(newSlayer.name);
        $("#cfm-slayer-strength").text(newSlayer.strength);
        $("#cfm-slayer-vitality").text(newSlayer.vitality);
        $("#cfm-slayer-agility").text(newSlayer.agility);
        $("#new-slayer-cfm").modal("show");
      }
    }
  });

  // player confirms the new slayer character  
  $("#new-slayer-cfm-btn").on("click", function (event) {
    event.preventDefault();

    $("#new-slayer-cfm").modal("hide");
    // insert new slayer object into players table.    
    $.ajax("/api/character", {
      type: "POST",
      data: newSlayer
    }).then(function (result) {
      if (result.createdAt) {
        $(".slayer-img-area").empty();
        $("#image-input").empty();
        $("#name-input").val("");
        $("#strength-input").empty();
        $("#vitality-input").empty();
        $("#agility-input").empty();
        // send modal to inform player they are ready for battle. 
        $("#battle-modal").modal("show");
      }
    });
  });
  
});
