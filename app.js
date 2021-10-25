// target attribute 'data tab target' to get an array of li's 
const tabs = document.querySelectorAll('[data-tab-target]');

// target attribute 'data tab content' on contents of tabs
const tabContents = document.querySelectorAll('[data-tab-content]'); 

// loop over tabs array to get each individual li 
// add event listener for when clicked
// loop over tab contents - to remove the active class from all to ensure all are display block.
// use attribute to target heading li, when clicked access info from 'data tab target' which will link to id in content.

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    for (let j = 0; j < tabContents.length; j++) {
      // tabContents[j].classList.remove('active');
      tabContents[j].dataset.active = false;
    }
    // const showTab = document.querySelector(tabs[i].getAttribute('data-tab-target'));
    // showTab.classList.add('active');
     const target = document.querySelector(tabs[i].dataset.tabTarget);
     console.log(tabs[i].dataset.tabTarget, target);
     target.dataset.active = true;
    //  showTab.add('active');
  })
}

// contact form
const form = document.querySelector('form');
// submit input
const submitBtn = document.querySelector('.submit-btn');

// submit message
const submitMsg = document.querySelector('#submit-msg');

console.log(form);
console.log(submitBtn);
console.log(submitMsg);

// function to get all form inputs and return true if they are not empty 
// call this function in the event listener before hiding the form 
// function to get the date and time input values and display them in the submit message

submitBtn.addEventListener('click', () => {
  submitMsg.dataset.active = true;
  form.setAttribute('data-tab-content', "");
})