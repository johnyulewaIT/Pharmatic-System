import { TiTick } from "react-icons/ti";
import labledDashboard from "../assets/images/labledDashboard.png";
import viewBranch from "../assets/images/viewBranch.png";
import Finance from "../assets/images/Finance.png";
import purchasesExtra from "../assets/images/purchasesExtra.png";
import productsImage from "../assets/images/productsImage.png";
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
      title: "Installation Process: Setup and Configuration",
      description:
        "The installation process requires users to fill out a form to configure their system settings and upload project files for successful installation. The following steps outline the process from start to finish:",
      steps: [
        {
          step: "Open the installation page on the provided URL.",
          showTick: false,
        },
        {
          step: "You’ll be prompted to provide several pieces of essential information to help configure the system correctly.",
          showTick: false,
        },
        {
          step: "Choose Installation Type",
          showTick: false,
        },
        {
          step: "Online Installation: Select this option if you want to host your project on a remote server or cloud-based hosting service",
          showTick: true,
        },
        {
          step: "Web Hosting Installation: Choose this option if you're hosting the project on your own web server or a third-party hosting provider.",
          showTick: true,
        },
        
        {
          step: "Database Configuration (Xampp Server)",
          showTick: true,
        },
        {
          step: "Database Name: Enter the name of the database you want to create or use. Make sure the database is created beforehand, or the system will automatically attempt to create it if needed.",
          showTick: false,
        },
        {
          step: "Database Username: Provide the username for accessing the database (e.g., root for localhost or the username provided by your hosting provider).",
          showTick: false,
        },
        {
          step: "Database Password: Enter the password associated with the database username for authentication.",
          showTick: false,
        },
        {
          step: "Upload Project Files",
          showTick: true,
        },
        {
          step: "Upload Project Files: Use the upload button to select and upload the project files from your local machine. Ensure that the project’s zip file or folder contains all the necessary files (such as PHP, HTML, CSS, JavaScript, etc.).",
          showTick: false,
        },
        {
          step: "The system will validate the uploaded files to ensure they are in the correct format and ready for installation.",
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
    {
      //image: "",
      title: "Add Customers: Adding Customers to the System",
      description:
        "The Add Customers feature allows businesses to input and manage customer information in the system, ensuring smooth order processing, effective communication, and improved customer service. By adding customers, you can keep track of their details, monitor their purchase history, and maintain valuable data to enhance customer relationships. Here’s how it typically works:",
      steps: [
        {
          step: "From the sidebar click on Customers, this takes you to customers management page. ",
          showTick: true,
        }, // true for tick, false for number
        {
          step: "Click on the add button from the page. ",
          showTick: true,
        }, // true for tick, false for number
        {
          step: "You will be promted to enter fill in a form with the customers details. Fill the form and click submit",
          showTick: true,
        },
      ],
      //note: "You can also import medicine form a csv file. Prepare an excel file with columns like name, category, supplier, medicine size, isLocked, taskExempt and description. To make things easlier for you download the provided template",
    },
    {
      //image: "",
      title: "Add Suppliers: Adding Suppliers to the System",
      description:
        "The Add Suppliers feature allows users to input and manage supplier information within the system, helping streamline the procurement process, track supplier relationships, and maintain a clear record of transactions. By adding suppliers to the system, businesses can efficiently manage their sourcing, ensure timely deliveries, and facilitate smooth communication with vendors. Here’s how it works:",
      steps: [
        {
          step: "Navigate to the Suppliers of the system by clicking the supplier option on the sidebar. This area is designed for managing all supplier-related information and interactions.",
          showTick: true,
        }, // true for tick, false for number
        {
          step: "To add a supplier click on the Add button",
          showTick: true,
        },
        {
          step: "You will be prompted to fill in a form, provide all the required fields and click submit.",
          showTick: true,
        },
      ],
      //note: "You can also import medicine form a csv file. Prepare an excel file with columns like name, category, supplier, medicine size, isLocked, taskExempt and description. To make things easlier for you download the provided template",
    },
    {
      image: productsImage,
      title: "Add Products",
      description: "Add products to the system and start tracking them",
      steps: [
        {
          step: "From the sidebar, select products from the products locate the add products button",
          showTick: true,
        }, // true for tick, false for number
        {
          step: "A from opens, fill out the table with all the required fields",
          showTick: true,
        },
      ],
      note: "You can also import medicine form a csv file. Prepare an excel file with columns like name, category, supplier, medicine size, isLocked, taskExempt and description. To make things easlier for you download the provided template",
    },
    {
      image: purchasesExtra,
      title: "Add Purchases: Adding Products to the System and Tracking Them",
      description:
        "The Add Purchases feature allows users to input new product purchases into the system, ensuring efficient tracking and management of inventory, financials, and sales data. By adding products to the system, you can effectively monitor their availability, movement, and performance over time. Here's how the process typically works",
      steps: [
        {
          step: "Click purchases From the sidebar, from the purchases table Click on the add button",
          showTick: true,
        }, // true for tick, false for number
        {
          step: "Fill out the form that appears with all the required fields and click submit or submit and new if you need to add several purchases.",
          showTick: true,
        },
        {
          step: "The purchase is added successfuly and it should appear in the purchaces table.",
          showTick: true,
        },
      ],
      conclusion: "",
      note: "The Stock column shows you the available quantitity, If a purchase needs to be restocked the color of the specific medicine turns red.",
    },
    {
      image: Finance,
      title: "Finance Dashboard",
      description: "Add products to the system and start tracking them",
      steps: [
        {
          step: "From the sidebar, select products from the products locate the add products button",
          showTick: true,
        }, // true for tick, false for number
        {
          step: "A from opens, fill out the table with all the required fields",
          showTick: true,
        },
      ],
      note: "You can also import medicine form a csv file. Prepare an excel file with columns like name, category, supplier, medicine size, isLocked, taskExempt and description. To make things easlier for you download the provided template",
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
                            <span className="text-lg text-gray-600 pl-2">
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
                    {procedure.note}
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
