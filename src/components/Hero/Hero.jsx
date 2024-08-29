const carouselItems = [
  {
    title: "Eicher Power Solutions",
    subtitle: "Your Power Partner",
    description: "Redefining Engine Technology & Power Generation",
    imgSrc: "https://test3.devarx.org/assets/img/slider-img-1.svg",
    btnLink: "#",
    btnText: "Know More",
  },
  {
    title: "Precision Engines",
    subtitle: "Endless Possibilities",
    description: "Precision Engines for a Wide Range of Applications",
    imgSrc: "https://test3.devarx.org/assets/img/slider-img-1.svg",
    btnLink: "#",
    btnText: "Know More",
  },
  {
    title: "Powering",
    subtitle: "Beyond Boundaries",
    description: "Powering Industries, Seascapes, and Fields",
    imgSrc: "https://test3.devarx.org/assets/img/slider-img-1.svg",
    btnLink: "#",
    btnText: "Know More",
  },
  {
    title: "Marine",
    subtitle: "Mastery",
    description: "Propelling Seas with Cutting-edge Engine Technology",
    imgSrc: "https://test3.devarx.org/assets/img/slider-img-1.svg",
    btnLink: "#",
    btnText: "Know More",
  },
  {
    title: "Agriculture Engines",
    subtitle: "Redefined",
    description: "Sowing Growth, Harvesting Prosperity",
    imgSrc: "https://test3.devarx.org/assets/img/slider-img-1.svg",
    btnLink: "#",
    btnText: "Know More",
  },
];

const Hero = () => {
  return (
    <section id="hero-section" className="d-flex align-items-center py-5">
      <div className="container justify-content-center align-items-center p-5 hero_container">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-item${index === 0 ? " active" : ""}`}
              >
                <div className="row align-items-center justify-content-center text-center text-md-start">
                  <div className="col-sm-6 col-md-6 mb-md-0">
                    <h1 className="mb-4">
                      <span className="fw-semibold title_top">
                        {item.title}
                      </span>
                      <br />
                      {item.subtitle}
                      <br />
                      {item.subtitle ? "" : ""}
                    </h1>
                    <h6 className="mb-4">{item.description}</h6>
                    <a
                      href={item.btnLink}
                      className="btn btn-lg bg-red align-items-center text-white mb-4 justify-content-between"
                    >
                      <span>{item.btnText}</span>
                      <img
                        src="https://test3.devarx.org/assets/img/double-arrow-icon.svg"
                        alt="arrow"
                        className="p-1 ms-2 bg-white rounded-1"
                      />
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <img
                      src={item.imgSrc}
                      alt="eicher-item"
                      className="img-fluid w-75"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
