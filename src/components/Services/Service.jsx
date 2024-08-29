import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: 1,
    title: "Service Network",
    image: "https://test3.devarx.org/assets/img/service/service-network.png",
    icon: "https://test3.devarx.org/assets/img/service/track.svg",
    altText: "Service",
  },
  {
    id: 2,
    title: "Genuine Parts",
    image: "https://test3.devarx.org/assets/img/service/genuine-parts.png",
    icon: "https://test3.devarx.org/assets/img/service/track.svg",
    altText: "Genuine-parts",
  },
  {
    id: 3,
    title: "Training",
    image: "https://test3.devarx.org/assets/img/service/training.png",
    icon: "https://test3.devarx.org/assets/img/service/track.svg",
    altText: "Training",
  },
  {
    id: 4,
    title: "Warranty",
    image: "https://test3.devarx.org/assets/img/service/service-network.png",
    icon: "https://test3.devarx.org/assets/img/service/track.svg",
    altText: "Warranty",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Large screens
  slidesToScroll: 1,
  arrows: true,

  responsive: [
    {
      breakpoint: 991, // Medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767, // Small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Service = () => {
  return (
    <section id="service-section" className="d-flex align-items-center">
      <div className="container p-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-between mb-4">
            <h2 className="fw-semibold">Our Services</h2>
            <button className="btn bg-white border text-dark align-items-center mb-4 d-flex justify-content-between">
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="ms-2 bg-red rounded-1"
              >
                <path
                  fill="#fff"
                  d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="slide-container">
            <Slider {...settings}>
              {services.map((service) => (
                <div key={service.id} className="card">
                  <img
                    src={service.image}
                    className="card-image"
                    alt={service.altText}
                  />
                  <div className="left-circle d-flex justify-content-center align-items-center shadow bg-red">
                    <img
                      src={service.icon}
                      alt="ship"
                      className="circle-icon"
                    />
                  </div>
                  <div className="card-content mt-4 gap-2">
                    <h2 className="name">{service.title}</h2>
                    <a
                      href="#"
                      className="btn border bg-white w-50 d-flex align-items-center justify-content-between mb-4"
                    >
                      <span>Know More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="ms-2 bg-secondary rounded-1"
                      >
                        <path
                          fill="#fff"
                          d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
