// global variables area
var slayerDataValue = "";
var slayerPicName = "";
var slayerName = "";
var slayerImg = "";
var newSlayer = {};


// main process area
$(function () {

  //  
  $(".slayer").on("click", function (event) {
    event.preventDefault();
    slayerDataValue = ($(this).data("slayer-value"));
    slayerPicName = ($(this).attr("name"));
    $("#image-input").text(slayerName);

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
    SlayerName = name;
    newSlayer = {
      name: name,
      level: 1, 
      strength: strength, 
      vitality: vitality, 
      agility: agility, 
      image: image
    };

    $("#cfm-slayer-img").text(slayerPicName);
    $("#cfm-slayer-name").text(newSlayer.name);
    $("#cfm-slayer-strength").text(newSlayer.strength);
    $("#cfm-slayer-vitality").text(newSlayer.vitality);
    $("#cfm-slayer-agility").text(newSlayer.agility);

    $("#new-slayer-cfm").modal("show");
  });

  $("#new-slayer-cfm-btn").on("click", function (event) {
    event.preventDefault();
    $("#new-slayer-cfm").modal("hide");  
    $.ajax("/api/character", {
      type: "POST",
      data: newSlayer
    }).then(function (result) {
      $(".slayer-img-area").empty();
      $("#image-input").empty();
      $("#name-input").val("");
      $("#strength-input").empty();
      $("#vitality-input").empty();
      $("#agility-input").empty();
      console.log(JSON.stringify(result, null, 2) + "\n");
    });
  });
});
