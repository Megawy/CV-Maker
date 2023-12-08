// Avatar
const profilepic = document.getElementById("profilepic");
const input = document.getElementById("file");

input.onchange = function () {
  profilepic.src = URL.createObjectURL(input.files[0]);
};

// Information
// Name
function info() {
  document.getElementById("n").innerText = document.getElementById("ncp").value;
  // // Job
  document.getElementById("j").innerText = document.getElementById("jcp").value;
  // Hide Header
  let header = (document.querySelector(".cat_header").style.display = "none");
  let blur = (document.querySelector(".cv").style.filter = "none");
}

// Clear
function c_header() {
  document.getElementById("ncp").value = "";
  document.getElementById("jcp").value = "";
}

// Hide Header
function hide_header() {
  let header = (document.querySelector(".cat_header").style.display = "block");
  let blur = (document.querySelector(".cv").style.filter = "blur(5px)");
}
