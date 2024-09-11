import React from 'react';

const LeadsSummaryCard = ({ title, leadsCount, progress, progressLabel, circularProgress = false }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-2"><strong>{title}</strong></h3>
      <p className="text-4xl font-bold mb-4">{leadsCount}</p>

      {!circularProgress && (
        <>
          {/* Border Divider before the percentage */}
          <div className="border mb-12 mt-8 bg-gray-300 h-2 w-full rounded-full" />
        </>
      )}

      {circularProgress ? (
        // This Week's Leads with Circle Progress Bar and Text in the same row
        <div className="flex justify-between items-center">
          {/* Left Section: Daily Goal and This Week Text */}
          <div className="flex flex-col space-y-1">
            <div>
              <p className="font-bold text-sm">60%</p>
              <p className="text-gray-600 text-sm">Daily Goal</p>
            </div>
            <div>
              <p className="font-bold text-sm">80%</p>
              <p className="text-gray-600 text-sm">This Week</p>
            </div>
          </div>

          {/* Right Section: Circular Progress Bar with Percentage */}
          <div className="relative flex justify-center items-center">
            <svg className="w-24 h-24">
              <circle
                className="text-gray-300"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="36"
                cx="50%"
                cy="50%"
              />
              <circle
                className="text-blue-600"
                strokeWidth="6"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="36"
                cx="50%"
                cy="50%"
                strokeDasharray="226"
                strokeDashoffset={`${226 - (226 * progress) / 100}`}
              />
            </svg>
            {/* Text inside the circle */}
            <div className="absolute text-lg font-semibold">Goal</div>
            {/* Percentage outside the circle */}
            <div className="absolute top-[-20px] left-[50%] translate-x-[-50%] text-sm font-semibold bg-white px-2 rounded-lg shadow-md">
              {progressLabel}
            </div>
          </div>
        </div>
      ) : (
        // Horizontal Progress Bar for "Today's Leads"
        <div className="relative">
          <div className="h-2 w-full bg-gray-300 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Percentage above the progress bar */}
          <div className="absolute top-[-20px] left-[50%] translate-x-[-50%] text-sm font-semibold bg-white px-2 rounded-lg shadow-md -mt-2">
            {progressLabel}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsSummaryCard;
