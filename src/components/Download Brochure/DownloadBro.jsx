const DownloadBro = () => {
  return (
    <section id="brochure-section" className="d-flex align-items-center">
      <div className="container p-5">
        <div className="row align-items-center justify-content-center text-center mb-4">
          <div className="col-12 col-md-8 mb-4">
            <h2 className="fw-semibold">Download Brochure</h2>
            <span>
              Click the button below to begin downloading the brochure
            </span>
          </div>
          <div className="col-12">
            <button
              type="button"
              className="btn btn-lg bg-red text-white align-items-center mb-4 justify-content-between"
              data-bs-toggle="modal"
              data-bs-target="#brochureModal"
            >
              <span>Download Brochure</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="rounded-1 bg-white ms-2"
              >
                <path
                  fill="#E33239"
                  d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBro;
