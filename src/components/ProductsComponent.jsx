import data from '../data.json'
import jumiaExpress from '../assets/images/jumia-express.png'

const ProductsComponent = () => {
    const categories = data.categories
  return (
    <div className="w-full p-3 lg:w-[85%] lg:mx-auto grid grid-cols-4 gap-2">
        <div className="col-span-1 text-sm bg-white p-3">
            <h3 className="font-semibold">CATEGORY</h3>
            {categories.map((cat, index) => (
                <div key={index} className='px-2 text-sm cursor-pointer hover:bg-gray-200 py-2'>
                    {cat.category}
                </div>
            ))}
            <hr />
            <div className='py-2'>
                <h3 className="font-semibold">EXPRESS DELIVERY</h3>
                <div className='flex py-3'>
                <input type="checkbox" name="" id="" /><img src={jumiaExpress} className='w-[150px] ml-3 h-auto' alt="" />
                </div>
            </div>
        </div>
        <div className="col-span-3 p-3 bg-white">
            <h2 className='font-bold py-3 text-2xl'>Official Stores</h2>
            <hr />
            <p className='text-xs text-gray-400 py-3'>x products found</p>
            <hr />
            <div></div>
        </div>
    </div>
  )
}

export default ProductsComponent