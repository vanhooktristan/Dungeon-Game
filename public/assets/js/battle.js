$("#attack").on("click", function (event) {
  event.preventDefault();
  
  $.ajax("/api/character/:id", {
    type: "GET",
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