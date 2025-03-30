import { TiTick } from "react-icons/ti";
import labledDashboard from "../assets/images/labledDashboard.png";
import viewBranch from "../assets/images/viewBranch.png";
function DocsBody() {
  const procedures = [
    {
      //image: "",
      title: "Introduction",
      description:
        "Pharmatich is an all-in-one solution designed to streamline and optimize your pharmacy operations. Whether you're managing a single location or multiple branches, our system simplifies the process of inventory management, prescription tracking, customer service, and regulatory compliance. Pharmatic with pharmacists, healthcare providers, and pharmacy staff in mind. It provides a user-friendly interface, advanced features, and real-time data to ensure you can offer the best service to your customers while staying on top of your business operations. With powerful tools like inventory management, automated alerts for low stock, and detailed reporting, our system helps you reduce errors, minimize costs, and improve efficiency. Furthermore, the system ensures you're always compliant with healthcare regulations, providing peace of mind in every transaction.",
      //steps: "",
      //note: "",
    },
    {
      //image:labledDashboard,
      title: "Installation",
      description:
        "Follow the steps below to install the Pharmatich system in your system",
      steps: [
        { step: "Branch name", showTick: false },
        {
          step: "Quick access toolbar",
          showTick: false,
        },
        {
          step: "Features center",
          showTick: false,
        },
        { step: "Notification area", showTick: false },
        {
          step: "Switch branches",
          showTick: false,
        },
        {
          step: "Analytics",
          showTick: false,
        },
        {
          step: "Line graph purchases Vs sales",
          showTick: false,
        },
        {
          step: "Customer ledger table",
          showTick: false,
        },
        {
          step: "Treading products list",
          showTick: false,
        },
        {
          step: "Pagenation",
          showTick: false,
        },
      ],
      //note: "",
    },
    {
      image: labledDashboard,
      title: "Dashboard",
      description:
        "Know your way round the Pharmatic dashboard, The list below shows every part of the dashboard",
      steps: [
        { step: "Branch name", showTick: false },
        {
          step: "Quick access toolbar",
          showTick: false,
        },
        {
          step: "Features center",
          showTick: false,
        },
        { step: "Notification area", showTick: false },
        {
          step: "Switch branches",
          showTick: false,
        },
        {
          step: "Analytics",
          showTick: false,
        },
        {
          step: "Line graph purchases Vs sales",
          showTick: false,
        },
        {
          step: "Customer ledger table",
          showTick: false,
        },
        {
          step: "Treading products list",
          showTick: false,
        },
        {
          step: "Pagenation",
          showTick: false,
        },
      ],
      //note: "",
    },

    {
      image: viewBranch,
      title: "Add Branches",
      description:
        "Adding branches to a pharmacy management system provides operational efficiency, better resource management, improved customer service, and greater financial and regulatory oversight. This leads to a more effective and scalable pharmacy operation across multiple locations",
      steps: [
        { step: "Click on your profile", showTick: true }, // true for tick, false for number
        {
          step: "Select settings, this opens in a separate screen",
          showTick: true,
        },
        {
          step: "From the new page select getting started, this should be selected automatically",
          showTick: true,
        },
        { step: "Click on add branch button", showTick: true },
        {
          step: "Fill the form with all required fields and click submit",
          showTick: true,
        },
      ],
      //note: "",
    },
    {
      //image: "",
      title: "Add Branches",
      description:
        "Adding branches to a pharmacy management system provides operational efficiency, better resource management, improved customer service, and greater financial and regulatory oversight. This leads to a more effective and scalable pharmacy operation across multiple locations",
      steps: [
        { step: "Click on your profile", showTick: true }, // true for tick, false for number
        {
          step: "Select settings, this opens in a separate screen",
          showTick: true,
        },
        {
          step: "From the new page select getting started, this should be selected automatically",
          showTick: true,
        },
        { step: "Click on add branch button", showTick: true },
        {
          step: "Fill the form with all required fields and click submit",
          showTick: true,
        },
      ],
      //note: "",
    },
  ];

  return (
    <div className="mx-2 md:mx-24 mb-24 mt-10 p-4 text-slate-800 dark:text-slate-400 ">
      <div className="flex flex-col gap-6 text-md md:text-lg">
        <div className="flex flex-col mx-8 text-justify ">
          {procedures.map((procedure, idx) => (
            <div key={idx} className="mb-8 border border-slate-700 rounded-md ">
              {procedure.image ? (
                <img
                  src={procedure.image}
                  className="block rounded-md w-1rem h-1rem mx-auto mb-4"
                />
              ) : (
                <img className="block rounded-md w-1rem h-1rem mx-auto mb-4" />
              )}
              <div className="px-4">
                <h1 className="font-semibold text-2xl mb-3">
                  {procedure.title}
                </h1>
                <p className="mb-4">{procedure.description}</p>
                <ul className="flex flex-col gap-3 mb-4">
                  {procedure.steps && procedure.steps.length > 0 ? (
                    procedure.steps.map((step, idxStep) => (
                      <li key={idxStep} className="flex gap-2 items-center">
                        <span>
                          {step.showTick ? (
                            <TiTick className="text-green-500 text-lg" />
                          ) : (
                            <span className="text-lg text-gray-600">
                              {idxStep + 1}
                            </span> // Display the step number
                          )}
                        </span>
                        {step.step}
                      </li>
                    ))
                  ) : (
                    <li></li>
                  )}
                </ul>

                {procedure.note ? (
                  <p className="text-md text-slate-900 p-4 mb-4 rounded-md border-l-8 border-green-800 bg-green-500 dark:bg-gradient-to-r from-green-500 to-slate-800">
                    <span className="font-bold">Note: </span>
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DocsBody;
