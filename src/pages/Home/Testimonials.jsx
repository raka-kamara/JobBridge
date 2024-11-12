import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const axiosPublic = useAxiosPublic();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetch reviews data using React Query
    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ["reviews"], 
        queryFn: async () => {
            const res = await axiosPublic.get("/reviews");
            return res.data;  
        },
    });

    // Set interval to cycle through reviews
    useEffect(() => {
        if (reviews.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 5000); // Change testimonial every 5 seconds
            return () => clearInterval(interval);
        }
    }, [reviews]);

    return (
        <div className="my-20">
            <h1 className="text-[#063840] text-3xl my-10 font-extrabold text-center animate-pulse">Our Happy Clients</h1>

            {isLoading ? (
                <div className="loading loading-ring loading-lg flex justify-center items-center my-10">Loading reviews...</div>
            ) : (
                <div className="flex justify-center items-center">
                    <div className="w-full max-w-2xl text-center">
                        <AnimatePresence mode="wait">
                            {reviews.length > 0 && (
                                <motion.div
                                    key={currentIndex}
                                    initial={{ x: 300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -300, opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={reviews[currentIndex].rating}
                                        readOnly
                                    />
                                    <p className="py-8">{reviews[currentIndex].details}</p>
                                    <h3 className="text-2xl text-orange-400">
                                        {reviews[currentIndex].name}
                                    </h3>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Testimonials;
