// About ME
function about() {
  document.getElementById("me").innerText =
    document.getElementById("mecp").value;

  let display = (document.querySelector(".cat_me").style.display = "none");
  let blur = (document.querySelector(".cv").style.filter = "none");

  // Set LocalStorage

  var mecp = document.getElementById("mecp").value;
  localStorage.setItem("About_Me", mecp);
}
// Get LocalStorage
document.getElementById("mecp").value = localStorage.getItem("About_Me");

function c_me() {
  document.getElementById("mecp").value = "";
}

// Hide Header
function hide_me() {
  let display = (document.querySelector(".cat_me").style.display = "block");
  let blur = (document.querySelector(".cv").style.filter = "blur(5px)");
}
