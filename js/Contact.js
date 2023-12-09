function contact() {
  // My Contact
  // Email
  document.getElementById("email").innerText =
    document.getElementById("emailcp").value;
  // Email Link
  let link_email = document.getElementById("emailucp").value;
  document.getElementById(
    "email"
  ).href = `mailto:${link_email}?subject=Contact`;
  // Number
  document.getElementById("num").innerText =
    document.getElementById("numcp").value;
  // Number Link
  let link_number = document.getElementById("numucp").value;
  document.getElementById(
    "num"
  ).href = `https://api.whatsapp.com/send?phone=${link_number}`;
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

  // Set LocalStorage
  // Email
  var Email = document.getElementById("emailcp").value;
  localStorage.setItem("Email", Email);
  var Emaill = document.getElementById("emailucp").value;
  localStorage.setItem("Emaill", Emaill);
  // Number
  var Number = document.getElementById("numcp").value;
  localStorage.setItem("Number", Number);
  var Numberl = document.getElementById("numucp").value;
  localStorage.setItem("Numberl", Numberl);
  // Address
  var Address = document.getElementById("addcp").value;
  localStorage.setItem("Address", Address);
  // Linkedin
  var Linkedin = document.getElementById("linkedincp").value;
  localStorage.setItem("Linkedin", Linkedin);

  var Linkedinl = document.getElementById("linkedincp").value;
  localStorage.setItem("Linkedinl", Linkedinl);
  // Github
  var Github = document.getElementById("githubcp").value;
  localStorage.setItem("Github", Github);

  var Githubl = document.getElementById("githubcp").value;
  localStorage.setItem("Githubl", Githubl);
}

// Get LocalStorage
// Email
document.getElementById("emailcp").value = localStorage.getItem("Email");
document.getElementById("emailucp").value = localStorage.getItem("Emaill");
// Number
document.getElementById("numcp").value = localStorage.getItem("Number");
document.getElementById("numucp").value = localStorage.getItem("Numberl");
// Address
document.getElementById("addcp").value = localStorage.getItem("Address");
// Linkedin
document.getElementById("linkedincp").value = localStorage.getItem("Linkedin");
document.getElementById("linkedinucp").value =
  localStorage.getItem("Linkedinl");
// Github
document.getElementById("githubcp").value = localStorage.getItem("Github");
document.getElementById("githubucp").value = localStorage.getItem("Githubl");

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
