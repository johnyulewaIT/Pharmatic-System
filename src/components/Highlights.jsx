import {
    HiCpuChip,
    HiMiniWrenchScrewdriver,
    HiMiniCursorArrowRipple,
    HiFingerPrint,
    HiScale,
    HiMiniLockClosed
} from 'react-icons/hi2';
function Highlights() {
  const cardData = [
    {
      id: 1,
      title: "Adaptability ",
      description:
        "Seamlessly integrates with various pharmacy operations, ensuring it fits businesses of all sizes. Our flexible design allows easy customization to meet specific needs.",
      icon: <HiCpuChip size={50} />,
    },
    {
      id: 2,
      title: "Durability ",
      description:
        "Built with robust architecture to handle large databases, ensuring long-term stability and performance even in high-demand environments.",
      icon: <HiMiniWrenchScrewdriver size={50} />,
    },
    {
      id: 3,
      title: "User-Friendly Design ",
      description:
        "An intuitive interface that simplifies navigation, reducing staff training time and improving workflow efficiency",
      icon: <HiMiniCursorArrowRipple size={50} />,
    },
    {
      id: 4,
      title: "Innovative functionality",
      description:
        " Incorporates cutting-edge features like automated tax calculations, batch tracking, and insightful analytics to keep you ahead of the competition.",
      icon: <HiFingerPrint size={50} />,
    },
    {
      id: 5,
      title: "Reliable Customer Support",
      description:
        "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
      icon: <HiMiniLockClosed size={50} />,
    },
    {
      id: 6,
      title: "Precision in every detail",
      description:
        "From accurate inventory management to detailed financial reports, every feature is crafted to ensure data accuracy and reliability.",
      icon: <HiScale size={50} />,
    },
  ];
  return (
    <div id="hightlights" className=" text-slate-800 dark:text-white ">
      <div className="flex flex-col justify-center items-center gap-3 mt-20 ">
        <h2 className="text-3xl font-bold">Highlights 💡</h2>
        <p>
          Explore why our product stands out: adaptability, durability,
          user-friendly design, and innovation. Enjoy reliable custome support
          and precision in every detail
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-20 py-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-4 rounded-md gap-4"
          >
            <h2>{card.icon}</h2>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">{card.title}</h1>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
