import secondBanner from '../assets/images/second-banner.jpg';

const BannerComponent = () => {
  return (
    <div className='mx-2.5 p-2 h-[230px] shadow-sm bg-white'>
        <img src={secondBanner} className='h-full object-cover object-left-top rounded-md' alt="" />
    </div>
  )
}

export default BannerComponent