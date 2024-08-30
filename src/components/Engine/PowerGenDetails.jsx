

const PowerGenDetails = ({ specifications ,PowerHeading}) => {
    return (
      <section id="hero-section" className="d-flex align-items-center py-5">
        <div className="container p-5">
          <div className="row align-items-center justify-content-center text-center text-md-start">
            <div className="col-12 col-md-6 mb-md-0">
              <h1 className="mb-4 fw-bold">{PowerHeading?.title}</h1>
              <p className="mb-4">
              {PowerHeading?.des}
              </p>
              <div className="align-items-center justify-content-center">
                <h5 className="fw-semibold mb-2">Key Specifications</h5>
                <div className="container my-4 p-0">
                  <div className="row g-3">
                    {specifications?.map((spec, index) => (
                      <div
                        key={index}
                        className="col-12 col-sm-6 col-md-4 col-lg-4"
                      >
                        <div className="p-2 bg-white rounded">
                          <span className="text-red fw-semibold mb-1">
                            {spec.label}
                          </span>{" "}
                          <br />
                          <span className="fw-semibold">{spec.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button className="btn btn-lg bg-red text-white align-items-center mb-4 justify-content-between d-flex blog_button">
                <span>Get a Quote</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="bg-white rounded ms-2"
                >
                  <path
                    fill="#E33239"
                    d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="col-12 col-md-6 align-items-center justify-content-center text-center">
              <img
                src="https://test3.devarx.org/assets/img/power-generation/banner-img.png"
                alt="eicher-item"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PowerGenDetails;
  