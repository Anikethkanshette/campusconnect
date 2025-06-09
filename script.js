const movies = [
  {
    title: "Avengers: Endgame",
    img: "https://i.imgur.com/6B0Zx6l.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Frozen II",
    img: "https://i.imgur.com/x7W8jE7.jpg",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    title: "Spider-Man: No Way Home",
    img: "https://i.imgur.com/7nQJ7jR.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Black Panther",
    img: "https://i.imgur.com/fzRdeR1.jpg",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    title: "Joker",
    img: "https://i.imgur.com/vYGbql2.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Aladdin",
    img: "https://i.imgur.com/nr7nFEA.jpg",
    video: "https://www.w3schools.com/html/movie.mp4"
  }
];

const tvshows = [
  {
    title: "Game of Thrones",
    img: "https://i.imgur.com/Vv1y7xF.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "The Mandalorian",
    img: "https://i.imgur.com/3QXxecF.jpg",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    title: "Breaking Bad",
    img: "https://i.imgur.com/3yAcdE9.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Stranger Things",
    img: "https://i.imgur.com/9E0d4W1.jpg",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    title: "Chernobyl",
    img: "https://i.imgur.com/6nHkH9D.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Money Heist",
    img: "https://i.imgur.com/o4GVhXf.jpg",
    video: "https://www.w3schools.com/html/movie.mp4"
  }
];

function createCard(item) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <img src="${item.img}" alt="${item.title}" />
    <div class="play-overlay">
      <button class="play-btn-sm">&#9654;</button>
    </div>
    <div class="card-title">${item.title}</div>
  `;
  div.addEventListener('click', () => openVideoModal(item));
  return div;
}

function populateCarousel(id, items) {
  const carousel = document.getElementById(id);
  carousel.innerHTML = "";
  items.forEach(item => carousel.appendChild(createCard(item)));
}

// Video Modal logic
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const modalSource = document.getElementById('modalSource');
const modalTitle = document.getElementById('modalTitle');
function openVideoModal(item) {
  modalSource.src = item.video;
  modalVideo.poster = item.img;
  modalTitle.textContent = item.title;
  modalVideo.load();
  videoModal.classList.add('active');
}
document.getElementById('closeModal').onclick = () => {
  videoModal.classList.remove('active');
  modalVideo.pause();
  modalSource.src = "";
};
videoModal.onclick = e => {
  if (e.target === videoModal) {
    videoModal.classList.remove('active');
    modalVideo.pause();
    modalSource.src = "";
  }
};

// Featured Play button
document.getElementById('featuredPlay').onclick = () =>
  openVideoModal(movies[0]);

// Search filter
document.getElementById('searchInput').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll('.carousel .card').forEach(th => {
    const title = th.querySelector('.card-title').textContent.toLowerCase();
    th.style.display = title.includes(q) ? '' : 'none';
  });
});

// Login Modal
const loginModal = document.getElementById('loginModal');
document.getElementById('loginBtn').onclick = () =>
  loginModal.classList.add('active');
document.getElementById('closeLogin').onclick = () =>
  loginModal.classList.remove('active');
loginModal.onclick = e => {
  if (e.target === loginModal) loginModal.classList.remove('active');
};

// Populate carousels
populateCarousel('moviesCarousel', movies);
populateCarousel('tvCarousel', tvshows);