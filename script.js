//your JS code here. If required.
const form = document.getElementById("form");
    const userName = document.getElementById("username");
    const password = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");

    // Hide existing user button initially
    existingBtn.style.display = "none";

    // Show existing user button if credentials exist
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      existingBtn.style.display = "inline-block";
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const isChecked = checkbox.checked;
      alert(`Logged in as ${userName.value}`);

      if (isChecked) {
        localStorage.setItem("username", userName.value);
        localStorage.setItem("password", password.value);
        existingBtn.style.display = "inline-block";
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
      }
    });

    existingBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Logged in as ${localStorage.getItem("username")}`);
    });