//Work
// Start Add
function addwo() {
  // Create Elements
  // c p
  let work = document.querySelector(".content-work");
  let cdiv = document.createElement("div");
  let ci = document.createElement("i");
  let cp = document.createElement("p");
  work.appendChild(cdiv);
  cdiv.setAttribute("class", "box-work");
  cdiv.appendChild(ci);
  ci.setAttribute("class", "fa-solid fa-briefcase");
  cdiv.appendChild(cp);

  p = document.querySelectorAll(".box-work");
  p_attr = document.querySelector(".box-work:last-child p");

  for (let i = 1; i <= p.length; i++) {
    p_attr.setAttribute("class", "pwo" + [i]);
  }

  work.innerHTML;
  // c input

  let work_cp = document.getElementById("wo");

  const addinput = document.createElement("input");

  work_cp.appendChild(addinput);

  let INPUTs = document.querySelectorAll(".input_work INPUT");

  let input_atttr = document.querySelector(".input_work input:last-child");

  for (let i = 1; i <= INPUTs.length; i++) {
    input_atttr.setAttribute("class", "win" + [i]);
  }

  input_atttr.setAttribute("title", "Your Work");
  input_atttr.setAttribute("Name", "Work");
  input_atttr.setAttribute("placeholder", "Your Work");

  work_cp.innerHTML;
}
// End Add

function removewo() {
  let work_cp = document.getElementById("wo");

  let input_atttr = document.querySelector(".input_work input:last-child");

  work_cp.removeChild(input_atttr);

  let work = document.querySelector(".content-work");

  p_attr = document.querySelector(".box-work:last-child");

  work.removeChild(p_attr);
}

function sub_work() {
  let INPUTs = document.querySelectorAll(".input_work INPUT");

  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".box-work .pwo" + [i]).innerText =
      document.querySelector(".input_work .win" + [i]).value;
  }

  let display = (document.querySelector(".cat_work").style.display = "none");
  let blur = (document.querySelector(".cv").style.filter = "none");
}

function c_work() {
  let INPUTs = document.querySelectorAll(".input_work INPUT");
  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".input_work .win" + [i]).value = "";
  }
}


// Hide Header
function hide_work() {
  let display = (document.querySelector(".cat_work").style.display =
    "block");
  let blur = (document.querySelector(".cv").style.filter = "blur(5px)");
}