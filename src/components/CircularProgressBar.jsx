import PropTypes from "prop-types";

const CircularProgressBar = ({ progress, size = 100, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative">
      <svg
        className="transform -rotate-90 scale-y-[-1]"
        width={size}
        height={size}
      >
        {/* Background Circle */}
        <circle
          stroke="#d3d3d3"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Progress Circle */}
        <circle
          stroke="#002d62"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeLinecap="round"
        />
      </svg>

      {/* Tooltip */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 bg-white text-black text-sm font-bold px-2 py-1 rounded-lg shadow-lg">
        <span>{`${progress}%`}</span>
        <div className="absolute w-2 h-2 bg-white rotate-45 transform -translate-x-1/2 bottom-[-4px] left-1/2"></div>
      </div>
      <div className="absolute flex items-center justify-center inset-0">
        <h4>Goal</h4>
      </div>
    </div>
  );
};

CircularProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

CircularProgressBar.defaultProps = {
  size: 100,
  strokeWidth: 10,
};

export default CircularProgressBar;
