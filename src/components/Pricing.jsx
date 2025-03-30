import { motion } from "framer-motion";

function Pricing() {
  return (
    <div id="Pricing">
      {/* Heading with Fade-in and Slide-up */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center text-slate-800 dark:text-white mt-20 mb-10"
      >
        <h1 className="text-3xl font-semibold">Price 💲</h1>
        <p>
          Invest in a solution that streamlines operations, boosts sales, and
          keeps your pharmacy running efficiently — all at an unbeatable value.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row mx-2 md:mx-40 pb-10 text-slate-800 dark:text-white">
        {/* Demo Section with Scale Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4 items-center justify-center w-full md:w-1/2 bg-slate-100 dark:bg-slate-800 rounded-t-md md:rounded-l-md p-3"
        >
          <h1 className="text-3xl font-semibold">Test it for free today</h1>
          <p className="flex">
            Experience the power of our system firsthand before committing.
            Enjoy full access to key features, explore the intuitive interface,
            and see how it streamlines your pharmacy operations — all at no
            cost.
          </p>
          <p className="text-sm text-green-500 mt-2">
            No credit card required • No obligations • Instant access
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Get Demo
          </motion.button>
        </motion.div>

        {/* Pro Edition with Slide-in Effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col w-full md:w-1/2 border border-slate-700 rounded-b-md md:rounded-r-md p-5 gap-3"
        >
          <h1 className="font-bold text-2xl mb-2">Pro Edition</h1>
          <h1 className="font-bold text-4xl">$116.47</h1>
          <p className="text-green-400">One-time Payment • Lifetime Access</p>

          {/* Staggered List Animation */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.5,
                  staggerChildren: 0.2,
                },
              },
            }}
            className="flex flex-col gap-2 mt-4"
          >
            {[
              "Unlimited Access to All Features",
              "Premium Support with 24/7 Assistance",
              "No Hidden Fees or Recurring Charges",
              "Quick Setup with Step-by-Step Guide",
              "30-Day Money Back Guarantee",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                ✔️ {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing;
