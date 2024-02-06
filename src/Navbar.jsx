function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          לזכר הדר קפלוק ז״ל
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                בית
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                סיפורים על הדר
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                מדבקות בעולם
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                כותבים להדר
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
