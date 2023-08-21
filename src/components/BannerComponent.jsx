import secondBanner from '../assets/images/second-banner.jpg';

const BannerComponent = () => {
  return (
    <div className='p-2 h-[230px] lg:h-[270px] shadow-sm bg-white w-full lg:w-[85%] mx-auto'>
        <img src={secondBanner} className='h-full w-full object-cover object-left-top rounded-md' alt="" />
    </div>
  )
}

export default BannerComponent