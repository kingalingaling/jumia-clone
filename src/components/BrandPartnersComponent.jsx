import data from "../data.json";

const BrandPartnersComponent = () => {
  const brands = data.brands;
  return (
    <div className="rounded-lg w-full p-2 lg:w-[85%] mx-auto">
      <h2 className="bg-[#FFBA00] py-2 text-lg font-bold rounded-md text-black text-center">
        Exclusive Brand Partners
      </h2>
      <div className="bg-white p-3 grid grid-cols-4 gap-2 lg:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index} className="relative max-h-100px rounded-md">
            <div className="absolute bg-black/50 flex justify-center rounded-md items-center w-full h-full z-30">
              <img src={brand.logo} className="object-cover w-[150px] h-auto" alt="" />
            </div>
            <img
              className="object-cover rounded-md w-[200px] h-[150px]"
              src={brand.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPartnersComponent;
