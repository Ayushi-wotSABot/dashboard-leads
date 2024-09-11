import CircularProgressBar from "../CircularProgressBar";
import ProgressBar from "../ProgressBar";

const LeadsSummaryCard = () => {
  return (
    <div className="space-y-4">
      {/* Today's Leads */}
      <div className="bg-card p-4 rounded-2xl space-y-20 h-64 w-72 shadow-lg">
        <div className="space-y-2">
          <h2 className="font-bold text-lg">TODAY&apos;S LEADS</h2>
          <h1 className="font-bold text-4xl">65</h1>
        </div>
        <div className="">
          <ProgressBar progress={70} />
        </div>
      </div>

      {/* This Week's Leads */}
      <div className="bg-card p-4 rounded-2xl space-y-4 h-64 w-72 shadow-lg">
        <div className="space-y-2">
          <h2 className="font-bold text-lg">THIS WEEK&apos;S LEADS</h2>
          <h1 className="font-bold text-4xl">95</h1>
        </div>
        <div className="flex items-center justify-center space-x-8">
          <div>
            <h4>
              <span className="font-bold mr-4">60%</span>Daily Goal
            </h4>
            <h4>
              <span className="font-bold mr-4">80%</span>This Week
            </h4>
          </div>
          <div className="">
            <CircularProgressBar progress={80} size={100} strokeWidth={10} />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default LeadsSummaryCard;
