const products = [
  {
    title: "Power Generation",
    imgSrc: "https://test3.devarx.org/assets/img/product/power-generation.png",
    altText: "power generation",
    link: "https://test3.devarx.org/power-generation",
  },
  {
    title: "Industrial",
    imgSrc: "https://test3.devarx.org/assets/img/product/power-generation.png",
    altText: "industrial",
  },
  {
    title: "Marine",
    imgSrc: "https://test3.devarx.org/assets/img/product/marine.png",
    altText: "marine",
  },
  {
    title: "Agricultural",
    imgSrc: "https://test3.devarx.org/assets/img/product/agricultural.png",
    altText: "agricultural",
  },
  {
    title: "Pumping Set",
    imgSrc: "https://test3.devarx.org/assets/img/product/pumping-set.png",
    altText: "pumping set",
  },
  {
    title: "Genset",
    imgSrc: "https://test3.devarx.org/assets/img/product/genset.png",
    altText: "genset",
  },
];

const Gallery = () => {
  return (
    <section id="product-section" className="d-flex align-items-center">
      <div className="container-fluid p-5">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12 mb-4">
            <h2 className="fw-semibold">Powerful Engines, Efficient Gensets</h2>
            <span>VECV Engines & Gensets Tailored for Every Sector</span>
          </div>
          <div className="col-12">
            <div className="row">
              {products.map((product, index) => (
                <div className="col-12 col-md-4 col-lg-2 mb-4" key={index}>
                  <div className="card w-100 h-100">
                    <div className="card-top-bg h-100">
                      <img
                        src={product.imgSrc}
                        className="card-img-top m-auto p-4 h-100"
                        alt={product.altText}
                      />
                    </div>
                    <div className="card-body align-items-center d-flex justify-content-between">
                      <h6 className="fw-semibold text-start mn-0">
                        {product.title}
                      </h6>
                      {product.link ? (
                        <a href={product.link}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5em"
                            height="1.5em"
                            className="border rounded-1"
                            viewBox="0 0 24 24"
                            style={{ cursor: "pointer" }}
                          >
                            <path
                              fill="#E33239"
                              d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
                            ></path>
                          </svg>
                        </a>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5em"
                          height="1.5em"
                          className="border rounded-1"
                          viewBox="0 0 24 24"
                          style={{ cursor: "pointer" }}
                        >
                          <path
                            fill="#E33239"
                            d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
