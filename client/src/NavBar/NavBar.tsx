import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">Dashboard</li>
            <li className="nav-item">Events</li>
            <li className="nav-item">About</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
