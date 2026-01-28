const params = new URLSearchParams(window.location.search);
const movieId = Number(params.get("id"));

const movie = movies.find(m => m.id === movieId);

document.getElementById("title").innerText = movie.title;
document.getElementById("description").innerText = movie.description;

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const movieComments = comments.filter(c => c.movieId === movieId);

  document.getElementById("comments").innerHTML = movieComments
    .map(c => `<p><strong>${c.user}:</strong> ${c.text}</p>`)
    .join("");
}

function addComment() {
  const user = localStorage.getItem("loggedUser");
  if (!user) {
    alert("Faça login para comentar");
    return;
  }

  const text = document.getElementById("comment").value;

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({ movieId, user, text });

  localStorage.setItem("comments", JSON.stringify(comments));
  document.getElementById("comment").value = "";
  loadComments();
}

loadComments();
