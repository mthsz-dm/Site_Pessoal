import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://api.github.com/users/mthsz-dm/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="section" id="repositorios">
      <h2>{t("repositorios")}</h2>
      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="card h-100">
            <div className="card-body">
              <img
                className="repo-img"
                src={`https://opengraph.githubassets.com/1/mthsz-dm/${repo.name}`}
                alt={repo.name}
              />

              <h5 className="card-title">{repo.name}</h5>
              <br />
              <p className="card-text">{repo.description || "Sem descrição"}</p>
              <span>💻 {repo.language || "N/A"}</span>
              <br />
              <a href={repo.html_url} target="_blank" className="btn-custom">
              {t('ver_no_git')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
