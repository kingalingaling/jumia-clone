const CountdownComponent = () => {
  return (
    <div className="p-3 mx-2.5">
      <div className="w-full px-4 py-7 rounded-md flex justify-between bg-[#276076]">
        <div></div>
        <div className="flex text-white flex-col w-3/5 justify-center items-center">
          <p className="w-full text-center text-3xl font-bold">Brands Festival</p>
          <div className="flex items-center text-2xl font-bold">
            Starts in:
            <div className="bg-white text-black font-normal flex justify-center items-center rounded-lg w-14 h-12 mx-2">
                01w
            </div>
            :
            <div className="bg-white text-black font-normal flex justify-center items-center rounded-lg w-14 h-12 mx-2">
                06d
            </div>
            :
            <div className="bg-white text-black font-normal flex justify-center items-center rounded-lg w-14 h-12 mx-2">
                18h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownComponent;
