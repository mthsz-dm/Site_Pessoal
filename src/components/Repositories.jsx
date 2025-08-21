import { useEffect, useState } from "react"

export default function Repositories() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/mthsz-dm/repos")
      .then(res => res.json())
      .then(data => setRepos(data))
  }, [])

  return (
    <section className="section" id="repositorios">
    <h2>Repositórios</h2>
    <div className="repo-grid">
        {repos.map(repo => (
        <div key={repo.id} className="card h-100">
            <div className="card-body">
            <h5 className="card-title">{repo.name}</h5><br />
            <p className="card-text">{repo.description || "Sem descrição"}</p>
            <a href={repo.html_url} target="_blank" className="btn-custom">
                Ver no GitHub
            </a>
            </div>
        </div>
        ))}
    </div>
    </section>
  )
}
