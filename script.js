const preloader = document.querySelector(".js-preloader");
let lastScroll = 0;
let ticking = false;
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// collecting contact us data

const contactForm = document.getElementById('form');
const errormessage = document.querySelector('.errormessage');
const successmessage = document.querySelector('.successmessage');
let tablecontainer = JSON.parse(localStorage.getItem("messages")) || [];
let emptyField = [];

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (name.trim() === "") {
    emptyField.push("name");
  }

  if (email.trim() === "") {
    emptyField.push("email");
  }

  if (subject.trim() === "") {
    emptyField.push("subject");
  }

  if (message.trim() === "") {
    emptyField.push("message");
  }

  if (emptyField.length > 0) {
    errormessage.textContent = `This field(s) ${emptyField.join(", ")}  cannot be empty.`;
    errormessage.style.display = "block";
    setTimeout(() => {
      errormessage.style.display = "none";
    }, 3000);
    
  } else{

    successmessage.textContent = "Message sent successfully.";
  successmessage.style.transform = "scaleY(1)";
  setTimeout(() => {
    successmessage.style.transform = "scaleY(0)";
  }, 2000);
  }

  let newObj = {

    name: name,
    email: email,
    subject: subject,
    message: message,
  }

  tablecontainer.push(newObj);
  localStorage.setItem("messages", JSON.stringify(tablecontainer));
  

  


  document.getElementById('name').value ="";
  document.getElementById('email').value = "";
  document.getElementById('subject').value = "";
  document.getElementById('message').value = "";


});

// let clear;
// function del(){
//   localStorage.clear();
//   contactForm.innerHTML = "";
//   tablecontainer = [];
// }


hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  const icon = document.querySelector(".hamburger i");

  if (menu.classList.contains("active")) {
    // Show close icon
    icon.classList.remove("fa-solid", "fa-bars");
    icon.classList.add("fa-solid", "fa-xmark");
    icon.style.display = "block";
  } else {
    // Show hamburger icon
    icon.classList.remove("fa-solid", "fa-xmark");
    // icon.style.display = "none";
    icon.classList.add("fa-solid", "fa-bars");
  }
});

const nav = document.querySelector(".subheading-container");

function handleScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScroll && scrollTop > 100) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

  lastScroll = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });

    ticking = true;
  }
});
// indicator

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const contentA = document.querySelector(".contentA");
const contentB = document.querySelector(".contentB");
const contentC = document.querySelector(".contentC");

button1.addEventListener("click", () => {

  contentA.style.display = "block";
  contentA.style.transition = "all 0.5s ease-in-out"
  button1.style.backgroundColor = "#f35525";
  contentB.style.display = "none";
  button2.style.backgroundColor = "#1e1e1e";
  contentC.style.display = "none";
  button3.style.backgroundColor = "#1e1e1e";
})

button2.addEventListener("click", () => {

  contentA.style.display = "none";
  button1.style.backgroundColor = "#1e1e1e"
  contentB.style.display = "block";
  contentB.style.transition = "all 0.5s ease"
  button2.style.backgroundColor = "#f35525"
  contentC.style.display = "none";
  button3.style.backgroundColor = "#1e1e1e"
})


button3.addEventListener("click", () => {

  contentA.style.display = "none";
  contentC.style.transition = "all 0.5s ease"
  button1.style.backgroundColor = "#1e1e1e"
  contentB.style.display = "none";
  button2.style.backgroundColor = "#1e1e1e"
  contentC.style.display = "block";
  button3.style.backgroundColor = "#f35525"
})





window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloader.classList.add("loaded");
  }, 1500);
});



