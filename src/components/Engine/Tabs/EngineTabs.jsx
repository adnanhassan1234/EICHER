const EngineTabs = ({tableData}) => {


  return (
    <section id="specification-section" className="d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center mb-4">
          <div className="col-12 col-md-8 mb-md-0">
            <ul className="nav nav-pills nav-fill" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#technical-specifications"
                  aria-selected="true"
                  role="tab"
                >
                  Technical Specifications
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#general-specifications"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  General Specifications
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#engine-specifications"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  Engine Specifications
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12 mb-md-0">
            <div className="tab-content mt-4">
              <div
                className="tab-pane fade show active"
                id="technical-specifications"
                role="tabpanel"
              >
                <div className="table-responsive-sm">
                  <table className="table table-bordered mt-3">
                    <thead className="table-header">
                      <tr>
                        <th>Field Set</th>
                        <th>Feature</th>
                        <th>30kVA CPCB IV Engine</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          {index === 0 && (
                            <td rowSpan={tableData.length}>
                              Technical Specifications
                            </td>
                          )}
                          <td>{row.field}</td>
                          <td>{row.feature}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="general-specifications"
                role="tabpanel"
              >
              <table className="table table-bordered mt-3">
              <thead className="table-header">
                <tr>
                  <th>Field Set</th>
                  <th>Feature</th>
                  <th>30kVA CPCB IV Engine</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <td rowSpan={tableData.length}>
                      General Specifications
                      </td>
                    )}
                    <td>{row.field}</td>
                    <td>{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
              </div>
              <div
                className="tab-pane fade"
                id="engine-specifications"
                role="tabpanel"
              >
              <table className="table table-bordered mt-3">
              <thead className="table-header">
                <tr>
                  <th>Field Set</th>
                  <th>Feature</th>
                  <th>30kVA CPCB IV Engine</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <td rowSpan={tableData.length}>
                      Engine Specifications
                      </td>
                    )}
                    <td>{row.field}</td>
                    <td>{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineTabs;
