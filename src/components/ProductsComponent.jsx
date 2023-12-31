import data from "../data.json";
import jumiaExpress from "../assets/images/jumia-express.png";
import { formatCurrency } from "../utilities/formatCurrency.js";
import starIcon from "../assets/icons/star.png";

const ProductsComponent = () => {
  const categories = data.categories;
  const products = data.products;
  return (
    <div className="w-full p-3 lg:w-[85%] lg:mx-auto grid grid-cols-6 gap-2">
      <div className="col-span-2 text-sm bg-white p-3">
        <h3 className="font-semibold">CATEGORY</h3>
        {categories.map((cat, index) => (
          <div
            key={index}
            className="px-2 text-sm cursor-pointer hover:bg-gray-200 py-2"
          >
            {cat.category}
          </div>
        ))}
        <hr />
        <div className="py-2">
          <h3 className="font-semibold">EXPRESS DELIVERY</h3>
          <div className="flex py-3">
            <input type="checkbox" className="cursor-pointer" name="" id="" />
            <img src={jumiaExpress} className="w-[100px] ml-3" alt="" />
          </div>
        </div>
        <hr />
        <div className="pb-2">
          <h3 className="font-semibold">SHIPPED FROM</h3>
          <div className="flex py-1.5">
            <input type="checkbox" className="cursor-pointer" name="" id="" />
            <p className=" ml-4 bg-blue-700 rounded-sm text-[10px] text-white p-0.5">
              Shipped from abroad
            </p>
          </div>
          <div className="flex py-1.5">
            <input type="checkbox" className="cursor-pointer" name="" id="" />
            <p className="ml-4 text-xs">Shipped from Nigeria</p>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="col-span-4 p-3 bg-white">
        <h2 className="font-bold py-3 text-2xl">Official Stores</h2>
        <hr />
        <p className="text-xs text-gray-400 py-3">
          {products.length} products found
        </p>
        <hr />
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="m-2 cursor-pointer hover:shadow-lg pb-3 pl-3 flex flex-col justify-between"
            >
              <img
                src={product.image}
                className="max-h-[250px] w-auto"
                alt=""
              />
              <div className="h-10 ">
                {product.official_store ? (
                  <p className="text-[9px] p-1 w-[60px] my-2 rounded-sm bg-[#276076] text-white">
                    Official Store
                  </p>
                ) : (
                  <p className="text-[9px] p-1 w-[60px] my-2 rounded-sm bg-[#02141b] text-white">
                    Unofficial
                  </p>
                )}
              </div>
              <p className="text-gray-600 text-xs h-10.5 font-semibold">
                {product.name}
              </p>
              <div className="h-10">
                <p className="font-bold">
                  {formatCurrency(
                    product.price - product.discount * product.price
                  )}
                </p>
                {product.discount ? (
                  <p className="text-xs text-gray-500">
                    <s>{formatCurrency(product.price)}</s>
                    <span className="ml-3 text-orange-400">{product.discount * 100 + '%'}</span>
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex h-5">
                <img src={starIcon} className="w-4 mx-0.5" alt="" />
                <img src={starIcon} className="w-4 mx-0.5" alt="" />
                <img src={starIcon} className="w-4 mx-0.5" alt="" />
                <img src={starIcon} className="w-4 mx-0.5" alt="" />
                <img src={starIcon} className="w-4 mx-0.5" alt="" />
                <p className="text-xs text-gray-600">({product.ratings})</p>
              </div>
              {product.jumia_express ? (
                <img src={jumiaExpress} className="w-1/2 pt-2" alt="" />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
