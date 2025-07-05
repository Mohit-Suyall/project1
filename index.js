function opensidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

function closesidebar() {
  document.getElementById("sidebar").style.width = "0";
}

function showLogin() {
  const login = document.getElementById("loginSection");
  login.classList.remove("hidden");
  login.scrollIntoView({ behavior: "smooth" });
  closeSidebar();
}