import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed"
      style={{
        backgroundColor: props.darkMode.navbarBg,
        color: props.darkMode.textColor,
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 5,
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand mx-1"
          href="#home"
          style={{
            backgroundColor: props.darkMode.navbarBg,
            color: props.darkMode.textColor,
          }}
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler border border-success"
          style={{backgroundColor: "white"}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <a
                className="nav-link"
                href="#about"
                style={{
                  backgroundColor: props.darkMode.navbarBg,
                  color: props.darkMode.textColor,
                }}
              >
                About
              </a>
            </li>
          </ul>
          <h5 className="mx-2">Theme</h5>
          <div>
            <button
              type="button"
              className="btn btn-primary mx-1"
              style={{backgroundColor: "#713045"}}
              onClick={() => props.setTheme(props.theme1)}
            >
              1
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1"
              style={{backgroundColor: "#27496D"}}
              onClick={() => props.setTheme(props.theme2)}
            >
              2
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1"
              style={{backgroundColor: "#2C394B"}}
              onClick={() => props.setTheme(props.theme3)}
            >
              3
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1"
              style={{backgroundColor: "grey"}}
              onClick={() => props.setTheme(props.theme4)}
            >
              4
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils",
};
