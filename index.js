const menuBtn = document.getElementById('open-mobile-menu');
const menu = document.getElementById('mobile-menu');
const btnClose = document.getElementById('close-btn');
const menuLinks = document.querySelectorAll('.mobile-nav-link');

function navToggle() {
  menu.classList.remove('hide-menu');
  menu.classList.add('show-menu');
  menuBtn.classList.add('open');
}

function closeMobileNav() {
  menu.classList.add('hide-menu');
  menu.classList.remove('show-menu');
  menuBtn.classList.remove('open');
}

btnClose.addEventListener('click', closeMobileNav);
menuBtn.addEventListener('click', navToggle);
menuLinks.forEach((navLink) => {
  navLink.addEventListener('click', closeMobileNav);
});

// Project Data
const projectData = [
  {
    image: './img/capstone-project.png',
    title: 'Psychological Therapy Week Event 2023',
    client_info: ['HappyMind Foundation', 'Frontend Dev', '2023'],
    text: 'Psychological Therapy Week is a major mental health event organized by the HappyMind International Foundation that offers different communities around the world the opportunity to receive psychological help, no matter their age, sex, or religion.',
    long_text: '',
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/NitBravoA92/capstone-project',
    livelink: 'https://nitbravoa92.github.io/capstone-project/index.html',
  },
  {
    image: './img/series_feedback.png',
    title: 'Series Feedback',
    client_info: ['Microverse', 'Frontend Dev', '2023'],
    text: 'SeriesFeedback is an interactive website that provides a platform for users to engage in discussions and share their feedback on a wide range of TV shows.',
    long_text: '',
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/PabloBona/JavaScriptCapstone',
    livelink: 'https://pablobona.github.io/JavaScriptCapstone/dist/index.html',
  },
  {
    image: './img/bookstore.png',
    title: 'Bookstore',
    client_info: ['Microverse', 'Frontend Dev', '2023'],
    text: 'The bookstore is a books web application built with ReactJS, where users can see a list of the latest and most famous books added and obtain detailed information about them.',
    long_text: '',
    skills: ['html', 'css', 'ReactJS'],
    source: 'https://github.com/NitBravoA92/bookstore',
    livelink: 'https://bookstore-app-ho74.onrender.com/',
  },
  {
    image: './img/space-traveling-hub.png',
    title: 'Space Travelers Hub',
    client_info: ['Microverse', 'Frontend Dev', '2023'],
    text: 'Space Travelers Hub is a web application of a company that offers space travel services. The application is made with ReactJS and Redux to manage the global state of the application, the spaceX API is used to query and show users the list of available Missions and Rockets.',
    long_text: '',
    skills: ['html', 'css', 'ReactJS'],
    source: 'https://github.com/NitBravoA92/space-travelers-hub',
    livelink: 'https://space-travelers-hub-l1ba.onrender.com/',
  },
  {
    image: './img/covid19-stats.png',
    title: 'Covid19 Global Cases Stats',
    client_info: ['Microverse', 'Frontend Dev', '2023'],
    text: 'Covid19 Global Cases Stats is an application built with ReactJS and Redux to manage the global state of the application, the Disease.sh API is used to query and show users the covid19 disease-related statistics by continents and countries.',
    long_text: '',
    skills: ['html', 'css', 'ReactJS'],
    source: 'https://github.com/NitBravoA92/covid19-metrics-webapp',
    livelink: 'https://covid19-global-stats.onrender.com/',
  }
];

// Render Project Cards
const projectCard = document.querySelector('.projects-list');

function displayCards(id) {
  projectCard.innerHTML += `
    <article class="project">
      <div class="preview-image">
        <img src="${projectData[id].image}" alt="${projectData[id].title} project preview image" />
      </div>
      <div class="details">
        <h3 class="name">${projectData[id].title}</h3>
        <div class="developer-role">
          <span class="client-name">${projectData[id].client_info[0]}</span>
          <span class="dot"></span>
          <span class="role">${projectData[id].client_info[1]}</span>
          <span class="dot"></span>
          <span class="year-label">${projectData[id].client_info[2]}</span>
        </div>
        <p class="description">
        ${projectData[id].text}
        </p>
        <ul class="technologies-tags">
          <li><span>${projectData[id].skills[0]}</span></li>
          <li><span>${projectData[id].skills[1]}</span></li>
          <li><span>${projectData[id].skills[2]}</span></li>
        </ul>
        <div class="see-more-details">
          <button type="button" class="btn btn-project-details btn-bordered btn-white-bg btn-blue-text">See Project</button>
        </div>
      </div>
    </article>
  `;
}

