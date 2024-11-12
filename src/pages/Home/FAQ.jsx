import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  return (
    <Fade className="my-20">
      <section className="bg-[#F1F8E9] text-[#063840] rounded-2xl">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl animate-pulse">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details open="">
              <summary className=" font-semibold py-2 outline-none cursor-pointer focus:underline">
              What is JobBridge?
              </summary>
              <div className="px-4 pb-4">
                <p>
                JobBridge is a microjob platform where freelancers offer services in categories like graphic design, digital marketing, programming, and more. Buyers can hire skilled professionals for short-term projects or small tasks.
                </p>
              </div>
            </details>
            <details>
              <summary className=" font-semibold py-2 outline-none cursor-pointer focus:underline">
              How do I sign up on JobBridge?
              </summary>
              <div className="px-4 pb-4">
                <p>
                To sign up, click on the "Sign Up" button at the top of the homepage. You can create an account using your email or sign up through Google or social media accounts if available.
                </p>
              </div>
            </details>
            <details>
              <summary className=" font-semibold py-2 outline-none cursor-pointer focus:underline">
              Are payments secure on JobBridge?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                Yes, we use secure payment processing to ensure safe transactions between clients and freelancers. Payments are held in escrow until the job is marked as complete, protecting both buyers and sellers.
                </p>
              </div>
            </details>
            <details>
              <summary className=" font-semibold py-2 outline-none cursor-pointer focus:underline">
              Can I cancel a job request?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                Yes, jobs can be canceled, but depending on the progress of the job, there may be cancellation fees. Please check our cancellation policy for details.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default FAQ;
