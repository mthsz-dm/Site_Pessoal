document.addEventListener("DOMContentLoaded", () => {
  // Função genérica para carregar dados via fetch
  function loadData(url, callback) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => callback(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }

  // Carregar perfil do GitHub
  loadData("https://api.github.com/users/Matheus-Spirit", data => {
    const profileHTML = `
      <div class="jumbotron text-left p-4">
        <h2 class="pb-2 mb-4 border-bottom">Perfil</h2>
        <div class="row align-items-center">
          <div class="col-md-3 text-center">
            <img src="${data.avatar_url}" class="d-block img-fluid rounded-circle" alt="Matheus">
          </div>
          <div class="col-md-9">
            <h2>${data.name || 'Usuário sem nome'}</h2>
            <p>${data.bio || 'Sem biografia disponível'}</p>
            <a class="btn btn-outline-dark me-2" href="${data.html_url}" target="_blank"><i class="fab fa-github"></i></a>
            <a class="btn btn-outline-dark me-2" href="https://www.linkedin.com/in/matheus-dias-mendes-ba8a30234/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-outline-dark me-2" href="https://www.instagram.com/matheus_dm_/" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    `;
    document.getElementById("nav").innerHTML = profileHTML;
  });

  // Carregar repositórios
  loadData("https://api.github.com/users/Matheus-Spirit/repos", data => {
    let reposHTML = '';
    data.forEach(repo => {
      reposHTML += `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">${repo.description || 'Sem descrição disponível'}</p>
              <a href="repo.html?repo=${repo.name}" class="btn btn-outline-dark">Ver Repositório</a>
            </div>
          </div>
        </div>`;
    });
    document.getElementById("repositorios").innerHTML = reposHTML;
  });

  // Carregar detalhes do repositório na página repo.html
  const params = new URLSearchParams(window.location.search);
  const repoName = params.get('repo');

  if (repoName) {
    loadData(`https://api.github.com/repos/Matheus-Spirit/${repoName}`, data => {
      document.getElementById('repo-name').textContent = `${data.name}`;
      document.getElementById('repo-description').textContent = data.description || 'Sem descrição disponível';
      document.getElementById('repo-created-at').textContent = new Date(data.created_at).toLocaleDateString();
      document.getElementById('repo-language').textContent = data.language || 'N/A';
      document.getElementById('repo-url').href = data.html_url;
      document.getElementById('repo-url').textContent = data.html_url;

      // Tópicos
      const topicsContainer = document.getElementById('repo-topics');
      topicsContainer.innerHTML = data.topics.length
        ? data.topics.map(topic => `<span class="badge bg-secondary me-1">${topic}</span>`).join('')
        : 'Sem tópicos';
    });
  }
});

// Função para redirecionar para o repositório
function redirectToRepo() {
  const repoUrl = document.getElementById('repo-url').href;
  window.open(repoUrl, '_blank');
}
