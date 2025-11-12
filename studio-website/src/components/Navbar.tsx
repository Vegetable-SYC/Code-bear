import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">我的工作室</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">首页</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/downloads">资料下载</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/online-tools">在线工具</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">项目介绍</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">团队介绍</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
