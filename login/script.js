const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

// const loginBtnEl = document.querySelector("#loginBtn");
// loginBtnEl.addEventListener("click", () => {
//   window.location.href = "../companyprofile/index.html";
// });

const loginFormEl = document.querySelector("#formLogin");
loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah pengiriman formulir
  window.location.href = "../companyprofile/companyprofile/index.html"; // Ganti dengan nama file HTML yang ingin dituju
});

// Add click event listener to each eye icon for toggling password visibility
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        // If password is hidden
        password.type = "text"; // Show password
        eyeIcon.classList.replace("bx-hide", "bx-show"); // Change icon to show state
        return;
      }
      password.type = "password"; // Hide password
      eyeIcon.classList.replace("bx-show", "bx-hide"); // Change icon to hide state
    });
  });
});
