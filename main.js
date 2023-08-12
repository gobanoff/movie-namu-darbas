
const result = document.getElementById("result");
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
let pageCount  = 0;

const next = document.getElementById("next");
const pages = document.getElementById("pages");
function forw() {
  if (pageCount >= 30) next.setAttribute('disabled');
  getData();
  pageCount++;
  pages.innerText = pageCount;
}
const prev = document.getElementById("prev");
function back() {
 if (pageCount <= 1) prev.setAttribute('disabled');
  getData();

  pageCount--;
  pages.innerText = pageCount;
}