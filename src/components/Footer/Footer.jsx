const footerLinks = [
  { text: "Home", href: "" },
  { text: "Our service", href: "#" },
  { text: "About us", href: "#" },
  { text: "Blogs", href: "/blog" },
  { text: "Contact us", href: "#" },
];

const powerGenerationLinks = [
  { text: "30kva", href: "" },
  { text: "40kva", href: "#" },
  { text: "62.5kva", href: "#" },
  { text: "82.5kva", href: "#" },
  { text: "125kva", href: "#" },
  { text: "160kva", href: "#" },
];

const industrialLinks = [
  { text: "56kw", href: "#" },
  { text: "74kw", href: "#" },
  { text: "101kw", href: "#" },
];

const agriculturalMachineryLinks = [
  { text: "38-103hp", href: "#" },
  { text: "105-106hp", href: "#" },
  { text: "156-225hp", href: "#" },
];

const gensetLinks = [
  {
    text: "25kva",
    href: "",
  },
  { text: "30kva", href: "" },
  { text: "45kva", href: "#" },
  { text: "60kva", href: "#" },
  { text: "82.5kva", href: "#" },
  { text: "100kva", href: "#" },
  { text: "125kva", href: "#" },
  { text: "160kva", href: "#" },
];

const marineLinks = [
  { text: "38-131hp", href: "#" },
  { text: "105-194hp", href: "#" },
  { text: "156-259hp", href: "#" },
];

const pumpingSetLinks = [
  { text: "38-103hp", href: "#" },
  { text: "105-106hp", href: "#" },
  { text: "156-225hp", href: "#" },
];

const Footer = () => {
  return (
    <footer>
      <section className="footer-section p-2">
        <div className="container text-start mt-5">
          <div className="row mt-3">
            <div className="col-lg-2  col-sm-6 mx-auto mb-4 pr-flink">
              <div className="single-footer-widget">
                <h4 className="fw-semibold mb-2 text-white footer-accordian">
                  Our Links
                </h4>
                <ul className="footer-accordion-content list-unstyled">
                  {footerLinks.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href={link.href}
                        className="text-white text-decoration-none"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2  col-sm-6 mx-auto mb-4">
              <h4 className="fw-semibold mb-2 text-white">Power Generation</h4>
              {powerGenerationLinks.map((link, index) => (
                <p key={index} className="mb-2">
                  <a
                    href={link.href}
                    className="text-reset text-decoration-none"
                  >
                    {link.text}
                  </a>
                </p>
              ))}
            </div>

            <div className="col-lg-2  col-sm-6 mx-auto mb-4">
              <div className="d-flex flex-column">
                <h4 className="fw-semibold mb-2 text-white">Industrial</h4>
                {industrialLinks.map((link, index) => (
                  <p key={index} className="mb-2">
                    <a
                      href={link.href}
                      className="text-reset text-decoration-none"
                    >
                      {link.text}
                    </a>
                  </p>
                ))}
              </div>
              <div className="d-flex flex-column mt-4">
                <h4 className="fw-semibold mb-2 text-white">
                  Agricultural Machinery
                </h4>
                {agriculturalMachineryLinks.map((link, index) => (
                  <p key={index} className="mb-2">
                    <a
                      href={link.href}
                      className="text-reset text-decoration-none"
                    >
                      {link.text}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="col-lg-2  col-sm-6 mx-auto mb-4">
              <h4 className="fw-semibold mb-2 text-white">Genset</h4>
              {gensetLinks.map((link, index) => (
                <p key={index} className="mb-2">
                  <a
                    href={link.href}
                    className="text-reset text-decoration-none"
                  >
                    {link.text}
                  </a>
                </p>
              ))}
            </div>

            <div className="col-lg-4  col-sm-12 mx-auto mb-4">
              <div className="column-footer">
                <div className="d-flex flex-column">
                  <h4 className="fw-semibold mb-2 text-white">Marine</h4>
                  {marineLinks.map((link, index) => (
                    <p key={index} className="mb-2">
                      <a
                        href={link.href}
                        className="text-reset text-decoration-none"
                      >
                        {link.text}
                      </a>
                    </p>
                  ))}
                </div>
                <div className="d-flex flex-column mt-4">
                  <h4 className="fw-semibold mb-2 text-white">Pumping Set</h4>
                  {pumpingSetLinks.map((link, index) => (
                    <p key={index} className="mb-2">
                      <a
                        href={link.href}
                        className="text-reset text-decoration-none"
                      >
                        {link.text}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-column mt-4 mb-5">
                <h6 className="fw-semibold mb-2 text-white text-uppercase">
                  LET &apos; STAY IN TOUCH
                </h6>
                <div className="d-flex">
                  <form className="w-100">
                    <div className="input-group gap-2">
                      <input
                        type="text"
                        className="form-control bg-black form-control rounded-2 text-white"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Enter your email"
                        style={{ border: "1px solid white" }}
                      />
                      <button className="footer-button" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="d-flex flex-column mt-4">
                <h6 className="fw-semibold mb-2 text-white text-uppercase">
                  CONNECT WITH US
                </h6>
                <div className="d-flex flex-row gap-4">
                  <img
                    src="https://test3.devarx.org/assets/img/facebook-icon.svg"
                    className="social-icon"
                    alt="facebook"
                  />
                  <img
                    src="https://test3.devarx.org/assets/img/linkedin-icon.svg"
                    className="social-icon"
                    alt="linkedin"
                  />
                  <img
                    src="https://test3.devarx.org/assets/img/youtube-icon.svg"
                    className="social-icon"
                    alt="youtube"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container copyright-section">
        <div className="text-center d-flex flex-column flex-md-row justify-content-between align-items-center copyright-section-wrapper">
          <div className="mb-2 mb-md-0">
            <img
              src="https://test3.devarx.org/assets/img/footer-logo.png"
              alt="logo"
              width="400"
            />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <span className="fw-semibold">
              © 2024 Eicher. All rights reserved.
            </span>
            <div
              className="footer-divider d-none d-md-block"
              style={{ borderLeft: "1px solid black", height: "16px" }}
            ></div>
            <a className="fw-semibold text-decoration-none text-reset" href="#">
              Privacy Policy
            </a>
            <div
              className="footer-divider d-none d-md-block"
              style={{ borderLeft: "1px solid black", height: "16px" }}
            ></div>
            <a className="fw-semibold text-decoration-none text-reset" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
