const Enquiry = ({title}) => {
  return (
    <section id="enquiry-section" className="d-flex align-items-center">
      <div className="container p-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-12 mb-4 mb-md-0 p-0">
            <div className="p-4">
              <h4 className="text-center">{title}</h4>
              <div
                id="mauticform_wrapper_websitewebsiteforms"
                className="mauticform_wrapper mt-5"
              >
                <form method="post">
                  <div
                    className="mauticform-error"
                    id="mauticform_websitewebsiteforms_error"
                  ></div>
                  <div
                    className="mauticform-message"
                    id="mauticform_websitewebsiteforms_message"
                  ></div>
                  <div className="mauticform-innerform">
                    <div
                      id="mauticform_websitewebsiteforms_first_name"
                      data-validate="first_name"
                      data-validation-type="text"
                      className="mauticform-row mauticform-text mauticform-field-1 mauticform-required"
                    >
                      <label
                        id="mauticform_label_websitewebsiteforms_first_name"
                        htmlFor="mauticform_input_websitewebsiteforms_first_name"
                        className="mauticform-label"
                      >
                        First Name
                      </label>
                      <input
                        id="mauticform_input_websitewebsiteforms_first_name"
                        name="mauticform[first_name]"
                        className="mauticform-input"
                        type="text"
                        placeholder="Enter your Name"
                        required
                      />
                      <span
                        className="mauticform-errormsg"
                        style={{ display: "none" }}
                      >
                        This is required.
                      </span>
                    </div>
                    <div
                      id="mauticform_websitewebsiteforms_email_id"
                      data-validate="email_id"
                      data-validation-type="email"
                      className="mauticform-row mauticform-email mauticform-field-2 mauticform-required"
                    >
                      <label
                        id="mauticform_label_websitewebsiteforms_email_id"
                        htmlFor="mauticform_input_websitewebsiteforms_email_id"
                        className="mauticform-label"
                      >
                        Email
                      </label>
                      <input
                        id="mauticform_input_websitewebsiteforms_email_id"
                        name="mauticform[email_id]"
                        className="mauticform-input"
                        type="email"
                        required
                        placeholder="Enter your Email Id"
                      />
                      <span
                        className="mauticform-errormsg"
                        style={{ display: "none" }}
                      >
                        This is required.
                      </span>
                    </div>
                    <div
                      id="mauticform_websitewebsiteforms_contact_number"
                      data-validate="contact_number"
                      data-validation-type="text"
                      className="mauticform-row mauticform-text mauticform-field-3 mauticform-required"
                    >
                      <label
                        id="mauticform_label_websitewebsiteforms_contact_number"
                        htmlFor="mauticform_input_websitewebsiteforms_contact_number"
                        className="mauticform-label"
                      >
                        Contact Number
                      </label>
                      <input
                        id="mauticform_input_websitewebsiteforms_contact_number"
                        name="mauticform[contact_number]"
                        className="mauticform-input"
                        type="text"
                        placeholder="Enter your Contact"
                        required
                      />
                      <span
                        className="mauticform-errormsg"
                        style={{ display: "none" }}
                      >
                        This is required.
                      </span>
                    </div>
                    <div
                      id="mauticform_websitewebsiteforms_submit"
                      className="mauticform-row mauticform-button-wrapper mauticform-field-4 submit-container mt-4 gap-2"
                    >
                      <button
                        type="submit"
                        name="mauticform[submit]"
                        id="mauticform_input_websitewebsiteforms_submit"
                        className="mauticform-button btn btn-default w-50 align-items-center gap-2"
                      >
                        Submit
                        <img
                          className="mauticform-arrow"
                          src="https://test3.devarx.org/assets/img/arrow.svg"
                          alt="arrow"
                        />
                      </button>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="mauticform[formId]"
                    id="mauticform_websitewebsiteforms_id"
                    value="34"
                  />
                  <input
                    type="hidden"
                    name="mauticform[return]"
                    id="mauticform_websitewebsiteforms_return"
                  />
                  <input
                    type="hidden"
                    name="mauticform[formName]"
                    id="mauticform_websitewebsiteforms_name"
                    value="websitewebsiteforms"
                  />
                  <input
                    type="hidden"
                    name="mauticform[messenger]"
                    id="mauticform_websitewebsiteforms_messenger"
                    value="1"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
