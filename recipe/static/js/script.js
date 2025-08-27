document.addEventListener('DOMContentLoaded', function () {    // Wait for the entire page content to load before running the script

  //SEARCH OVERLAY
  const searchIcon = document.getElementById("searchIcon");    // Get the search icon element
  const closeSearch = document.getElementById("closeSearch");    // Get the close (×) button element
  const searchOverlay = document.getElementById("searchOverlay");    // Get the search overlay element

  searchIcon.onclick = function () {    // When search icon is clicked
    searchOverlay.style.display = "block";    // Show the overlay (make it visible)
    document.body.style.overflow = "hidden";
  };

  closeSearch.onclick = function () {    // When close button is clicked
    searchOverlay.style.display = "none";    // Hide the overlay (make it invisible)
    document.body.style.overflow = "";
  };

  searchOverlay.onclick = function (e) {    // When clicking anywhere on the overlay
    if (!e.target.closest(".panel")) {    // If the click is NOT inside the .panel (search box)
      searchOverlay.style.display = "none";    // Hide the overlay
      document.body.style.overflow = "";

    }
  };



  //LOGIN MODAL 
  const userIcon = document.getElementById("userIcon");
  const loginOverlay = document.getElementById("loginOverlay");
  const closeLogin = document.getElementById("closeLogin");

  userIcon.onclick = () => {
    loginOverlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  closeLogin.onclick = () => {
    loginOverlay.style.display = "none";
    document.body.style.overflow = "";
  }
  loginOverlay.onclick = (e) => {
    if (!e.target.closest(".modal")) {
      loginOverlay.style.display = "none";
      document.body.style.overflow = "";
    }
  };

  //SIGNUP MODAL
  const signbtn = document.getElementById("signbtn");
  const signOverlay = document.getElementById("signOverlay");
  const closeSign = document.getElementById("closeSign");

  signbtn.onclick = () => {
    signOverlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  closeSign.onclick = () => {
    signOverlay.style.display = "none";
    document.body.style.overflow = "";
  }
  signOverlay.onclick = (e) => {
    if (!e.target.closest(".modal")) {
      signOverlay.style.display = "none";
      document.body.style.overflow = "";
    }
  };



  // SHOW SIGNUP AND LOGIN 
  var showSignUp = document.getElementById('showSignUp');
  var showLogin = document.getElementById('showLogin');
  if (showSignUp) {
    showSignUp.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('loginOverlay').style.display = 'none';
      document.getElementById('signOverlay').style.display = 'block';
    });
  }
  if (showLogin) {
    showLogin.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('signOverlay').style.display = 'none';
      document.getElementById('loginOverlay').style.display = 'block';
    });
  }


  //STICKY-NAV
  const stickyNav = document.querySelector('.sticky-nav');    // Get the sticky nav element from the page (the bar that sticks to the top)
  const sentinel = document.querySelector('.nav-sentinel');    // Get the invisible "sentinel" element placed above the sticky nav
  if (!stickyNav || !sentinel) return;    // If either the sticky nav or the sentinel is not found, stop running the script

  const observer = new IntersectionObserver(    // Create a new IntersectionObserver to detect when the sentinel is on screen
    ([entry]) => {    // Runs on scroll to check if sentinel is visible on screen
      if (!entry.isIntersecting) {    // If the sentinel is NOT visible on screen anymore (i.e. user scrolled past it)
        stickyNav.classList.add('stuck');    // Add the "stuck" class to the nav to change its style 
      } else {
        stickyNav.classList.remove('stuck');    // If the sentinel is back in view (scrolled up), remove the "stuck" class
      }
    },
    { threshold: [0] }    // Trigger when even a tiny part of sentinel is in or out of view
  );

  observer.observe(sentinel);    // Start observing the sentinel element



  // LIKE BUTTON
  const likeBtns = document.querySelectorAll(".like i");

  likeBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("liked");

      if (this.classList.contains("liked")) {
        this.classList.remove("far"); // empty heart
        this.classList.add("fas");    // solid heart
      } else {
        this.classList.remove("fas");
        this.classList.add("far");
      }
    });
  });
});