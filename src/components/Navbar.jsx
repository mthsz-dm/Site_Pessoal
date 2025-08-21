export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">Matheus Dias Mendes</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#repositorios">Repositórios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">Contato</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
