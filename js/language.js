//Work
// Start Add
function addlan() {
  // Create Elements
  // c p

  let language = document.querySelector(".content-language");

  let cdiv = document.createElement("div");

  let ci = document.createElement("i");

  let cdivpls = document.createElement("div");

  let cp = document.createElement("p");

  let span = document.createElement("span");

  language.appendChild(cdiv);

  cdiv.setAttribute("class", "box-language");

  cdiv.appendChild(ci);

  ci.setAttribute("class", "fa-solid fa-language");

  cdiv.appendChild(cdivpls);

  cdivpls.setAttribute("class", "info-lan");

  cdivpls.appendChild(cp);

  cdivpls.appendChild(span);

  p = document.querySelectorAll(".box-language");

  p_attr = document.querySelector(".box-language:last-child p");

  sp = document.querySelector(".box-language:last-child span");

  for (let i = 1; i <= p.length; i++) {
    p_attr.setAttribute("class", "plan" + [i]);
    sp.setAttribute("class", "sp" + [i]);
  }

  language.innerHTML;

  // c input

  let language_cp = document.getElementById("lan");

  const adddiv = document.createElement("div");
  const addinput = document.createElement("input");
  const addinputpls = document.createElement("input");

  language_cp.appendChild(adddiv);
  adddiv.appendChild(addinput);
  adddiv.appendChild(addinputpls);

  adddiv.setAttribute("class", "box");

  let INPUTs = document.querySelectorAll(".input_language .box");

  let input_atttr = document.querySelector(
    ".input_language .box:last-child input"
  );

  let span_attr = document.querySelector(
    ".input_language .box:last-child input:last-child"
  );

  for (let i = 1; i <= INPUTs.length; i++) {
    input_atttr.setAttribute("class", "lanin" + [i]);
    span_attr.setAttribute("class", "lansp" + [i]);
  }

  span_attr.setAttribute("title", "Your Leveal");
  span_attr.setAttribute("Name", "Your Leveal");
  span_attr.setAttribute("placeholder", "Your Leveal");

  input_atttr.setAttribute("title", "Your Language");
  input_atttr.setAttribute("Name", "Language");
  input_atttr.setAttribute("placeholder", "Your Language");

  language_cp.innerHTML;
}
// End Add

function removelan() {
  let language_cp = document.getElementById("lan");

  let INPUTs = document.querySelector(".input_language .box:last-child");

  language_cp.removeChild(INPUTs);

  let language = document.querySelector(".content-language");

  p_attr = document.querySelector(".box-language:last-child");

  language.removeChild(p_attr);
}

function sub_language() {
  let INPUTs = document.querySelectorAll(".input_language .box");

  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".box-language .plan" + [i]).innerText =
      document.querySelector(".input_language .box .lanin" + [i]).value;
  }

  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".box-language .sp" + [i]).innerText =
      document.querySelector(".input_language .box .lansp" + [i]).value;
  }

  let display = (document.querySelector(".cat_language").style.display =
    "none");
  let blur = (document.querySelector(".cv").style.filter = "none");
}

function c_language() {
  let INPUTs = document.querySelectorAll(".input_language .box");
  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".input_language .box .lanin" + [i]).value = "";
    document.querySelector(".input_language .box .lansp" + [i]).value = "";
  }
}

// Hide Header
function hide_language() {
  let display = (document.querySelector(".cat_language").style.display =
    "block");
  let blur = (document.querySelector(".cv").style.filter = "blur(5px)");
}
