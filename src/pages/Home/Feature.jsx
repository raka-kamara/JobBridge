import { useEffect, useRef } from 'react';
 import img1 from "./../../assets/feature/work1.avif"
 import img2 from "./../../assets/feature/work2.avif"
 import img3 from "./../../assets/feature/work3.avif"
 import { Fade } from "react-awesome-reveal";

const Feature = () => {
  const featureRef1 = useRef(null);
  const featureRef2 = useRef(null);
  const featureRef3 = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        } else {
          entry.target.classList.remove('animate-fadeIn');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const features = [featureRef1.current, featureRef2.current, featureRef3.current];
    features.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => {
      features.forEach((feature) => {
        if (feature) observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <div className="my-10 bg-[#F1F8E9] py-12 rounded-2xl">
      <h1 className=" text-center my-10 font-bold text-3xl animate-pulse text-[#032418]">
        Features
      </h1>
      <div className="grid md:grid-cols-3 items-center justify-evenly w-full md:mx-20">

        {/* First Feature */}
        <div
          ref={featureRef1}
          className="max-w-sm p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 opacity-0 transform transition-transform duration-700"
        >
          <img
            src={img1}
            alt=""
            className="object-center w-full rounded-md h-72 dark:bg-[gray-500] shadow-md hover:shadow-lg hover:scale-105"
          />
          <div className="mt-6 mb-2">
            <Fade><h2 className="text-xl text-[#2E7D32] font-semibold tracking-wide">
              Earn Coins by Completing Tasks
            </h2></Fade>
          </div>
          <p className="dark:text-gray-800 opacity-70">
            Dive into a world of opportunities and start earning coins by
            completing a variety of simple tasks. Whether it's surveys, data
            entry, or creative projects, your efforts are rewarded with instant
            coins that can be redeemed for real-world rewards.
          </p>
        </div>

        {/* Second Feature */}
        <div
          ref={featureRef2}
          className="max-w-sm p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 opacity-0 transform transition-transform duration-700"
        >
          <img
            src={img2}
            alt=""
            className="object-center w-full rounded-md h-72 dark:bg-gray-500 shadow-md hover:shadow-lg hover:scale-105"
          />
          <div className="mt-6 mb-2">
            <Fade><h2 className="text-xl text-[#2E7D32] font-semibold tracking-wide">
              Create and Manage Tasks
            </h2></Fade>
          </div>
          <p className="dark:text-gray-800 opacity-70">
            Streamline your workflow by creating and managing tasks
            effortlessly. Post your requirements, set deadlines, and watch as
            our dedicated community of workers brings your projects to life.
            Simplify task management and maximize productivity with our
            intuitive platform.
          </p>
        </div>

        {/* Third Feature */}
        <div
          ref={featureRef3}
          className="max-w-sm p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 opacity-0 transform transition-transform duration-700"
        >
          <img
            src={img3}
            alt=""
            className="object-center w-full rounded-md h-72 dark:bg-gray-500 shadow-md hover:shadow-lg hover:scale-105"
          />
          <div className="mt-6 mb-2">
            <Fade><h2 className="text-xl text-[#2E7D32] font-semibold tracking-wide">
              Secure Payments
            </h2></Fade>
          </div>
          <p className="dark:text-gray-800 opacity-70">
            Enjoy peace of mind with our secure payment system. Transactions are
            protected with top-tier security protocols, ensuring your earnings
            and payments are handled safely and efficiently. Trust in a platform
            where your financial transactions are always secure.
          </p>
        </div>
      </div>

      {/* Inline CSS for Scroll Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          opacity: 1 !important;
          animation: fadeIn 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Feature;
