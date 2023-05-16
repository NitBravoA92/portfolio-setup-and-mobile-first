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
    image: 'img/tonic-01.png',
    title: 'Tonic',
    client_info: ['canopy', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
  },
  {
    image: 'img/multi-post-stories-01.png',
    title: 'Tonic',
    client_info: ['canopy', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
  },
  {
    image: 'img/tonic-02.png',
    title: 'Tonic',
    client_info: ['canopy', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    source: 'https://github.com/NitBravoA92/portfolio-setup-and-mobile-first',
    livelink: 'https://nitbravoa92.github.io/portfolio-setup-and-mobile-first/',
  },
  {
    image: 'img/multi-post-stories-02.png',
    title: 'Tonic',
    client_info: ['canopy', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
  }
]

// Render Prject Cards
const projectCard = document.querySelector('.projects-list');

function displayCards(id) {
  projectCard.innerHTML += `
    <article class="project">
      <div class="preview-image">
        <img src="${projectData[id].img}" alt="Tonic project preview image" class="mobile" />
        <img src="./img/tonic-desktop.png" alt="Tonic project preview image" class="desktop" />
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
  `
}

for(let i=0; i < projectData.length; i++) {
  displayCards(i)
}

const btnProjectDetails = document.querySelectorAll('.btn-project-details');
btnProjectDetails.forEach((btnElement, index) => {
  btnElement.addEventListener('click', function(event) {
    const modalWindow = document.querySelector("#details-popup-window");
    modalWindow.innerHTML = `
    <div id="overlay-modal-bg"></div>
    <div class="main-modal">
    <div class="modal-header">
        <div class="modal-title">
            <h3 class="title">${projectData[index].title}</h3> 
            <button type="button" class="btn-close-modal">X</button>
        </div>
        <div class="modal-client-details">
            <ul>
                <li>${projectData[index].client_info[0]}</li>
                <li>${projectData[index].client_info[1]}</li>
                <li>${projectData[index].client_info[2]}</li>
            </ul>
        </div>
        <div class="modal-image">
            <img src="${projectData[index].image}" alt="Project screenshot" class="image screenshot">
        </div>
    </div>
    <div class="modal-details">
        <p class="modal-description">
          ${projectData[index].description}
        </p>
        <div class="modal-skills-footer-btns">
            <ul>
                <li>${projectData[index].skills[0]}</li>
                <li>${projectData[index].skills[1]}</li>
                <li>${projectData[index].skills[2]}</li>
            </ul>
            <div class="modal-btns-lives">
                <a href="${projectData[index].livelink}" class="">See live</a>
                <a href="${projectData[index].source}" class="">See source</a>
            </div>
        </div>
    </div>
</div>
`;
  });
});