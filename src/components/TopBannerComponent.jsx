import topBanner from "../assets/gifs/top-banner.gif";
import jumiaLogoFull from "../assets/images/jumia-logo-full.png";
import payLogo from "../assets/images/pay-logo.png";
import logisticsLogo from "../assets/images/logistics-logo.png";
import foodLogo from "../assets/images/food-logo.png";

const TopBannerComponent = () => {
  return (
    <section className="w-full">
      <div className="bg-purple-400">
        <img src={topBanner} className="w-[98%] lg:w-[85%] mx-auto" alt="" />
      </div>
      <div className="bg-gray-100">
        <div className="flex text-xs justify-between items-center max-w-[82%] mx-auto md:w-full py-1">
          <p className="text-orange-500">
            <img src="" alt="" /> Sell on Jumia
          </p>
          <div className="flex justify-center items-center">
            <img src={jumiaLogoFull} className="px-1 w-[50px]" alt="" />
            <img
              src={payLogo}
              className="px-1 w-[60px] filter grayscale contrast-50 hover:filter-none cursor-pointer"
              alt=""
            />
            <img
              src={foodLogo}
              className="px-1 w-[60px] filter grayscale contrast-50 hover:filter-none cursor-pointer"
              alt=""
            />
            <img
              src={logisticsLogo}
              className="px-1 w-[80px] filter grayscale contrast-50 hover:filter-none cursor-pointer"
              alt=""
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default TopBannerComponent;
