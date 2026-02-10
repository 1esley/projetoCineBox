//vê se ta logado e pega o nome pra dar boas vindas
function checkLogin(){
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    if(!user){
        window.location.href = "login.html";
        return;
    }

    const welcome = document.getElementById("welcome");
    if(welcome){
        welcome.innerText = `Olá, ${user.name}`;
    }
}
// o proprio nome ja diz
function logout(){
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}
//event pra rodar tudo de uma vez
document.addEventListener("DOMContentLoaded", ()=>{
    checkLogin();

    const btn = document.getElementById("logout-btn");
    if(btn){
        btn.addEventListener("click", logout);
    }
});