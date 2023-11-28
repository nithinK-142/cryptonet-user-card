const SkeletonLoader = () => (
    <div
      className="w-80 h-[26rem] bg-[#9FB3BA] flex flex-col items-center justify-center rounded-md"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.24) -10px -6px 8px, rgba(0, 0, 0, 0.24) 10px -6px 8px, rgba(0, 0, 0, 0.24) 0px 10px 8px",
      }}
    >
      <div className="bg-gray-500 rounded-full opacity-50 animate-pulse">
        <div className="rounded-full w-28 h-28"></div>
      </div>
      <div className="w-full mt-4">
        <div className="flex items-center justify-center mt-2 opacity-50">
          <div className="w-40 h-8 bg-gray-500 rounded-lg animate-pulse"></div>
        </div>
        <div className="flex items-center justify-center mt-4 opacity-50">
          <div className="w-24 h-6 bg-gray-500 rounded-lgs animate-pulse"></div>
        </div>
        <div className="flex items-center justify-center mt-2 opacity-50">
          <div className="w-24 h-6 bg-gray-500 rounded-lgs animate-pulse"></div>
        </div>
      </div>
      <div className="mt-6 p-2 px-6 rounded-lg bg-[#851e3e] animate-pulse">
        <div className="w-20 h-6"></div>
      </div>
    </div>
  );
  
  export default SkeletonLoader;
  