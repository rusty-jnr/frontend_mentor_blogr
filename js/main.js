document.getElementById("menu").addEventListener("click", openDropDownMenu);
document.getElementById("hamburger_menu").addEventListener("click", openMainMenu)

function openDropDownMenu() {
  document.getElementById("dropDown").classList.toggle("show");
  document.getElementById("menu").classList.toggle('active')
}

function openMainMenu() {
  document.getElementById("hamburger_menu").classList.toggle("active");
  document.getElementById("navBar-nav").classList.toggle('active')
}
