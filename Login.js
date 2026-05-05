document.addEventListener("DOMContentLoaded", function () {
  const welcomeLink = document.querySelector("#navbar li:nth-last-child(2) a"); // Targets "Welcome" <a>
  const loggedUser = localStorage.getItem("loggedInUser");

  if (loggedUser) {
    welcomeLink.textContent = `Welcome, ${loggedUser}`;
    welcomeLink.style.color = "#007bff"; // Optional highlight
  }

  // Optional: Logout function - add <a href="#" id="logout">Logout</a> near cart if needed
  // document.getElementById('logout')?.addEventListener('click', function() {
  //     localStorage.removeItem('loggedInUser');
  //     location.reload();
  // });
});
