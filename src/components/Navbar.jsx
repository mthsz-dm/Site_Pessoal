import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#repositorios">
              {t("nav_rep")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">
              {t("nav_contat")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#habilidades">
              {t("nav_hab")}
            </a>
          </li>
          <li>
            <div>
              <button onClick={() => i18n.changeLanguage("pt")}>PT</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
