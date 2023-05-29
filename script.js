const initApp = () => {
  const hamburger = document.querySelector('.hamburger');
  const topLinks = document.querySelector('.top-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topLinks.classList.toggle('active');
  });

  document.querySelectorAll('.top-link').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    topLinks.classList.remove('active');
  }));

  const speakers = [
    {
      name: 'Mohamed Gamaleldin',
      title: 'Owner and Manager at The English Club',
      image: './images/gamal.webp',
      description:
          'Createor of PCC programm, Presentation Competetion Winner in The British Council in Cairo 2017',
    },
    {
      name: 'Mohamed Halim',
      title: 'Owner and Manager at The English Club',
      image: './images/halim.webp',
      description: 'Creator of "PCC Plus". Presentation competition winner at the MODLI Institution in Alexandria 2018',
    },
    {
      name: 'Asmaa El-sayed',
      title: 'Manager at The English Club',
      image: './images/asmaa.webp',
      description:
            'Facilitator of the PCC competition for over five consecutive years. Debate competition winner 2021',
    },
    {
      name: 'PROF. Ali Atalla',
      title: 'PCC main Judge and Language Teacher',
      image: './images/ali.webp',
      description:
            'The Main Judge in the PCC for five consecutive years. The creator of PCC judging Criterea',
    },
    {
      name: 'Adel Samy',
      title: 'Arabic teacher for non-Arabic speakers.',
      image: './images/adel.jpg',
      description:
            "Founder and judge at the first PCC. Plays an important role in Assessing student's roles",
    },
  ];
  
  const speakersWrap = document.querySelector('.speakers .list');
  for (let i = 0; i < speakers.length; i += 1) {
    const speaker = speakers[i];
    speakersWrap.innerHTML += `
      <div class="speaker-card">
        <div class="image">
          <img src="${speaker.image}" alt="picture of ${speaker.name}" />
        </div>
        <div class="details">
          <h4>${speaker.name}</h4>
          <p class="description">${speaker.title}</p>
          <hr />
          <p>
            ${speaker.description}
          </p>
        </div>
      </div>
    `;
  }
  
  const moreBtn = document.querySelector('.more-btn');
  moreBtn.addEventListener('click', () => {
    if (moreBtn.classList.contains('less-btn')) {
      moreBtn.querySelector('span').textContent = 'MORE';
      moreBtn.classList.remove('less-btn');
      document
        .querySelectorAll('.speakers .speaker-card:not(:first-child):not(:nth-child(2))')
        .forEach((c) => {
          c.style.display = 'none';
        });
      return;
    }
  
    moreBtn.querySelector('span').textContent = 'LESS';
    moreBtn.classList.add('less-btn');
    document.querySelectorAll('.speakers .list > .speaker-card').forEach((c) => {
      c.style.display = 'flex';
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});