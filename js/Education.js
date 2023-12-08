//Education
// Start Add
function addedu() {
  // Create Elements
  // c p
  let education = document.querySelector(".box-education");
  let cp = document.createElement("p");

  education.appendChild(cp);

  p = document.querySelectorAll(".box-education p");
  p_attr = document.querySelector(".box-education p:last-child");

  for (let i = 1; i <= p.length; i++) {
    p_attr.setAttribute("class", "ped" + [i]);
  }

  education.innerHTML;
  // c input

  let education_cp = document.getElementById("ed");

  const addinput = document.createElement("input");

  education_cp.appendChild(addinput);

  let INPUTs = document.querySelectorAll(".input_education INPUT");

  let input_atttr = document.querySelector(".input_education input:last-child");

  for (let i = 1; i <= INPUTs.length; i++) {
    input_atttr.setAttribute("class", "ein" + [i]);
  }

  input_atttr.setAttribute("title", "Your Education");
  input_atttr.setAttribute("Name", "Education");
  input_atttr.setAttribute("placeholder", "Your Education");
  education_cp.innerHTML;
}
// End Add
function removeedu() {
  let education_cp = document.getElementById("ed");

  let input_atttr = document.querySelector(".input_education input:last-child");

  education_cp.removeChild(input_atttr);

  let education = document.querySelector(".box-education");

  p_attr = document.querySelector(".box-education p:last-child");

  education.removeChild(p_attr);
}

function sub_edu() {
  let INPUTs = document.querySelectorAll(".input_education INPUT");
  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".box-education .ped" + [i]).innerText =
      document.querySelector(".input_education .ein" + [i]).value;
  }

  let display = (document.querySelector(".cat_education").style.display =
    "none");
  let blur = (document.querySelector(".cv").style.filter = "none");
}

function c_edu() {
  let INPUTs = document.querySelectorAll(".input_education INPUT");
  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".input_education .ein" + [i]).value = "";
  }
}

// Hide Header
function hide_edu() {
  let display = (document.querySelector(".cat_education").style.display =
    "block");
  let blur = (document.querySelector(".cv").style.filter = "blur(5px)");
}
