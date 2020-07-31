// When the user scrolls the page, execute stickyHeader()
window.onscroll = function () {
  stickyHeader();
};

// Get the header
const header = document.getElementById("myTopnav");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its
// scroll position. Remove "sticky" when you leave the
// scroll position.

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
