const Technology = () => {
  return (
    <section id="blog-section" className="d-flex align-items-center mt-3">
      <div className="container p-5">
        <div className="row align-items-center justify-content-center text-center text-md-start">
          <div className="col-12 col-md-6 mb-md-0 d-flex justify-content-center position-relative mb-4">
            <div className="image-content"></div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item video-outline"
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/6w20GMJKKho"
                title="Eicher Power Solutions"
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-md-0 text-start mb-4">
            <h3 className="fw-semibold">
              Engine Technology Meets Global Excellence
            </h3>
            <div className="gap-4 mt-4 mb-4">
              <p>
                At Eicher Power Solutions, we believe in more than just
                providing power; we empower industries, businesses, and
                communities to thrive. Join us in this journey where every
                engine is a testament to our commitment where power isn &apos;t
                just a commodity, but a catalyst for progress.
              </p>
              <p>
                Eicher &apos; diverse engine ranges power the heartbeat of
                multiple industries across India, seamlessly integrating
                precision and power. Welcome to a world where Eicher redefines
                engine technology and power generation - your quintessential
                partner offering unparalleled performance, efficiency, and
                sustainability.
              </p>
            </div>
            <a
              href="#"
              className="btn bg-red text-white align-items-center mb-4 btn-lg justify-content-between"
            >
              Know More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="ms-2 bg-white rounded-1"
              >
                <path
                  fill="#E62F32"
                  d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
