import { FaComputer, FaChartLine, FaPenNib } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaPaintBrush } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const categories = [
  {
    icon: <FaComputer className="text-4xl text-[#C8E6C9]" />,
    title: "Programming and Tech",
    description: "Unlock top-notch tech solutions with skilled developers and IT experts.",
    bgColor: "bg-[#F1F8E9]",
  },
  {
    icon: <FaChartLine className="text-4xl text-[#F1F8E9]" />,
    title: "Digital Marketing",
    description: "Reach your audience with effective digital marketing strategies and tools.",
    bgColor: "bg-[#C8E6C9]",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-[#C8E6C9]" />,
    title: "Graphic Design",
    description: "Make your brand unforgettable with creative and unique graphic designs.",
    bgColor: "bg-[#F1F8E9]",
  },
  {
    icon: <FaPenNib className="text-4xl text-[#F1F8E9]" />,
    title: "Writing and Translation",
    description: "Communicate effectively with captivating content and precise translations.",
    bgColor: "bg-[#C8E6C9]",
  },
];

const PopularCategory = () => {
  return (
    <Fade className="text-center my-20">
      <h1 className="text-3xl font-extrabold text-[#063840] my-20 animate-pulse">Popular Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-60 p-5 bg-white shadow-lg rounded-xl overflow-hidden relative transform transition-transform duration-200 ease-in-out"
          >
            <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mx-auto mb-4`}>
              {category.icon}
            </div>
            <h2 className="text-xl font-bold text-[#063840] mb-2">{category.title}</h2>
            <p className="text-gray-600 text-sm">{category.description}</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`absolute bottom-0 left-0 h-1 rounded-full ${category.bgColor}`}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </Fade>
  );
};

export default PopularCategory;
