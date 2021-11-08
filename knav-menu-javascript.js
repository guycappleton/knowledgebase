var expandedSelection = 'Initialise';
var currentSelection = 'Initialise'; 

function knav_open() {
    document.getElementById("mySidebar").style.display = "block";
    myAccFunc2();
}
function knav_close() {
    collapseAccordian();
    document.getElementById("mySidebar").style.display = "none";
}

function myAccFunc(id) {
    var panel = expandedSelection.nextElementSibling;
    panel.style.maxHeight = null;
    expandedSelection.classList.toggle("active");
    var currentSelection = document.getElementById(id);
    currentSelection.classList.toggle("active");
    var panel = currentSelection.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
    expandedSelection = currentSelection;
  }
  
function myAccFunc2() {
    currentSelection.classList.toggle("active");
    var panel = currentSelection.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
    expandedSelection = currentSelection;
}

function collapseAccordian() {
    var panel = expandedSelection.nextElementSibling;
    panel.style.maxHeight = null;
    expandedSelection.classList.toggle("active");
}

function initialiseLocation() {
    var parts = window.location.pathname.split( '/' );
    var x = parts[parts.length-2];
    currentSelection = document.getElementById(x);
}