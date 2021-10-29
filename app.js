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
    //  console.log(tabs[i].dataset.tabTarget, target);
     target.dataset.active = true;
    //  showTab.add('active');
  })
}

// contact form
const form = document.querySelector('form');
// submit message
const submitMsg = document.querySelector('#submit-msg');
// contact button
const contactBtn = document.querySelector('[data-tab-target="#contact"]');

form.addEventListener('submit', (e) => {
  // prevent default submit behaviour of clearing inputs and displaying empty form 
  e.preventDefault();
  // save the form to submit later
  let form = e.target;
  // check inputs are valid and if so display submit message 
  if (validateFormVals()) {
    createSubmitMsg();
    // reveal submit message
    submitMsg.dataset.active = true;
    // hide form
    form.setAttribute('data-tab-content', "");
    // show form if 'contact' button is clicked again after submission
    contactBtn.addEventListener('click', () => {
    form.reset();
    form.removeAttribute('data-tab-content');
    })
  }
})

// get all form inputs and return true if they are valid 
function validateFormVals() {
  const inputs = document.querySelectorAll('input');
  let invalid = 0;
  // if an input's value is an empty string it will evaluate to falsey and is considered invalid
  // increment invalid 
  for (let val of inputs) {
    if (val.type !== 'submit' && !val.value) {
      invalid += 1; 
    }
  }
  // returns true if all inputs are valid
  return invalid === 0; 
}

// get the date and time input values and display them in the submit message
function createSubmitMsg() {
  // get input values
  const name = document.querySelector('input[id = "first-name"]').value;
  const dateObj = document.querySelector('input[type = "date"]').valueAsDate;
  const select = document.querySelector('select');
  const time = select.options[select.selectedIndex].value;

  // update text submit message text content
  let thanks = document.querySelector('.tnx');
  thanks.textContent += `, ${name}!`;
  let consultationInfo = document.querySelector('.date-time-format');
  consultationInfo.textContent += `${formatDateTime(dateObj, time)}`;
}

// return a date and time formatted string i.e 'Tuesday 26 October 2021 at 10:00'
function formatDateTime(dateObj, time) {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  return `${dateObj.toLocaleDateString('en-GB', options)} at ${time}`;
}