import jumiaLogoWhite from "../assets/images/jumia-logo-full-white.png";
import jumiaLogo from "../assets/images/jumia-logo.png";

const NewsLetterComponent = () => {
  return (
    <div className="w-full bg-black/80 text-white">
      <div className="w-full px-3 py-9 lg:w-[85%] lg:mx-auto flex justify-between items-center">
        <img src={jumiaLogoWhite} className="w-1/5" alt="" />
        <div className="flex flex-col pl-12 w-4/5">
          <div>
            <h3 className="font-bold">NEW TO JUMIA?</h3>
            <p className="text-xs">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>
          <div className="flex py-4">
            <input
              type="text"
              className="p-3 rounded-md"
              placeholder="&#9993; Enter E-mail Address"
            />
            <button className="p-3 border border-white rounded-md mx-2">
              MALE
            </button>
            <button className="p-3 border border-white rounded-md">
              FEMALE
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-between">
            <img src={jumiaLogo} className="w-[50px] mr-3" alt="" />
            <p>DOWNLOAD THE JUMIA FREE APP</p>
          </div>
          <div className="flex w-64 pt-4">
            <button className="border border-white mr-1.5 rounded-md p-3">
              App Store
            </button>
            <button className="border border-white mr-1.5 rounded-md p-3">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterComponent;
