// tombol sign-upnya
const signupbutton = document.querySelector("#signup");
const modelBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

signupbutton.addEventListener("click", () => {
  modal.classList.add("is active");
});

modalbg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

// burger menu mobile
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    const target = tab.dataset.target;

    tabContentBoxes.forEach((box) => {
      if (box.getAttribute("id") === target) {
        box.classList.remove("is-hidden");
      } else {
        box.classList.add("is-hidden");
      }
    });
  });
});
