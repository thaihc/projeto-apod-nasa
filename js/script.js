//Criação de variáveis para fixar a data atual no input date.

let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

//Criação de variáveis que serão utilizadas na função request.

let but = $("#search");
let video = $("#video");
let title = $("#title");
let chosenDate = $("#date-init");
let text = $("#text");
let author = $("#author");
let images = $("#images");

//Evento para fixar o conteúdo correspondente a data atual ao carregar/recarregar a página inicial.

window.onload = function () {
  document.getElementById("date-select").value = year + "-" + month + "-" + day;
  request();
};

// Evento para acionar a função request ao clicar no botão.

but.on("click", function () {
  request();
});

//Função que retorna os dados solicitados na API.

function request() {
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
        document.getElementById("images").style.display = "block";
        document.getElementById("video").style.display = "none";
      } else {
        document.getElementById("images").style.display = "none";
        document.getElementById("video").style.display = "block";
        video.attr("src", response.url);
      }
      return response;
    },
  });
}
