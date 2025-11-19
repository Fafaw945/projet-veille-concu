import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Veille Client</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/comparatif">Comparatifs</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/apple">Apple</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/conclusion">Conclusion</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
