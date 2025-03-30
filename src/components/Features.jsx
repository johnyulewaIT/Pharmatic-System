import React, { useState, useEffect } from "react";
import dashboardImage from "../assets/images/dashboardImage.png";
import dashboardImageLight from "../assets/images/dashboardImageLight.png";
import POSTImage from "../assets/images/POSTImage.png";
import POSTImagelight from "../assets/images/POSTImagelight.png";
import purchasesImage from "../assets/images/purchasesImage.png";
import purchasesImageLight from "../assets/images/purchasesImageLight.png";
import analyticsImage from "../assets/images/analyticsImage.png";
import analyticsImageLight from "../assets/images/analyticsImageLight.png";
import productsImage from "../assets/images/productsImage.png";
import productsImageLight from "../assets/images/productsImageLight.png";

function Features({ isDarkTheme }) {
  const [image, setImage] = useState(
    isDarkTheme ? dashboardImage : dashboardImageLight
  );

  console.log(isDarkTheme);
  const changeImage = (feature, isDarkTheme) => {
    switch (feature) {
      case "POSTImage":
        return isDarkTheme ? POSTImage : POSTImagelight;
      case "dashboardImage":
        return isDarkTheme ? dashboardImage : dashboardImageLight;
      case "purchasesImage":
        return isDarkTheme ? purchasesImage : purchasesImageLight;
      case "analyticsImage":
        return isDarkTheme ? analyticsImage : analyticsImageLight;
      case "productsImage":
        return isDarkTheme ? productsImage : productsImageLight;
      default:
        return isDarkTheme ? dashboardImage : dashboardImageLight;
    }
  };
  // Update the image when the theme changes
  useEffect(() => {
    setImage(changeImage("dashboardImage", isDarkTheme));
  }, [isDarkTheme]);
  
  return (
    <div className="flex flex-col text-slate-800 dark:text-white gap-8">
      <div className="mt-20 mb-10">
        <h1 className="text-3xl font-semibold">Product features 🚀</h1>
        <p>
          Explore the key features designed to improve efficiency and streamline
          operations.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex h-auto justify-center items-center bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md p-4 w-full md:w-1/2">
          <img
            src={image}
            alt="Feature Image"
            className="w-full h-auto border border-slate-500 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-8 w-full md:w-1/2 p-2 border-b-2 md:border-r-2 md:border-t-2 border-slate-300 dark:border-slate-600">
          <div
            onClick={() => setImage(changeImage("dashboardImage", isDarkTheme))}
            className="flex flex-col p-4 bg-slate-100 cursor-pointer dark:bg-slate-800 rounded-md gap-2"
          >
            <h1 className="font-bold text-xl">Dashboard</h1>
            <p>
              A snapshot of key metrics and insights, offering real-time
              updates, customized widgets, and user-specific data views for
              enhanced decision-making.
            </p>
          </div>
          <div
            onClick={() => setImage(changeImage("POSTImage", isDarkTheme))}
            className="flex flex-col gap-3 cursor-pointer"
          >
            <h1 className="font-bold text-xl">POS</h1>
            <p>
              Ensures smooth and efficient transactions with features like
              multi-payment support, receipt printing, and real-time inventory
              deduction.
            </p>
          </div>
          <div
            onClick={() => setImage(changeImage("purchasesImage", isDarkTheme))}
            className="flex flex-col gap-3 cursor-pointer"
          >
            <h1 className="font-bold text-xl">Inventory</h1>
            <p>
              Features include real-time updates, low stock alerts, and detailed
              batch tracking for improved accuracy and stock visibility.
            </p>
          </div>
          <div
            onClick={() => setImage(changeImage("analyticsImage", isDarkTheme))}
            className="flex flex-col gap-3 cursor-pointer"
          >
            <h1 className="font-bold text-xl">Analytics</h1>
            <p>
              Gain actionable insights with sales trend analysis, performance
              tracking, and comprehensive reporting to drive business growth.
            </p>
          </div>
          <div
            onClick={() => setImage(changeImage("productsImage", isDarkTheme))}
            className="flex flex-col gap-3 cursor-pointer"
          >
            <h1 className="font-bold text-xl">Products</h1>
            <p>
              Manage supplier details, purchase orders, and product catalogs
              efficiently with advanced search and bulk import capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
