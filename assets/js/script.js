// Responsive Menu
let header = document.querySelector('.header'),
  hamburger = document.querySelector('.hamburger'),
  navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', function () {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > header.offsetHeight);
});

let navItems = navigation.querySelectorAll('li.nav-item');
navItems.forEach((item) => {
  item.addEventListener('click', function () {
    let active = document.getElementsByClassName('active');
    active[0].className = active[0].className.replace(' active', '');
    this.className += ' active';
    navigation.classList.remove('active');
    scrollToSection(this);
  });
});

// Progress bar
window.addEventListener('scroll', function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.querySelector('.progress-bar').style.width = `${scrolled}%`;
});

// Adding offset from top
jQuery(document).on('click', '.link', function (event) {
  event.preventDefault();
  jQuery('html, body').animate(
    {
      scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top - 70,
    },
    0
  );
});

// Adding Offset
let element,
  headerOffset = header.offsetHeight,
  elementPosition,
  offsetPosition;
// Driver function
function scrollToSection(elem) {
  elementPosition = elem.getBoundingClientRect().top;
  offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

// Preloader
jQuery(document).ready(function () {
  jQuery('.preloader').fadeOut();
});

// Typed JS Configuration
var typed = new Typed('#element', {
  strings: [
    'Front End Developer',
    'React.js Developer',
    'Wordpress Developer',
    'Blogger',
  ],
  typeSpeed: 100,
  loop: true,
});

// Accordian
let accordians = document.querySelectorAll('.accordian');
if (accordians) {
  accordians.forEach((accordian, index) => {
    let header = accordian.querySelector('.accordian-header'),
      icon = accordian.querySelector('.icon');
    header.addEventListener('click', function () {
      accordian.classList.toggle('open');
      let contents = accordian.querySelector('.accordian-contents');
      if (accordian.classList.contains('open')) {
        contents.style.height = `${contents.scrollHeight}px`;
        icon.textContent = '-';
      } else {
        contents.style.height = '0px';
      }
      removeOpen(index);
    });
  });
}

function removeOpen(index1) {
  accordians.forEach((accordian2, index2) => {
    if (index1 != index2) {
      accordian2.classList.remove('open');
      let contents = accordian2.querySelector('.accordian-contents'),
        icon = accordian2.querySelector('.icon');
      contents.style.height = '0px';
      icon.textContent = '+';
    }
  });
}

// Lightbox
function lightbox(elem) {
  let imgSrc = elem.firstElementChild.src,
    imgAltText = elem.firstElementChild.alt;
  Swal.fire({
    imageUrl: `${imgSrc}`,
    imageAlt: `${imgAltText}`,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      container: 'light-box',
    },
  });
}

// Email JS Configs
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('y7oQUNOfAzJ6sDGyz');
})();

let spinner = document.querySelector('.spinner'),
  validation = document.querySelector('.message');

window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      let firstName = document.forms['contact-form']['first-name'],
        lastName = document.forms['contact-form']['last-name'],
        email = document.forms['contact-form']['email'],
        mobile = document.forms['contact-form']['mobile'],
        validEmailRegEx =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        validNumberRegEx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      if (firstName.value.length < 3 || lastName.value.length < 3) {
        Swal.fire('Error', 'This fields has too short input.', 'error');
      } else if (!email.value.match(validEmailRegEx)) {
        Swal.fire('Error', 'Please enter a valid email address.', 'error');
      } else if (!mobile.value.match(validNumberRegEx)) {
        Swal.fire('Error', 'Please enter a valid mobile number.', 'error');
      } else {
        spinner.classList.add('active');
        emailjs.sendForm('service_cfhb3u7', 'template_tpkwaed', this).then(
          function () {
            spinner.classList.remove('active');
            Swal.fire(
              'Get in Touch',
              'Your message has been sent successfully!',
              'success'
            );
            document.getElementById('contact-form').reset();
          },
          function (error) {
            Swal.fire('Get in Touch?', 'Something went wrong!?', 'failed');
          }
        );
      }
    });
};

// Scroll on Top Button
let scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', function () {
  window.scrollY > 150
    ? scrollTop.classList.add('active')
    : scrollTop.classList.remove('active');
});

scrollTop.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Getting Date and Time

let datetime = new Date(),
  day = datetime.getDate(),
  month = datetime.getMonth(),
  year = datetime.getFullYear(),
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  date = null;
day = day < 10 ? `0${day}` : day;
month = months[month];
date = `${day} ${month} ${year}`;
document.querySelector('.year').textContent = year;
document.querySelector('.date').textContent = date;

function getTime() {
  let dt = new Date(),
    hours = dt.getHours(),
    minutes = dt.getMinutes(),
    seconds = dt.getSeconds(),
    am_pm = 'AM',
    currentTime = null;
  if (hours > 12) {
    hours = hours - 12;
    am_pm = 'PM';
  } else if (hours == 0) {
    hours = 12;
    am_pm = 'AM';
  }
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  currentTime = `${hours} : ${minutes} : ${seconds} ${am_pm}`;
  document.querySelector('.time').textContent = currentTime;
}
setInterval(getTime, 1000);

setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// Dark Mode
let darkMode = document.querySelector('li.light-mode'),
  body = document.body;
darkMode.addEventListener('click', function () {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    darkMode.innerHTML = `<ion-icon name="contrast-outline"></ion-icon>`;
  } else {
    darkMode.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`;
  }
});

// Disabling cut, copy, paste and  more...
let blockedAction = (e) => {
  e.preventDefault();
};
let disabledKeys = ['c', 'C', 'I', 'J', 'v', 'u', 'x', 'insert'];
document.addEventListener('keydown', (e) => {
  if (
    (e.ctrlKey && disabledKeys.includes(e.key)) ||
    (e.shiftKey && disabledKeys.includes(e.key)) ||
    (e.ctrlKey && e.shiftKey && disabledKeys.includes(e.key)) ||
    e.key === 'F12'
  ) {
    blockedAction(e);
  }
});
document.addEventListener('paste', (e) => {
  blockedAction(e);
});
document.addEventListener('copy', (e) => {
  blockedAction(e);
});
document.addEventListener('contextmenu', (e) => {
  blockedAction(e);
});
