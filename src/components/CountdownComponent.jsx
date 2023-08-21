const CountdownComponent = () => {
  return (
    <div className="w-full flex justify-between">
      <div></div>
      <div className="flex flex-col justify-center items-center">
        <p className="w-full text-center">Brands Festival</p>
        <div className="flex">
          <p>Starts in: </p>
          <div className="bg-white w-9 h-9"></div>
        </div>
      </div>
    </div>
  );
};

export default CountdownComponent;
