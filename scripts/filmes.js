function renderMovies(movieList) {
  const container = document.getElementById('filmes');
  container.innerHTML = '';

  if (movieList.length === 0) {
    container.innerHTML = '<p>Nenhum filme encontrado</p>';
    return;
  }
// for pra buscar os dados em data.js
  movieList.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front" style="background-image: url('${movie.poster}')">
        </div>
        <div class="card-back">
          <div>
            <h3>${movie.title}</h3>
            <p>${movie.synopsis}</p>
            <button class="back-btn">Veja mais</button>
          </div>
        </div>
      </div>
    `;

    card.querySelector('.back-btn')
      .addEventListener('click', (e) => {
        e.stopPropagation();
        openMovie(movie.id);
      });

    container.appendChild(card);
  });
}
//é... filtro
function filterMovies(genre) {
  const filtered = movies.filter(movie => movie.genre === genre);
  renderMovies(filtered);
}

function openMovie(id) {
  window.location.href = `../pages/filme.html?id=${id}`;
}
