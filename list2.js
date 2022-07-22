var cat = document.querySelectorAll(".category h3");
var unit = document.querySelectorAll(".rootselection h4");
var selections = document.querySelectorAll(".rootselection > ul");
const body = document.body;
var i;

var centerDiv = document.createElement("div");
body.parentElement.appendChild(centerDiv);
centerDiv.appendChild(body);
var navBox = document.createElement("div");
body.appendChild(navBox);
var expandAllButton = document.createElement("button");
navBox.appendChild(expandAllButton);
var collapseAllButton = document.createElement("button");
navBox.appendChild(collapseAllButton);
var expandCatButton = document.createElement("button");
navBox.appendChild(expandCatButton);


expandAllButton.innerHTML = "Expand All";
expandAllButton.classList.toggle("expandButton");
expandAllButton.classList.toggle("button");

collapseAllButton.innerHTML = "Collapse All";
collapseAllButton.classList.toggle("collapseButton");
collapseAllButton.classList.toggle("button");

expandCatButton.innerHTML = "Expand Cat";
expandCatButton.classList.toggle("expandCatButton");
expandCatButton.classList.toggle("button");

centerDiv.classList.toggle("centerDiv");

navBox.classList.toggle("navBox");

for (i = 0; i < selections.length; i++) {
  selections[i].classList.toggle("selectionsUnhide");
  var selButton = document.createElement("button");
  selections[i].parentElement.appendChild(selButton);
  selButton.innerHTML = "Show Selections";
  selButton.classList.toggle("selectionButton");
  selButton.classList.toggle("button");
  selButton.classList.toggle("buttonHide");
  selButton.onclick = buttonScope(i, selections[i]);
}


expandAllButton.addEventListener ("click", function() {

    for (i=0; i < unit.length; i++) {
        unitClick(unit[i], false);
    }

    for (i = 0; i < cat.length; i++) {
       catClick(cat[i], false);
    }
});

collapseAllButton.addEventListener ("click", function() {
    for (i=0; i < unit.length; i++) {
        unitClick(unit[i], true);
    }

    for (i = 0; i < cat.length; i++) {
       catClick(cat[i], true);
    }
});

expandCatButton.addEventListener ("click", function() {
  for (i=0; i <cat.length; i++) {
    catClick(cat[i], false);
  }
});


for (i = 0; i < unit.length; i++) {
  unit[i].addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
    var selButtRef = this.parentElement.lastElementChild;

    if (selButtRef != null && selButtRef.nodeName == "BUTTON") {selButtRef.classList.toggle("buttonHide"); }

    var content = this.parentElement;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });
}

for (i = 0; i < cat.length; i++) {
  cat[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "2160px";
    }
  });
}



function unitClick(menuObj, invertBool) {
  var aBool = menuObj.parentElement.classList.contains("active");
  if (invertBool) {
      if (aBool) {
        menuObj.click();
      }
  } else {
    if (aBool == false) {
      menuObj.click();
    }

   }
}
function catClick(menuObj, invertBool) {
    var aBool = menuObj.classList.contains("active");
    if (invertBool) {
        if (aBool) {
          menuObj.click();
        }
    } else {
      if (aBool == false) {
        menuObj.click();
      }

    }
}
function buttonScope(dex, ulRefScoped) {
  return function () {ulRefScoped.classList.toggle("selectionsUnhide");};

}
