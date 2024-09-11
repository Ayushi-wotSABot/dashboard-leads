import PropTypes from "prop-types";
const ProgressBar = ({ progress }) => {
  return (
    <div className="flex items-center">
      <div className="relative w-4/5 bg-gray-300 rounded-full h-3">
        {/* Tooltip */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -top-10 bg-white text-black text-sm font-bold px-2 py-1 rounded-lg shadow-lg"
          style={{ left: `${progress}%` }}
        >
          <span>{`${progress}%`}</span>
          <div className="absolute w-2 h-2 bg-white rotate-45 transform -translate-x-1/2 bottom-[-4px] left-1/2"></div>
        </div>

        {/* Progress bar */}
        <div
          className="bg-primary h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
