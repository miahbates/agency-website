const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]'); 

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    for (let j = 0; j < tabContents.length; j++) {
      tabContents[j].classList.remove('active');
    }

    const showTab = document.querySelector(tabs[i].getAttribute('data-tab-target'))
    showTab.classList.add('active')

  })
}
