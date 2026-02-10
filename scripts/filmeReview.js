const params = new URLSearchParams(window.location.search);
const movieId = Number(params.get("id"));

const movie = movies.find(m => m.id === movieId);

document.getElementById("page-title").innerText = movie.title + " - CineBox";

document.getElementById("title").innerText = movie.title;
document.getElementById("description").innerText = movie.description;

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const movieComments = comments.filter(c => c.movieId === movieId);
  //função para carregar a quantidade certa de estrelas cinzas e amarelas (filled)
  function renderStars(rate) {
    let starsHtml = "";

    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="individual-rate ${i <= rate ? 'filled' : ''}">&#9733;</span>`;
    }

    return starsHtml;
  }

  document.getElementById("comments").innerHTML = movieComments
    .map(c => `
      <div class="comment-card">
          <div class="comment-header">
              <strong>${c.user.name}</strong>
              <div class="comment-stars">${renderStars(c.rate)}</div>
          </div>
          <p class="comment-text">${c.text}</p>
      </div>
    `).join("");

  // aquela rolagem até o comentario que eu tinha citado
  setTimeout(() => {
    const lastComment = document.querySelector("#comments .comment-card:last-child");

    if (lastComment) {
      lastComment.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      // dar um destaque no comentario
      lastComment.style.background = "#1a1820";
      lastComment.style.transition = "1s";

      setTimeout(() => {
        lastComment.style.background = "";
      }, 1200);
    }
  }, 100);
}

function addComment() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  if (!user) {
    alert("Faça login para comentar");
    return;
  }

  const text = document.getElementById("comment").value;

  if (text.length < 5) {
    alert('Comentário muito curto.');
    return;
  }

  if (selectedValue < 1) {
    alert('Você deve avaliar de 1 a 5 estrelas para comentar.');
    return;
  }
  
  const rate = selectedValue;
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({ movieId, user, text, rate });

  localStorage.setItem("comments", JSON.stringify(comments));
  document.getElementById("comment").value = "";

  document.querySelector(".comment-btn").innerText = "Feito ✓";
  setTimeout(()=>{document.querySelector(".comment-btn").innerText = "Comentar";}, 1500);

  loadComments();
}
// basicamente, daqui pra baixo tô fazendo a estilização da interação com as estrelas
const stars = document.querySelectorAll('.star');
let selectedValue = 0;

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    clearHover();
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('hovered');
    }
  });

  star.addEventListener('mouseout', () => {
    clearHover();
    applySelected();
  });


  star.addEventListener('click', () => {
    selectedValue = index + 1;
    applySelected();
    console.log('Avaliação:', selectedValue);
  });
});

function clearHover() {
  stars.forEach(s => s.classList.remove('hovered'));
}
//esse laço aqui calcula as estrelas de cada comentario
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('value');
        
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < value; i++) {
            stars[i].classList.add('selected');
        }
        console.log('Avaliação:', value);
    });
});


loadComments();
