document.addEventListener("DOMContentLoaded", () => {
/*
  const slidesContainer = document.querySelector('.carousel-slides');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = slidesContainer.clientWidth;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
    currentIndex = index;
  }

  function showNextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function showPrevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  if (prevButton && nextButton) {
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);
    setInterval(showNextSlide, 5000);
  }
*/
  // Função genérica para carregar dados via fetch
  function loadData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }
/*
  // Carregar dados do carrossel
  loadData('../assets/db/db.json', data => {
    let carouselItemsHTML = '';
    data.destaques.forEach(item => {
      carouselItemsHTML += `
        <div class="carousel-slide">
          <img src="${item.url}" alt="${item.title}">
          <div class="carousel-caption">
            <h5>${item.title}</h5>
            <p>${item.description}</p>
          </div>
        </div>`;
    });
    slidesContainer.innerHTML = carouselItemsHTML;
    showSlide(currentIndex);
  });
*/

  // Carregar perfil do GitHub
  loadData("https://api.github.com/users/Matheus-Spirit", data => {
    let profileHTML = `
      <div class="jumbotron text-left p-4">
        <h2 class="pb-2 mb-4 border-bottom">Perfil</h2>
        <div class="row">
          <div class="col-md-2">
            <img src="${data.avatar_url}" class="d-block img-fluid mx-auto rounded-circle" alt="Matheus">
          </div>
          <div class="col-md-10">
            <h2>${data.name}</h2>
            <p>${data.bio} Sou um apaixonado por tecnologia da informação com 2 anos de experiência como suporte técnico, 
            se você procura um profissional dedicado, orientado para resultados e apaixonado por solucionar desafios tecnológicos,</p>
            <h5>Location:</h5>
            <p>Belo Horizonte, Minas Gerais</p>
            <h5 class="text-uppercase mb-4">Minhas Redes</h5>
            <a class="btn btn-outline-dark me-2" href="#!"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-dark me-2" href="${data.html_url}" target="_blank"><i class="fab fa-github"></i></a>
            <a class="btn btn-outline-dark me-2" href="https://www.linkedin.com/in/matheus-dias-mendes-ba8a30234/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-outline-dark me-2" href="https://www.instagram.com/matheus_dm_/" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    `;
    document.getElementById("nav").innerHTML = profileHTML;
  });

  // Carregar repositórios do GitHub
  loadData("https://api.github.com/users/Matheus-Spirit/repos", data => {
    let reposHTML = '';
    data.forEach(repo => {
      reposHTML += `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">${repo.description || 'No description available'}</p>
              <p><strong>Forks:</strong> ${repo.forks_count}</p>
              <a href="${repo.html_url}" class="btn btn-outline-dark" target="_blank">View Repository</a>
            </div>
          </div>
        </div>`;
    });
    document.getElementById("repositorios").innerHTML = reposHTML;
  });

});