for (let i = 0; i < projectData.length; i += 1) {
  displayCards(i);
}

const btnProjectDetails = document.querySelectorAll('.btn-project-details');
const modalWindow = document.querySelector('#details-popup-window');

btnProjectDetails.forEach((btnElement, index) => {
  btnElement.addEventListener('click', () => {
    modalWindow.innerHTML = `
    <div class="modal-content project">
      <div class="modal-header">
          <div class="modal-title">
              <h3 class="name">${projectData[index].title}</h3> 
              <button type="button" class="btn-close-modal close-popup">
              <svg width="14" height="14" viewBox="0 0 14 14" class="close-popup" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="close-popup" fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#67798E"/>
              </svg>
              </button>
          </div>
          <div class="modal-client-role-details">
              <ul class="developer-role">
                  <li class="client-name">${projectData[index].client_info[0]}</li>
                  <li><span class="dot"></span></li>
                  <li class="role">${projectData[index].client_info[1]}</li>
                  <li><span class="dot"></span></li>
                  <li class="year-label">${projectData[index].client_info[2]}</li>
              </ul>
          </div>
          <div class="modal-image">
              <img src="${projectData[index].image}" alt="Project screenshot" class="image screenshot">
          </div>
      </div>
      <div class="modal-details">
        <p class="description">
          ${projectData[index].long_text}
        </p>
        <div class="modal-skills-footer">
            <ul class="technologies-tags">
                <li><span>${projectData[index].skills[0]}</span></li>
                <li><span>${projectData[index].skills[1]}</span></li>
                <li><span>${projectData[index].skills[2]}</span></li>
            </ul>
            <div class="modal-footer-buttons">
                <a href="${projectData[index].livelink}" target="_blank" class="btn btn-bordered btn-white-bg btn-blue-text">
                  <span>See live</span>
                  <img src="./img/blue-export-icon.svg" alt="Blue Export icon" />
                </a>
                <a href="${projectData[index].source}" target="_blank" class="btn btn-bordered btn-white-bg btn-blue-text">
                  <span>See source</span>
                  <img src="./img/blue-github-icon.svg" alt="Blue Github icon" />
                </a>
            </div>
        </div>
      </div>
</div>
<div class="divider-container">
  <span class="divider"></span>
</div>
`;
    modalWindow.classList.remove('hidden');
    modalWindow.classList.add('show');
  });
});

modalWindow.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-popup')) {
    modalWindow.classList.remove('show');
    modalWindow.classList.add('hidden');
  }
});

// form validation
const contactForm = document.querySelector('#contact-me-form');
contactForm.addEventListener('submit', (event) => {
  const inputEmailValue = document.querySelector('#user-email').value;
  const emailValueLowerCase = inputEmailValue.toLowerCase();
  const errorMessage = document.querySelector('#errormessage');
  errorMessage.style.display = 'none';
  if (inputEmailValue !== emailValueLowerCase) {
    event.preventDefault();
    errorMessage.style.display = 'block';
  }
});

// preserve data
function getFormData() {
  const inputName = document.querySelector('#user-name');
  const inputEmail = document.querySelector('#user-email');
  const inputMessage = document.querySelector('#user-message');
  return {
    inputName,
    inputEmail,
    inputMessage,
  };
}

function storage(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
      || e.code === 1014
      || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
  }
}

function setDataInForm({ inputName, inputEmail, inputMessage }) {
  const formData = JSON.parse(localStorage.getItem('form-data'));
  inputName.value = formData.name;
  inputEmail.value = formData.email;
  inputMessage.value = formData.message;
}

function saveDataInLocalStorage({ inputName, inputEmail, inputMessage }) {
  const formData = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMessage.value,
  };
  localStorage.setItem('form-data', JSON.stringify(formData));
  setDataInForm({ inputName, inputEmail, inputMessage });
}

const allFormData = getFormData();
if (storage('localStorage')) {
  if (!localStorage.getItem('form-data')) {
    saveDataInLocalStorage(allFormData);
  } else {
    setDataInForm(allFormData);
  }
}

allFormData.inputName.addEventListener('input', () => {
  saveDataInLocalStorage(allFormData);
});
allFormData.inputEmail.addEventListener('input', () => {
  saveDataInLocalStorage(allFormData);
});
allFormData.inputMessage.addEventListener('input', () => {
  saveDataInLocalStorage(allFormData);
});
