import img1 from "./../../assets/banner/profile1.avif";
import img2 from "./../../assets/banner/profile2.avif";
import img3 from "./../../assets/banner/profile3.avif";
import img4 from "./../../assets/banner/profile4.avif";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative h-[550px] bg-no-repeat bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"%3E%3Crect width="900" height="600" fill="%23C8E6C9"%3E%3C/rect%3E%3Cg%3E%3Cg transform="translate(843 21)"%3E%3Cpath d="M0 -65.7L51.4 -41L64 14.6L28.5 59.2L-28.5 59.2L-64 14.6L-51.4 -41Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(214 266)"%3E%3Cpath d="M0 -44L34.4 -27.4L42.9 9.8L19.1 39.6L-19.1 39.6L-42.9 9.8L-34.4 -27.4Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(687 213)"%3E%3Cpath d="M0 -26L20.3 -16.2L25.3 5.8L11.3 23.4L-11.3 23.4L-25.3 5.8L-20.3 -16.2Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(202 475)"%3E%3Cpath d="M0 -28L21.9 -17.5L27.3 6.2L12.1 25.2L-12.1 25.2L-27.3 6.2L-21.9 -17.5Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(648 370)"%3E%3Cpath d="M0 -39L30.5 -24.3L38 8.7L16.9 35.1L-16.9 35.1L-38 8.7L-30.5 -24.3Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(442 196)"%3E%3Cpath d="M0 -48L37.5 -29.9L46.8 10.7L20.8 43.2L-20.8 43.2L-46.8 10.7L-37.5 -29.9Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(411 588)"%3E%3Cpath d="M0 -51L39.9 -31.8L49.7 11.3L22.1 45.9L-22.1 45.9L-49.7 11.3L-39.9 -31.8Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(375 368)"%3E%3Cpath d="M0 -16L12.5 -10L15.6 3.6L6.9 14.4L-6.9 14.4L-15.6 3.6L-12.5 -10Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(673 33)"%3E%3Cpath d="M0 -64L50 -39.9L62.4 14.2L27.8 57.7L-27.8 57.7L-62.4 14.2L-50 -39.9Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(810 573)"%3E%3Cpath d="M0 -28L21.9 -17.5L27.3 6.2L12.1 25.2L-12.1 25.2L-27.3 6.2L-21.9 -17.5Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(70 96)"%3E%3Cpath d="M0 -37L28.9 -23.1L36.1 8.2L16.1 33.3L-16.1 33.3L-36.1 8.2L-28.9 -23.1Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(883 246)"%3E%3Cpath d="M0 -41L32.1 -25.6L40 9.1L17.8 36.9L-17.8 36.9L-40 9.1L-32.1 -25.6Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(800 428)"%3E%3Cpath d="M0 -28L21.9 -17.5L27.3 6.2L12.1 25.2L-12.1 25.2L-27.3 6.2L-21.9 -17.5Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(557 576)"%3E%3Cpath d="M0 -28L21.9 -17.5L27.3 6.2L12.1 25.2L-12.1 25.2L-27.3 6.2L-21.9 -17.5Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(307 118)"%3E%3Cpath d="M0 -21L16.4 -13.1L20.5 4.7L9.1 18.9L-9.1 18.9L-20.5 4.7L-16.4 -13.1Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(53 269)"%3E%3Cpath d="M0 -32L25 -20L31.2 7.1L13.9 28.8L-13.9 28.8L-31.2 7.1L-25 -20Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(185 26)"%3E%3Cpath d="M0 -38L29.7 -23.7L37 8.5L16.5 34.2L-16.5 34.2L-37 8.5L-29.7 -23.7Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(508 12)"%3E%3Cpath d="M0 -16L12.5 -10L15.6 3.6L6.9 14.4L-6.9 14.4L-15.6 3.6L-12.5 -10Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3Cg transform="translate(128 416)"%3E%3Cpath d="M0 -65.7L51.4 -41L64 14.6L28.5 59.2L-28.5 59.2L-64 14.6L-51.4 -41Z" fill="none" stroke="%2343A047" stroke-width="2"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
      }}
    >
      <div>
        <h1 className="text-[#032418] text-center text-4xl font-bold">
          <Typewriter
            options={{
              strings: ["Find", "Discover", "Connect with"],
              autoStart: true,
              loop: true,
            }}
          />
          the best candidates for your startup
        </h1>
        <div className="flex justify-center my-5">
          <Link to="/login"><button className="border border-[#2E7D32] text-lg font-bold rounded-xl p-2 bg-[#F1F8E9] border-b-2 hover:bg-transparent  text-[#2E7D32]">Get Started</button></Link>
        </div>
        <div className="absolute top-40 left-2/3 transform -translate-x-1/2 px-6 py-3 bg-[#FFD700] rounded-full text-lg text-black font-semibold animate-pulse hidden md:block">
          50% off on Premium Plans!
        </div>

        <div className="flex justify-center">
          <div className="absolute mt-20 grid md:grid-cols-4 gap-10">
            {/* mamba */}
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 transition duration-300 ease-in-out  hover:shadow-lg hover:scale-105">
              <img
                src={img1}
                alt="profile image"
                className="w-32 h-32 mx-auto rounded-full object-cover dark:bg-gray-500 aspect-square "
              />
              <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                <div className="my-2 space-y-1">
                  <Fade>
                    {" "}
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      Leroy Jenkins
                    </h2>
                  </Fade>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                    Full-stack developer
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <img
                src={img2}
                alt="profile image"
                className="w-32 h-32 mx-auto rounded-full object-cover dark:bg-gray-500 aspect-square "
              />
              <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                <div className="my-2 space-y-1">
                  <Fade>
                    {" "}
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      Jensy Parker
                    </h2>
                  </Fade>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                    UI/UX Designer
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <img
                src={img3}
                alt="profile image"
                className="w-32 h-32 mx-auto rounded-full object-cover dark:bg-gray-500 aspect-square "
              />
              <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                <div className="my-2 space-y-1">
                  <Fade>
                    {" "}
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      Hensy Aurther
                    </h2>
                  </Fade>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                    Back-end Developer
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <img
                src={img4}
                alt="profile image"
                className="w-32 h-32 mx-auto rounded-full object-cover dark:bg-gray-500 aspect-square "
              />
              <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                <div className="my-2 space-y-1">
                  <Fade>
                    {" "}
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      Amellia Shelby
                    </h2>
                  </Fade>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                    Full-stack developer
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
