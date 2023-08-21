import {BiMenu} from 'react-icons/bi'
import {CiUser} from 'react-icons/ci'
import jumiaLogo from '../assets/images/jumia-logo-full.png'

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm h-18 sticky w-full flex items-center">
        <div className="w-full px-3 lg:w-[87%] mx-auto flex justify-between items-center">
            <BiMenu className='hover:text-orange-500 cursor-pointer' size={28}/>
            <img src={jumiaLogo} className='w-32' alt="" />
            <input type="text" className='p-1.5 border rounded-lg border-gray-400 w-80' placeholder='&#x1F50E;  Search products,brands and categories' />
            <button className='bg-orange-500/90 font-bold text-white hover:opacity-90 rounded-md shadow-lg px-4 py-2'>SEARCH</button>
            <CiUser size={28}/>
        </div>

    </div>
  )
}

export default Navbar