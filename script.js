//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("login-form");

// Check if credentials exist in localStorage on load
window.addEventListener("DOMContentLoaded", () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block"; // Show "Login as existing user"
  } else {
    existingBtn.style.display = "none"; // Hide if no saved credentials
  }
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const remember = checkbox.checked;

  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Alert login message
  alert(`Logged in as ${username}`);

  // Remember Me functionality
  if (remember) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

  // Reset form after submit
  form.reset();
});

// Handle "Login as existing user"
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});