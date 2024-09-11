import { FaTrashCan } from "react-icons/fa6";

const JunkLeadCard = () => {
  return (
    <div className="bg-card p-4 rounded-2xl space-y-12 h-[40%] w-72 shadow-lg">
    <div className="space-y-2">
      <h2 className="font-bold text-lg">JUNK LEAD BY SOURCE</h2>
    </div>
    <div className="flex items-center justify-center">
    <FaTrashCan  size={100}/>
    </div>
    <h3 className="flex items-center justify-center">No data available</h3>
  </div>
  );
};

export default JunkLeadCard;
