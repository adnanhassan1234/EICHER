import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Eicher Engines",
    link: "/eicher-engines",
    dropdown: [
      { name: "Our Journey", link: "/our-journey" },
      { name: "Technology", link: "/technology" },
      { name: "Nayi Soch", link: "/nayi-soch" },
      { name: "Social initiatives", link: "/social-initiatives" },
      { name: "Sustainability", link: "/sustainability" },
    ],
  },
  {
    title: "Eicher Genset",
    link: "/eicher-genset",
    dropdown: [
      { name: "Heavy Duty Trucks", link: "/heavy-duty-trucks" },
      { name: "Light & Medium Duty Trucks", link: "/light-medium-trucks" },
      { name: "Buses", link: "/buses" },
      { name: "Special Applications", link: "/special-applications" },
    ],
  },
  { title: "Our Services", link: "/our-services" },
  { title: "Blog", link: "/blog" },
  { title: "Our Story", link: "/our-story" },
];

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("navbar-transparent");
        } else {
          navbar.classList.remove("navbar-transparent");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="https://test3.devarx.org/assets/img/logo-transparent.png"
            alt="logo"
            className="img-fluid lgo_width"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="align-items-center justify-content-center m-auto mb-2 mb-lg-0 me-auto navbar-nav gap-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item text-uppercase-large fw-semibold ${
                  item.dropdown ? "dropdown" : ""
                }`}
              >
                <Link
                  className={`nav-link text-dark ${
                    item.dropdown ? "dropdown-toggle" : ""
                  }`}
                  to={item.link}
                  role={item.dropdown ? "button" : undefined}
                  data-bs-toggle={item.dropdown ? "dropdown" : undefined}
                  aria-expanded="false"
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <ul className="dropdown-menu custom-dropdown-menu">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <li key={idx}>
                        <Link className="dropdown-item" to={dropdownItem.link}>
                          {dropdownItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-4">
            <span className="text-uppercase-large fw-semibold">Contact Us</span>
            <div className="navbar-divider border_top"></div>
            <form className="d-flex" role="search">
              <FaSearch />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
