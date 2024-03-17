function londonFunc() {
  var elementLondon = document.getElementById("tab1-content");
  elementLondon.classList.remove("hiddenClass");
  var elementParis = document.getElementById("tab2-content");
  elementParis.classList.add("hiddenClass");
  var elementTokyo = document.getElementById("tab3-content");
  elementTokyo.classList.add("hiddenClass");
  var buttonLondon = document.getElementById("tab1-button");
  buttonLondon.classList.add("hoverClass");
  var buttonParis = document.getElementById("tab2-button");
  buttonParis.classList.remove("hoverClass");
  var buttonTokyo = document.getElementById("tab3-button");
  buttonTokyo.classList.remove("hoverClass");
}

function parisFunc() {
  var elementParis = document.getElementById("tab2-content");
  elementParis.classList.remove("hiddenClass");
  var elementLondon = document.getElementById("tab1-content");
  elementLondon.classList.add("hiddenClass");
  var elementTokyo = document.getElementById("tab3-content");
  elementTokyo.classList.add("hiddenClass");
  var buttonParis = document.getElementById("tab2-button");
  buttonParis.classList.add("hoverClass");
  var buttonLondon = document.getElementById("tab1-button");
  buttonLondon.classList.remove("hoverClass");
  var buttonTokyo = document.getElementById("tab3-button");
  buttonTokyo.classList.remove("hoverClass");
}

function tokyoFunc() {
  var elementTokyo = document.getElementById("tab3-content");
  elementTokyo.classList.remove("hiddenClass");
  var elementParis = document.getElementById("tab2-content");
  elementParis.classList.add("hiddenClass");
  var elementLondon = document.getElementById("tab1-content");
  elementLondon.classList.add("hiddenClass");
  var buttonLondon = document.getElementById("tab1-button");
  buttonLondon.classList.remove("hoverClass");
  var buttonParis = document.getElementById("tab2-button");
  buttonParis.classList.remove("hoverClass");
  var buttonTokyo = document.getElementById("tab3-button");
  buttonTokyo.classList.add("hoverClass");
}
