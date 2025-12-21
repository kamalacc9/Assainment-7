const States = ({ resolveData, progressData }) => {
  const vectorBase = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
    backgroundImage: "url(/vector1.png)",
    backgroundRepeat: "no-repeat",
    pointerEvents: "none",
    zIndex: 0,
  };

  return (
    <div className="w-11/12 grid lg:grid-cols-2 grid-cols-1 mx-auto py-10 gap-5 text-white">
      <div
        className="relative overflow-hidden rounded-lg   lg:w-177 lg:h-62.5 h-36 flex flex-col justify-center items-center"
        style={{
          background:
            "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
        }}
      >
        <div
          style={{
            ...vectorBase,
            left: 0,
            backgroundPosition: "left center",
            backgroundSize: "contain",
          }}
        />

        <div
          style={{
            ...vectorBase,
            right: 0,
            backgroundPosition: "left center",
            transform: "scaleX(-1)",
            backgroundSize: "contain",
          }}
        />

        <div className="relative z-10 text-center">
          <h3 className="text-2xl  text-white">In-Progress</h3>
          <h1 className="font-extrabold text-4xl text-white">
            {progressData.length}
          </h1>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-lg   lg:w-177 lg:h-62.5 h-36 flex flex-col justify-center items-center"
        style={{
          background:
            "linear-gradient(90.00deg, rgba(84, 207, 103, 1), rgba(0, 130, 122, 1) 100%)",
        }}
      >
        <div
          style={{
            ...vectorBase,
            left: 0,
            backgroundPosition: "left center",
            backgroundSize: "contain",
          }}
        />
        <div
          style={{
            ...vectorBase,
            right: 0,
            backgroundPosition: "left center",
            transform: "scaleX(-1)",
            backgroundSize: "contain",
          }}
        />

        <div className="relative z-10 text-center">
          <h3 className="text-2xl text-white ">Resolved</h3>
          <h1 className="font-extrabold text-white text-4xl">
            {resolveData.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default States;
