import Marquee from "react-fast-marquee";
import fb from "./../../assets/icons/fb.png";
import sf from "./../../assets/icons/shopify.png";

const Icons = () => {
    return (
        <div className="w-full p-4 bg-[]">
            <Marquee gradient={false} speed={50}>
                <div className="flex space-x-10">
                    {/* Google SVG Logo */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-16 h-12" />

                    {/* Microsoft SVG Logo */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-16 h-12" />

                    {/* Airbnb SVG Logo */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" alt="Airbnb" className="w-16 h-12" />

                    {/* Shopify SVG Logo */}
                    <img src={sf} alt="Shopify" className="w-16 h-12" />

                    {/* IBM SVG Logo */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="w-16 h-12" />

                    {/* Slack SVG Logo */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" alt="Slack" className="w-16 h-12" />

                    {/* Meta SVG Logo */}
                    <img src={fb} alt="Meta" className="w-16 h-12 " />
                    </div>
            </Marquee>
        </div>
    );
};

export default Icons;
