function contact() {
  // My Contact
  // Email
  document.getElementById("email").innerText =
    document.getElementById("emailcp").value;

  document.getElementById("email").href =
    document.getElementById("emailucp").value;
  // Number
  document.getElementById("num").innerText =
    document.getElementById("numcp").value;

  document.getElementById("num").href = document.getElementById("numucp").value;
  // Address
  document.getElementById("add").innerText =
    document.getElementById("addcp").value;
  // Linkedin
  document.getElementById("linkedin").innerText =
    document.getElementById("linkedincp").value;

  document.getElementById("linkedin").href =
    document.getElementById("linkedinucp").value;
  // Github
  document.getElementById("github").innerText =
    document.getElementById("githubcp").value;

  document.getElementById("github").href =
    document.getElementById("githubucp").value;

  let display = (document.querySelector(".cat_contact").style.display = "none");
  let blur = (document.querySelector(".cv").style.filter = "none");
}
function c_contact() {
  document.getElementById("emailcp").value = "";
  document.getElementById("numcp").value = "";
  document.getElementById("addcp").value = "";
  document.getElementById("linkedincp").value = "";
  document.getElementById("linkedinucp").value = "";
  document.getElementById("githubcp").value = "";
  document.getElementById("githubucp").value = "";
}

// Hide Header
function hide_contact() {
  let display = (document.querySelector(".cat_contact").style.display =
    "block");
  let blur = (document.querySelector(".cv").style.filter = "blur(5px)");
}
