import DownloadBro from "../Download Brochure/DownloadBro";
import Enquiry from "../Enquiry/Enquiry";
import PowerGenDetails from "./PowerGenDetails";
import EngineTabs from "./Tabs/EngineTabs";

const specifications = [
  { label: "Engine-Type", value: "Diesel Engine" },
  { label: "Output-Range", value: "38 HP/28kWm" },
  { label: "Displacement", value: "3.3 liters" },
  { label: "RPM/Hz", value: "1500/50 Hz" },
  { label: "Emission Compliant", value: "CPCB IV" },
];
const PowerHeading = {
  title: "30kva",
  des: `Compact and efficient, "Volvo-Eicher Engine’s 30kVA , CPCB IV diesel power generation engine ensures reliable performance, ideal for diverse applications, ensuring seamless power supply in various settings. Designed with advanced engineering principles, this engine offers superior fuel efficiency, robust reliability, and stable power output. The Volvo-Eicher Engine’s state-of-the-art technology ensures optimal performance and uninterrupted power supply, making it an optimal solution for high-demand power generation applications.`,
};

const tableData = [
  { field: "Mechanical Output", feature: "28 kWm" },
  { field: "Electrical Output", feature: "30kVA/24kWe" },
  { field: "Rated Speed", feature: "1500 RPM" },
  { field: "Gross Power (HP)", feature: "38" },
  { field: "Emissions Compliant", feature: "CPCB IV" },
];

const PowerGenEngine = () => {
  return (
    <section className="Power_generation">
      <PowerGenDetails
        PowerHeading={PowerHeading}
        specifications={specifications}
      />
      <EngineTabs tableData={tableData} />
      <DownloadBro />
      <Enquiry title="Request a Quote" />
    </section>
  );
};

export default PowerGenEngine;
