function getData() {
  fetch(`https://www.omdbapi.com/?apikey=91486a0e&s=marvel&page=${pageCount}`)
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);

      let html = `<div class="row">`;
      resp.Search.map((data) => {
        html += `<div class="film">
                      <a href="#">
                          <img src="${data.Poster}" alt="${data.Title}" />
                          <h3>${data.Title}</h3>
                      </a>
                  </div>`;
      });
      html += `</div>`;

      result.innerHTML = html;
    });
}
getFace();
let pageCount = 2;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const pages = document.getElementById("pages");
const result = document.getElementById("result");

function forw() {
  if (pageCount >= 31) next.setAttribute("disabled");
  getData();
  pageCount++;
  pages.innerText = pageCount - 1;
}

function back() {
  if (pageCount <= 1) prev.setAttribute("disabled");
  //if (pageCount = 30)pages.innerText =pageCount-1 ;

  getData();

  pageCount--;
  pages.innerText = pageCount ;
}
function getFace() {
  fetch("https://www.omdbapi.com/?apikey=91486a0e&s=marvel")
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);

      let html = `<div class="row">`;
      resp.Search.map((data) => {
        html += `<div class="film">
                      <a href="#">
                          <img src="${data.Poster}" alt="${data.Title}" />
                          <h3>${data.Title}</h3>
                      </a>
                  </div>`;
      });
      html += `</div>`;

      result.innerHTML = html;
    });
}
