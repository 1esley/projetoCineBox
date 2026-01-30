const params = new URLSearchParams(window.location.search);
const movieId = Number(params.get("id"));

const movie = movies.find(m => m.id === movieId);

document.getElementById("page-title").innerText = movie.title + " - CineBox";

document.getElementById("title").innerText = movie.title;
document.getElementById("description").innerText = movie.description;

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const movieComments = comments.filter(c => c.movieId === movieId);

  function renderStars(rate) {
    let starsHtml = "";

    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="individual-rate ${i <= rate ? 'filled' : ''}">&#9733;</span>`;
    }

    return starsHtml;
  }

  document.getElementById("comments").innerHTML = movieComments
    .map(c => `<p><strong>${c.user.name}:</strong> ${c.text}</p>
        <div class="rate">
        ${renderStars(c.rate)}
        </div>
      `)
    .join("");
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
  
  const rate = selectedValue;
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({ movieId, user, text, rate });

  localStorage.setItem("comments", JSON.stringify(comments));
  document.getElementById("comment").value = "";
  loadComments();
}

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
