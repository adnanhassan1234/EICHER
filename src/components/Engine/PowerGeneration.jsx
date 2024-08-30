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
  title: "25kva",
  des: `The 25kVA CPCB IV-compliant Volvo-Eicher Engines” features advanced turbocharging and inter cooling systems. Engineered to  meet stringent emissions regulations, this engine provides   exceptional fuel efficiency, enhanced operational reliability, and   consistent power delivery. With its cutting-edge technology, the  Volvo-Eicher Engine ensures stable performance and minimal downtime, making it an ideal choice for critical power generation   needs.`,
};

const tableData = [
  { field: "Mechanical Output", feature: "28 kWm" },
  { field: "Electrical Output", feature: "30kVA/24kWe" },
  { field: "Rated Speed", feature: "1500 RPM" },
  { field: "Gross Power (HP)", feature: "38" },
  { field: "Emissions Compliant", feature: "CPCB IV" },
];

const PowerGeneration = () => {
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

export default PowerGeneration;
