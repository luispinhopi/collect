/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.material-icons')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 }
}

	function closeNav() {
	  openDropdown.classList.remove('show');
	}

// --------------------------------------------------------------- Get the FOOD modal
	var foodModal = document.getElementById("foodModal");

	// Get the button that opens the modal
	var foodBtn = document.getElementById("foodBtn");

	// Get the <span> element that closes the modal
	var foodSpan = document.getElementsByClassName("closeFood")[0];

	// When the user clicks on the button, open the modal
	foodBtn.onclick = function() {
	  foodModal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	foodSpan.onclick = function() {
	  foodModal.style.display = "none";
	}
	
/* // ---------------------------------------------------------------- Get the BAR modal
	var barModal = document.getElementById("barModal");

	// Get the button that opens the modal
	var barBtn = document.getElementById("barBtn");

	// Get the <span> element that closes the modal
	var barSpan = document.getElementsByClassName("closeBar")[0];

	// When the user clicks on the button, open the modal
	barBtn.onclick = function() {
	  barModal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	barSpan.onclick = function() {
	  barModal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == foodModal || event.target == barModal) {
		foodModal.style.display = "none"; 
		barModal.style.display = "none";
	  }
	} */
	
// ---------------------------------------------------------------- Get the SICODELICO modal
	var sicodelicoModal = document.getElementById("sicodelicoModal");

	// Get the button that opens the modal
	var sicodelicoBtn = document.getElementById("sicodelicoBtn");

	// Get the <span> element that closes the modal
	var sicodelicoSpan = document.getElementsByClassName("closeSicodelico")[0];

	// When the user clicks on the button, open the modal
	sicodelicoBtn.onclick = function() {
	  sicodelicoModal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	sicodelicoSpan.onclick = function() {
	  sicodelicoModal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == foodModal || event.target == sicodelicoModal) {
		foodModal.style.display = "none"; 
		sicodelicoModal.style.display = "none";
	  }
	} 
	
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("foodImg");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500); // Change image every 4 seconds
}

var myIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("barImg");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 2500); // Change image every 4 seconds
}

var myIndex3 = 0;
carousel3();

function carousel3() {
  var i;
  var x = document.getElementsByClassName("sicodelicoImg");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x.length) {myIndex3 = 1}    
  x[myIndex3-1].style.display = "block";  
  setTimeout(carousel3, 2500); // Change image every 4 seconds
}