import { motion } from "framer-motion";
import dashboardImage from "../assets/images/dashboardImage.png";
import dashboardImageLight from "../assets/images/dashboardImageLight.png";
function HeroSection() {
  return (
    <div id="Home" className="w-full ">
      <div className="w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gap-6 flex flex-col items-center justify-center font-bold mx-4 my-6 text-slate-800 dark:text-white"
        >
          <h1 className="mt-2 lg:mt-14 text-3xl sm:text-5xl md:text-6xl lg:text-7xl ">
            The PHARMT<span className="text-green-500">i</span>C
          </h1>
          <p className="flex font-normal w-full md:w-1/2 text-center">
            Empowering pharmacies with innovative solutions designed to
            streamline operations and enhance customer care. Experience seamless
            management with robust features tailored to meet your unique needs.
          </p>
          <div className="flex gap-2 my-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Get Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-slate-800 text-slate-800 dark:text-white rounded-md"
            >
              Buy Today
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="dashboad-image"
        >
          <img
            src={dashboardImage}
            alt="Pharmatic-dashboard"
            className="w-full h-auto border border-slate-500 p-2 rounded-lg shadow-[0_10px_30px_rgba(0,0,255,0.2)]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
