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
    image: './img/gourmet-experience-app.png',
    title: 'Gourmet Experience App',
    client_info: ['Microverse', 'Full-stack Dev', '2023'],
    text: 'This project is a web application built with ReactJS and Redux Toolkit that allows users to book gourmet experiences in a quick and easy way, which they can gift to others. It connects with the GourmetExperience API to manage users, gastronomic experiences, and reservations.',
    long_text: 'This project consists of a web application built with ReactJS and Redux Toolkit that allows users to book gourmet experiences that they can give to others, quickly and easily. It connects to the GourmetExperience API and obtains all the information of registered users, the list of available gastronomic experiences, the list of reservations made by a selected user, and allows new users to be registered, authenticate existing users, create new reservations and delete them.',
    skills: ['Ruby on Rails', 'PostgreSQL', 'ReactJS', 'CSS3'],
    source: 'https://github.com/HFG43/final_capstone_front_end',
    livelink: 'https://gourmet-experiences-app.onrender.com/login',
  },
  {
    image: './img/you-payment-app.png',
    title: 'YouPayment App',
    client_info: ['Microverse', 'Full-stack Dev', '2023'],
    text: 'YouPayment is a mobile budgeting application developed with Ruby on Rails, PostgreSQL, and TailwindCSS. It allows users to record and categorize their expenses, providing effective, private, and secure control of their financial information for better money management.',
    long_text: 'YouPayment is a mobile budget app built with Ruby on Rails, PostgreSQL, and TailwindCSS. It allows the user to record all their expense transactions and classify them by categories. This helps the user to keep effective, private, and secure control of all the information on their expenses, and thus be able to make better decisions about money management.',
    skills: ['Ruby on Rails', 'PostgreSQL', 'HTML5', 'TailwindCSS'],
    source: 'https://github.com/NitBravoA92/budget-app',
    livelink: 'https://budget-app-v4rw.onrender.com/',
  },
  {
    image: './img/easyCOOK.png',
    title: 'easyCOOK App',
    client_info: ['Microverse', 'Full-stack Dev', '2023'],
    text: 'easyCOOK is a web application built on Ruby on Rails that allows you to save ingredients, keep track of what you have in stock, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    long_text: "easyCOOK is a web application developed with Ruby on Rails, PostgreSQL and TailwindCSS, designed to facilitate the management of your cooking recipes. This application allows you to store the ingredients you have at home, keep track of them, and create new recipes. Additionally, you can generate a shopping list based on the ingredients you have and those you are missing for a specific recipe. With this application, you can organize your recipes efficiently, avoiding food waste and optimizing your purchases. In addition, its friendly and easy-to-use interface makes managing your recipes a simple and pleasant task. Whether you're planning a family dinner or just want to try a new recipe.",
    skills: ['Ruby on Rails', 'PostgreSQL', 'HTML5', 'CSS3'],
    source: 'https://github.com/NitBravoA92/recipe-app',
    livelink: 'https://recipe-app-zxdn.onrender.com/',
  },
  {
    image: './img/covid19-stats.png',
    title: 'Covid19 Global Cases Stats',
    client_info: ['Microverse', 'Frontend Dev', '2023'],
    text: '“Covid19 Global Cases Stats“ is an application built with ReactJS and Redux to manage the global state of the application, the Disease.sh API is used to query and show users the covid19 disease-related statistics by continents and countries.',
    long_text: '“Covid19 Global Cases Stats” is a responsive and innovative web application built with ReactJS and Redux, two powerful JavaScript libraries. This application was designed with the aim of providing users with up-to-date and accurate information about the global Covid-19 pandemic. The application uses Redux to manage the global state. Redux is a JavaScript library for managing and updating the state of an application in a predictable manner. In the context of “Covid19 Global Cases Stats”, Redux is used to store and manage the data related to the Covid-19 statistics that are shown to users. ReactJS, on the other hand, is a JavaScript library for building user interfaces. In “Covid19 Global Cases Stats”, ReactJS is used to build the user interface of the application, allowing users to interact effectively with the presented data. The application is fed data from the Disease.sh API. This API provides updated information on Covid-19 statistics by continents and countries. The application queries this API to obtain the most recent data and presents it to users in an easy-to-understand manner.',
    skills: ['html', 'css', 'ReactJS'],
    source: 'https://github.com/NitBravoA92/covid19-metrics-webapp',
    livelink: 'https://covid19-global-stats.onrender.com/',
  },
  {
    image: './img/space-traveling-hub.png',
    title: 'Space Travelers Hub',
    client_info: ['Microverse', 'Frontend Dev', '2023'],
    text: '“Space Travelers Hub” is a web application of a company that offers space travel services. The application is made with ReactJS and Redux to manage the global state of the application, the spaceX API is used to query and show users the list of available Missions and Rockets.',
    long_text: '“Space Travelers Hub” is an innovative web application that combines modern web development technologies with real-time data from SpaceX to offer users a comprehensive platform to explore and book space travels. The application is built with ReactJS and Redux, two very popular and efficient JavaScript libraries. One of the highlights of “Space Travelers Hub” is its integration with the SpaceX API. This API provides real-time data on the available missions and rockets from SpaceX. The application queries this API to obtain the most recent and accurate information, which is then displayed to the users. This allows users to see an updated list of the available missions and rockets, helping them make informed decisions about their space travels.',
    skills: ['html', 'css', 'ReactJS'],
    source: 'https://github.com/NitBravoA92/space-travelers-hub',
    livelink: 'https://space-travelers-hub-l1ba.onrender.com/',
  },
  {
    image: './img/bookstore.png',
    title: 'Bookstore',
    client_info: ['Microverse', 'Frontend Dev', '2023'],
    text: 'The bookstore is a books web application built with ReactJS, where users can see a list of the latest and most famous books added and obtain detailed information about them.',
    long_text: '“The Bookstore” is a web book application built with ReactJS with the aim of providing users with an interactive and user-friendly platform to explore a variety of books. At “The Bookstore”, users can view a list of the latest and most famous books that have been added to the application’s library. This list is regularly updated to ensure that users always have access to the most popular and current titles.',
    skills: ['html', 'css', 'ReactJS'],
    source: 'https://github.com/NitBravoA92/bookstore',
    livelink: 'https://bookstore-app-ho74.onrender.com/',
  },
  {
    image: './img/series_feedback.png',
    title: 'Series Feedback',
    client_info: ['Microverse', 'Frontend Dev', '2023'],
    text: 'SeriesFeedback is an interactive website that provides a platform for users to engage in discussions and share their feedback on a wide range of TV shows.',
    long_text: 'SeriesFeedback is an innovative, interactive website designed with Bootstrap and Javascript to serve as a comprehensive platform for television enthusiasts. It offers users the opportunity to engage in lively discussions, exchange opinions, and share their feedback on a wide array of TV shows spanning various genres, languages, and countries. The platform is designed with a user-friendly interface that allows users to easily navigate through different sections. Whether you’re a fan of drama, comedy, reality TV, or documentaries, “SeriesFeedback” has something for everyone. One of the key features of “SeriesFeedback” is its feedback system. Users can rate shows, write reviews, and share their thoughts on specific episodes or entire seasons. This feature not only allows users to express their views but also helps create a community of informed viewers who can help each other find their next favorite show.',
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/PabloBona/JavaScriptCapstone',
    livelink: 'https://pablobona.github.io/JavaScriptCapstone/dist/index.html',
  },
  {
    image: './img/capstone-project.png',
    title: 'Psychological Therapy Week Event 2023',
    client_info: ['HappyMind Foundation', 'Frontend Dev', '2023'],
    text: 'Psychological Therapy Week is a major mental health event organized by the HappyMind International Foundation that offers different communities around the world the opportunity to receive psychological help, no matter their age, sex, or religion.',
    long_text: "Psychological Therapy Week is a website built with HTML, CSS3, and Javascript. It is a  major mental health event organized by the HappyMind International Foundation that offers different communities around the world the opportunity to receive psychological help, no matter their age, sex, or religion. The website's user-friendly interface seamlessly guides visitors through the process of connecting with a therapist, streamlining the path to receiving the support they need.",
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/NitBravoA92/capstone-project',
    livelink: 'https://nitbravoa92.github.io/capstone-project/index.html',
  },
  {
    image: './img/legal-sys-app.png',
    title: 'Legal Sys Application',
    client_info: ['Modern Solutions Group', 'Full-stack Dev', '2022'],
    text: 'Legal Sys is a responsive web application developed using Laravel, JavaScript, and CSS3, which helps an accounting company automate and streamline the offering and contracting of their accounting services.',
    long_text: 'Legal Sys is a responsive web application developed using Laravel, JavaScript and CSS3, which allows you to manage the contracting of accounting services in a safe and efficient way. The application has two types of access: for companies and for clients. The company can add its services, create and manage users, manage service orders, documents, notes and establish communication channels with its customers through an integrated messaging system. Client users can access the application and request to hire a service as well as monitor their status and communicate with the company through internal messages.',
    skills: ['PHP', 'Laravel', 'javascript', 'HTML5', 'CSS3'],
    source: 'https://github.com/NitBravoA92/legal-sys',
    livelink: '#',
  },
  {
    image: './img/camu-el-mundo-de-la-elegancia.png',
    title: 'CAMU, El mundo de la Elegancia',
    client_info: ['CAMU', 'Full-stack Dev', '2019'],
    text: "The CAMU company's website, a 100% Colombian leather product marketer, developed with PHP and Bootstrap.",
    long_text: "The CAMU company's website, a 100% Colombian leather product marketer, developed with PHP and Bootstrap. This website shows information about the company, its mission, vision, contact, and what products they have to offer their customers.",
    skills: ['PHP', 'HTML5', 'Bootstrap', 'jQuery', 'CSS3'],
    source: '#',
    livelink: 'https://camu-co.000webhostapp.com',
  },
  {
    image: './img/itzamna-school.png',
    title: 'Itzamná Education School',
    client_info: ['AlejandraUtrilla', 'Frontend Dev', '2019'],
    text: 'The website of the Itzamná educational center is a project developed with PHP that provides up-to-date information on school activities, upcoming events, news, and announcements.',
    long_text: "The website of the Itzamná educational center is a project developed with PHP, which was part of the resources presented in the final project of a Master's degree in Educational Sciences for the Mesoamerican University Center 'Joaquin Miguel Gutierrez' in Mexico. Provides up-to-date information on school activities, upcoming events, news, and announcements. Visitors can explore the academic programs offered, meet the faculty, and get details about the admissions process.",
    skills: ['PHP', 'HTML5', 'CSS3', 'javascript'],
    source: 'https://github.com/NitBravoA92/itzamna-website',
    livelink: 'https://ceitzamna.000webhostapp.com/',
  },
  {
    image: './img/global-sales-sys-app.png',
    title: 'Global Sales Sys Application',
    client_info: ['Fiverr', 'Full-stack Dev', '2019'],
    text: 'Global sales sys is software for efficient inventory management, purchasing management, expenses, sales, and billing generation, in a safe and fast way.',
    long_text: 'Global sales sys is software for efficient inventory management, purchasing management, expenses, sales, and billing generation, in a safe and fast way. It is built following the MVC architecture pattern and the LAMP (Linux-Apache-MySQL-PHP) technological stack and in the front-end Bootstrap and the AdminLTE template are used to build the user interfaces and AJAX technology to handle requests to the backend. an asynchronous, fluid, and fast way, achieving SPA-style interfaces.',
    skills: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'javascript', 'jQuery', 'Bootstrap'],
    source: '#',
    livelink: 'http://nitcelisbravoprojects.infinityfreeapp.com/global-sales-sys/App/Login',
  },
];

// Render Project Cards
const projectCard = document.querySelector('.projects-list');

function displayCards(id) {
  const skills = projectData[id].skills.map((sk) => `<li><span>${sk}</span></li>`).join('');
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
          ${skills}
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
