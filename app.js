let menu = document.querySelector("#menu-icon");
function myFunction() {
  document.getElementsByClassName(".nav-list").style.display = "block";
}

menu.onclick = () => {
  menu.classList.toggle("bx-x");
};
