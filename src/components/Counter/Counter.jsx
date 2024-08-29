import { useEffect } from "react";
import Technology from "../Technology/Technology";

const stats = [
  {
    imgSrc: "https://test3.devarx.org/assets/img/engine-manufactured.svg",
    altText: "engine manufactured",
    count: 4784,
    label: "Engines Manufactured",
  },
  {
    imgSrc: "https://test3.devarx.org/assets/img/new-product-launche.svg",
    altText: "product launches",
    count: 497,
    label: "New Product Launches",
  },
  {
    imgSrc: "https://test3.devarx.org/assets/img/happy-client.svg",
    altText: "happy client",
    count: 9876,
    label: "Happy Clients",
  },
  {
    imgSrc: "https://test3.devarx.org/assets/img/partner.svg",
    altText: "partners",
    count: 345,
    label: "Partners",
  },
];

const Counter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".count");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);
  return (
    <>
      <section
        id="statistic-section"
        className="d-flex align-items-center bg-red"
      >
        <div className="container p-5">
          <div className="row align-items-center justify-content-center text-center text-md-start">
            {stats.map((stat, index) => (
              <div
                className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0"
                key={index}
              >
                <div className="d-flex align-items-center position-relative">
                  <div className="d-flex gap-4 align-items-center me-4">
                    <img
                      src={stat.imgSrc}
                      alt={stat.altText}
                      className="bg-white p-2 rounded-2"
                    />
                    <div className="d-flex flex-column text-white">
                      <div className="d-flex flex-row gap-1">
                        <h3
                          className="mb-1 text-start fw-semibold fs-2 count"
                          data-target={stat.count}
                        >
                          0
                        </h3>
                        <img
                          src="https://test3.devarx.org/assets/img/plus.svg"
                          alt="plus"
                        />
                      </div>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div
                      className="d-none d-lg-block position-absolute end-0 top-0 bottom-0"
                      style={{
                        borderRight: "3px solid #F26264",
                        height: "100%",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Technology />
    </>
  );
};

export default Counter;
