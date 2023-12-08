//Work
// Start Add
function addcou() {
  // Create Elements
  // c p
  let courses = document.querySelector(".content-courses");
  let cdiv = document.createElement("div");
  let ci = document.createElement("i");
  let cp = document.createElement("p");
  courses.appendChild(cdiv);
  cdiv.setAttribute("class", "box-courses");
  cdiv.appendChild(ci);
  cdiv.appendChild(cp);
  ci.setAttribute("class", "fa-solid fa-certificate");

  p = document.querySelectorAll(".box-courses");

  p_attr = document.querySelector(".box-courses:last-child p");

  for (let i = 1; i <= p.length; i++) {
    p_attr.setAttribute("class", "pco" + [i]);
  }

  courses.innerHTML;
  // c input

  let courses_cp = document.getElementById("cour");

  const adddiv = document.createElement("div");
  const addinput = document.createElement("input");
  const addimg = document.createElement("i");

  courses_cp.appendChild(adddiv);
  adddiv.appendChild(addinput);

  adddiv.setAttribute("class", "box");

  let INPUTs = document.querySelectorAll(".input_courses .box");

  let input_atttr = document.querySelector(
    ".input_courses .box:last-child input"
  );

  for (let i = 1; i <= INPUTs.length; i++) {
    input_atttr.setAttribute("class", "coin" + [i]);
  }

  input_atttr.setAttribute("title", "Your courses");
  input_atttr.setAttribute("Name", "courses");
  input_atttr.setAttribute("placeholder", "Your courses");

  courses_cp.innerHTML;
}
// End Add

function removecou() {
  let courses_cp = document.getElementById("cour");

  let INPUTs = document.querySelector(".input_courses .box");

  courses_cp.removeChild(INPUTs);

  let courses = document.querySelector(".content-courses");

  p_attr = document.querySelector(".box-courses:last-child");

  courses.removeChild(p_attr);
}

function sub_courses() {
  let INPUTs = document.querySelectorAll(".input_courses .box");

  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".box-courses .pco" + [i]).innerText =
      document.querySelector(".input_courses .coin" + [i]).value;
  }

  let display = (document.querySelector(".cat_courses").style.display = "none");
  let blur = (document.querySelector(".cv").style.filter = "none");
}

function c_courses() {
  let INPUTs = document.querySelectorAll(".input_courses .box");
  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".input_courses .coin" + [i]).value = "";
  }
}

// Hide Header
function hide_courses() {
  let display = (document.querySelector(".cat_courses").style.display =
    "block");
  let blur = (document.querySelector(".cv").style.filter = "blur(5px)");
}
