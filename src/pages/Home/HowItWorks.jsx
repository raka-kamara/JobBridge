import { FaUserPlus, FaTasks, FaCoins } from "react-icons/fa";
import "animate.css";
import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";

const HowItWorks = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const steps = [step1Ref.current, step2Ref.current, step3Ref.current];
    steps.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      steps.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <div className="py-12 bg-[gray-100] rounded-2xl my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-[#063840] mb-8 animate-pulse">
          How It Works?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Register */}
          <div
            ref={step1Ref}
            className="flex flex-col items-center text-center opacity-0 transition-opacity duration-700"
          >
            <FaUserPlus className="text-5xl text-[#43A047] mb-4 hover:scale-110 transition-transform duration-300" />
            <Fade>
              <h3 className="text-xl font-semibold text-[#2E7D32]">Register</h3>
            </Fade>{" "}
            <p className="text-gray-600 mt-2">
              Sign up for an account and join our community. It's quick, easy,
              and free!
            </p>
          </div>
          {/* Step 2: Complete Tasks */}
          <div
            ref={step2Ref}
            className="flex flex-col items-center text-center opacity-0 transition-opacity duration-700"
          >
            <FaTasks className="text-5xl text-[#43A047] mb-4 hover:scale-110 transition-transform duration-300" />
            <Fade>
              <h3 className="text-xl font-semibold text-[#2E7D32]">
                Complete Tasks
              </h3>
            </Fade>
            <p className="text-gray-600 mt-2">
              Explore a variety of tasks and choose the ones that suit you best.
              Complete them and submit your work.
            </p>
          </div>
          {/* Step 3: Earn Rewards */}
          <div
            ref={step3Ref}
            className="flex flex-col items-center text-center opacity-0 transition-opacity duration-700"
          >
            <FaCoins className="text-5xl text-[#43A047] mb-4 hover:scale-110 transition-transform duration-300" />
            <Fade>
              <h3 className="text-xl font-semibold text-[#2E7D32]">
                Earn Rewards
              </h3>
            </Fade>{" "}
            <p className="text-gray-600 mt-2">
              Earn coins for every task you complete. Redeem your coins for
              exciting rewards and payouts.
            </p>
          </div>
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

export default HowItWorks;
