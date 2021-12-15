let but = $("#search");
let title = $("#title");
let chosenDate = $("#date-init");
let text = $("#text");
let author = $("#author");
let images = $("#image");
let video = $("#video");

but.on("click", function () {
  let date = $("#date-select").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=zmtwe6hEGZoepuVy2rub7QyPzdx3R4YU2XvAMVTi&date=${date}`,
    type: "GET",
    contentType: "application/json",

    success: function (response) {
      title.html(`${response.title}`);
      chosenDate.html(`${response.date}`);
      text.html(`${response.explanation}`);
      author.html(`By: ${response.copyright}`);
      if (response.media_type == "image") {
        images.attr("src", response.url);
      } else {
        document.getElementById("image").style.display = "none";
        document.getElementById("video").style.display = "block";
        video.attr("src", response.url);
      }
      return response;
    },
  });
});
