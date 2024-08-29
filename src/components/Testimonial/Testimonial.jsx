import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "The Generator performance in terms of Fuel Consumption, Sound levels, and overall Performance have been good. The gensets have clocked average 20000 hours continuously running without opening of engine or top overhaul, in the peak summer site conditions.",
    isActive: false,
  },
  {
    id: 2,
    text: "Engines are very robust and we are delighted with the performance of the DG sets. A well-established service network with 24 x7 round the clock attends the concerns within SLAs. We are very much satisfied with the product performance and services.",
    isActive: true,
  },
  {
    id: 3,
    text: "We appreciate the quality of the product and endorse a product that has low operating costs and has no breakdown.",
    isActive: false,
  },
  {
    id: 4,
    text: "I must say that the service team provides timely service support and effectively diagnoses and resolves the issues with minimum downtime of our customer equipment as and when required. We wish for looking forward to continuous support and expect the exceptional support for our next BS-V implementation projects.",
    isActive: false,
  },
  {
    id: 5,
    text: "We appreciate the technology used by Eicher which ensures no breakdown, low maintenance cost, and better fuel efficiency.",
    isActive: false,
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonial-section" className="d-flex align-items-center testmonial my-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 mb-4 text-center">
            <h2 className="fw-semibold">Testimonials</h2>
            <span>
              Discover What Our Clients Say About Their Success Stories
            </span>
          </div>
          <div className="col-12 col-md-8 position-relative d-flex align-items-center justify-content-center mb-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`card shadow p-4 w-100 testimonial-card ${
                  index === activeIndex ? "" : "d-none"
                }`}
                id={`testimonial-card-${testimonial.id}`}
              >
                <img
                  src="https://test3.devarx.org/assets/img/testimonial/quote-mark.svg"
                  className="quote-mark"
                  width="45"
                  alt="quotation-mark"
                />
                <div className="card-body">
                  <p className="testimonial-description">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-8 position-relative d-flex align-items-center justify-content-center mb-4 gap-4">
            <svg
              id="prev-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              transform="rotate(180)"
              viewBox="0 0 24 24"
              className="border"
              style={{ cursor: "pointer" }}
              onClick={handlePrevClick}
            >
              <path
                fill="#3F3F3F"
                d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
              />
            </svg>
            <svg
              id="next-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="border"
              style={{ cursor: "pointer" }}
              onClick={handleNextClick}
            >
              <path
                fill="#3F3F3F"
                d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
