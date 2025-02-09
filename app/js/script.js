// Responsive Menu
let header = document.querySelector(".header"),
  hamburger = document.querySelector(".hamburger"),
  navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > header.offsetHeight);
});

let navItems = navigation.querySelectorAll("li.nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    let active = document.querySelector(".nav-item.active");
    if (active) {
      active.classList.remove("active");
    }
    this.classList.add("active");
    navigation.classList.remove("active");
  });
});

// Progress bar
window.addEventListener("scroll", function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = `${scrolled}%`;
});

// Preloader
jQuery(document).ready(function () {
  jQuery(".preloader").fadeOut();
});

// Typed JS Configuration
var typed = new Typed("#element", {
  strings: [
    "Software Development Engineer",
    "Front End Developer",
    "React JS Developer",
    "Next JS Developer",
  ],
  typeSpeed: 100,
  loop: true,
});

// Accordian
let accordians = document.querySelectorAll(".accordian");
if (accordians) {
  accordians.forEach((accordian, index) => {
    let header = accordian.querySelector(".accordian-header"),
      icon = accordian.querySelector(".icon");
    header.addEventListener("click", function () {
      accordian.classList.toggle("open");
      let contents = accordian.querySelector(".accordian-contents");
      if (accordian.classList.contains("open")) {
        contents.style.height = `${contents.scrollHeight}px`;
        icon.textContent = "-";
      } else {
        contents.style.height = "0px";
      }
      removeOpen(index);
    });
  });
}

function removeOpen(index1) {
  accordians.forEach((accordian2, index2) => {
    if (index1 != index2) {
      accordian2.classList.remove("open");
      let contents = accordian2.querySelector(".accordian-contents"),
        icon = accordian2.querySelector(".icon");
      contents.style.height = "0px";
      icon.textContent = "+";
    }
  });
}

// Email JS Configs
(function () {
  emailjs.init("y7oQUNOfAzJ6sDGyz");
})();

let spinner = document.querySelector(".spinner"),
  validation = document.querySelector(".message");

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let firstName = document.forms["contact-form"]["first-name"],
        lastName = document.forms["contact-form"]["last-name"],
        email = document.forms["contact-form"]["email"],
        mobile = document.forms["contact-form"]["mobile"],
        validEmailRegEx =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        validNumberRegEx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      if (firstName.value.length < 3 || lastName.value.length < 3) {
        Swal.fire("Error", "This fields has too short input.", "error");
      } else if (!email.value.match(validEmailRegEx)) {
        Swal.fire("Error", "Please enter a valid email address.", "error");
      } else if (!mobile.value.match(validNumberRegEx)) {
        Swal.fire("Error", "Please enter a valid mobile number.", "error");
      } else {
        spinner.classList.add("active");
        emailjs.sendForm("service_uwt0prp", "template_tpkwaed", this).then(
          function () {
            spinner.classList.remove("active");
            Swal.fire(
              "Get in Touch",
              "Your message has been sent successfully!",
              "success"
            );
            document.getElementById("contact-form").reset();
          },
          function (error) {
            Swal.fire("Get in Touch?", "Something went wrong!?", "failed");
          }
        );
      }
    });
};

// Scroll on Top Button
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", function () {
  window.scrollY > 150
    ? scrollTop.classList.add("active")
    : scrollTop.classList.remove("active");
});

scrollTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Disabling cut, copy, paste and  more...
let blockedAction = (e) => {
  e.preventDefault();
};

let cursor = document.querySelector("#cursor");
function createSmoke(e) {
  let elem = document.createElement("div");
  elem.classList.add("elem");
  elem.style.left = `${e.clientX}px`;
  elem.style.top = `${e.clientY}px`;

  cursor.appendChild(elem);

  elem.addEventListener("animationend", () => {
    elem.remove();
  });
}
document.addEventListener("mousemove", createSmoke);

let disabledKeys = ["c", "C", "I", "J", "v", "u", "x", "insert"];
document.addEventListener("keydown", (e) => {
  if (
    (e.ctrlKey && disabledKeys.includes(e.key)) ||
    (e.shiftKey && disabledKeys.includes(e.key)) ||
    (e.ctrlKey && e.shiftKey && disabledKeys.includes(e.key)) ||
    e.key === "F12"
  ) {
    blockedAction(e);
  }
});

document.addEventListener("paste", (e) => {
  blockedAction(e);
});

document.addEventListener("copy", (e) => {
  blockedAction(e);
});

document.addEventListener("contextmenu", (e) => {
  blockedAction(e);
});
