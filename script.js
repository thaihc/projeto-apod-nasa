let but = $("#search");
but.on("click", function () {
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=zmtwe6hEGZoepuVy2rub7QyPzdx3R4YU2XvAMVTi&date=${date.value}`,
    success: function (response) {
      $("#text").html(`${response.explanation}`);
      $("#author").html(`By: ${response.copyright}`);
      $("#image").attr("src", response.url);
      return response;
    },
  });
});
