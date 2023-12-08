// Skills
// Add Input + Div
function addField() {
  // Start Build  P

  let skills = document.querySelector(".box-skills");

  let create_p = document.createElement("p");

  skills.appendChild(create_p);

  let p = document.querySelectorAll(".box-skills p");
  let p_attr = document.querySelector(".box-skills p:last-child");

  for (let i = 1; i <= p.length; i++) {
    p_attr.setAttribute("class", "ps" + [i]);
  }

  skills.innerHTML;

  // End Build P
  // Start Add Skill

  let skills_cp = document.getElementById("sc");

  const addinput = document.createElement("input");

  skills_cp.appendChild(addinput);

  let INPUTs = document.querySelectorAll(".input_skills INPUT");

  let input_atttr = document.querySelector(".input_skills input:last-child");

  for (let i = 1; i <= INPUTs.length; i++) {
    input_atttr.setAttribute("class", "sin" + [i]);
  }
  input_atttr.setAttribute("title", "Your Skill");
  input_atttr.setAttribute("Name", "Skill");
  input_atttr.setAttribute("placeholder", "Your Skill");

  skills_cp.innerHTML;

  // End Add Skill
}
// Remove Input + Div
function removeField() {
  let cskills = document.getElementById("sc");

  let inputrem = document.querySelector(".input_skills input:last-child");

  cskills.removeChild(inputrem);

  let skills = document.querySelector(".box-skills");

  let divss = document.querySelector(".box-skills p:last-child");

  skills.removeChild(divss);
}

function sub_ski() {
  let INPUTs = document.querySelectorAll(".input_skills INPUT");
  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".box-skills .ps" + [i]).innerText =
      document.querySelector(".input_skills .sin" + [i]).value;
  }

  let display = (document.querySelector(".cat_skills").style.display = "none");
  let blur = (document.querySelector(".cv").style.filter = "none");
}

function c_skills() {
  let INPUTs = document.querySelectorAll(".input_skills INPUT");
  for (let i = 1; i <= INPUTs.length; i++) {
    document.querySelector(".input_skills .sin" + [i]).value = "";
  }
}

// Hide Header
function hide_skills() {
  let display = (document.querySelector(".cat_skills").style.display = "block");
  let blur = (document.querySelector(".cv").style.filter = "blur(5px)");
}
