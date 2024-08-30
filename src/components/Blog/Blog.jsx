const Blog = () => {
  return (
    <div className="blog_page">
      <section id="banner" className="py-5">
        <div className="container p-5  mt-5 d-flex align-items-center justify-content-center text-center gap-4">
          <h1 className="fw-bold">Blogs</h1>
          <span className="fw-semibold">
            Home / <span className="text-red">Blogs</span>
          </span>
        </div>
      </section>
      <section id="blog-card-section" className="d-flex align-items-center">
        <div className="container p-5">
          <div className="row align-items-start justify-content-center">
            <div className="col-12 col-md-8 mb-4">
              <div className="card mb-3">
                <img
                  src="https://test3.devarx.org/assets/img/blog/image.png"
                  className="card-img-top"
                  alt="blog post"
                />
                <div className="card-body">
                  <p className="card-text fw-semibold">
                    <img
                      src="https://test3.devarx.org/assets/img/ion--calendar-outline.svg"
                      alt="calendar"
                    />
                    <small className="ms-2 text-red">Feb 16, 2024</small>
                  </p>
                  <h5 className="card-title fw-semibold">
                    Title lorem ipsum dolor sit
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing enim ad
                    minim veniam, quis nostrud exercitation consequat. Lorem
                    ipsum dolor sit amet, consectetur adipiscing enim ad minim
                    veniam, quis nostrud exercitation consequat.
                  </p>
                </div>
              </div>
              <div className="card mb-3">
                <img
                  src="https://test3.devarx.org/assets/img/blog/image.png"
                  className="card-img-top"
                  alt="blog post"
                />
                <div className="card-body">
                  <p className="card-text fw-semibold">
                    <img
                      src="https://test3.devarx.org/assets/img/ion--calendar-outline.svg"
                      alt="calendar"
                    />
                    <small className="ms-2 text-red">Feb 16, 2024</small>
                  </p>
                  <h5 className="card-title fw-semibold">
                    Title lorem ipsum dolor sit
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing enim ad
                    minim veniam, quis nostrud exercitation consequat. Lorem
                    ipsum dolor sit amet, consectetur adipiscing enim ad minim
                    veniam, quis nostrud exercitation consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div
                className="card text-dark bg-light mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header block-header fw-bold">
                  Recent Post
                </div>
                <div className="card-body block-body">
                  <div className="d-flex mb-3">
                    <div className="col-5">
                      <img
                        src="https://test3.devarx.org/assets/img/blog/image-card.png"
                        className="img-fluid rounded-2"
                        alt="blog"
                      />
                    </div>
                    <div className="col-7 ps-3">
                      <p className="card-text mb-0 text-sm">
                        Lorem ipsum dolor sit amet secsstetur adipiscing
                      </p>
                      <p>
                        <small className="text-muted text-xs">May 2021</small>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-5">
                      <img
                        src="https://test3.devarx.org/assets/img/blog/image-card.png"
                        className="img-fluid rounded-2"
                        alt="blog"
                      />
                    </div>
                    <div className="col-7 ps-3">
                      <p className="card-text mb-0 text-sm">
                        Lorem ipsum dolor sit amet secsstetur adipiscing
                      </p>
                      <p>
                        <small className="text-muted text-xs">May 2021</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
