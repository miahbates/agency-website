// target attribute 'data tab target' to get an array of li's 
const tabs = document.querySelectorAll('.tabs[data-tab-target]');

// target attribute 'data tab content' on contents of tabs
const tabContents = document.querySelectorAll('[data-tab-content]'); 

const cta = document.querySelector('.cta[data-tab-target]');

// loop over tabs array to get each individual li 
// add event listener for when clicked
// loop over tab contents - to remove the active class from all to ensure all are display block.
// use attribute to target heading li, when clicked access info from 'data tab target' which will link to id in content.

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    for (let j = 0; j < tabContents.length; j++) {
      tabContents[j].classList.remove('active');
    }

    const showTab = document.querySelector(tabs[i].getAttribute('data-tab-target'));
    showTab.classList.add('active');
  })
}

// add event listener to call-to-action
// hide the current active tab
// reveal the tab that the cta is targeting in it's data-tab-target attribute
cta.addEventListener('click', () => {
  const activeTab = document.querySelector('section.active');
  activeTab.classList.remove('active');
  
  const showTab = document.querySelector(cta.getAttribute('data-tab-target'));
  showTab.classList.add('active');
})
