let navBar = document.querySelector('nav');
let sectionOne = document.querySelector('.header');
let sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
let sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navBar.classList.add('nav-scrolled');
            } else {
                navBar.classList.remove('nav-scrolled');
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);

let btnMenu = document.querySelector('.navbar-toggler');
btnMenu.addEventListener("click", function () {
    btnMenu.classList.toggle('change');
})

// Progress Bar Section
let aboutSection = document.querySelector(".about-us");
let spans = document.querySelectorAll('.progress-bar');
let percentage = document.querySelectorAll('.percent');
let paragraph = document.querySelector('.about-us .about p');
// State Section
let stateSection = document.querySelector('.states');
let nums = document.querySelectorAll('.states .state-text h3');
let started = false; // Function Started ? No


function progress() {
    if (window.scrollY >= aboutSection.offsetTop - 100) {
        paragraph.classList.add("show");
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        });
        percentage.forEach(p => {
            p.innerHTML = p.dataset.percent;
            p.style.left = p.dataset.percent;
        });
    } else {
        paragraph.classList.remove("show");
        spans.forEach(span => {
            span.style.width = 0;
        });
        percentage.forEach(p => {
            p.innerHTML = "";
            p.style.left = 0;
        });
    }
}


function startCount(el) {
    let goal = el.dataset.count;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

function state() {
    if (window.scrollY >= stateSection.offsetTop - 200) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

window.addEventListener('scroll', progress);
window.addEventListener('scroll', state);
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()