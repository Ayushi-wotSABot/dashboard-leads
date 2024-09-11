import { IoMdArrowDropdown } from "react-icons/io";

const LeadOwnerCard = ({ leadOwners }) => {
  return (
    <>
      {/* Top Lead Owners */}
      <div className="bg-card p-4 rounded-2xl space-y-8 h-64 w-72 shadow-lg">
        <div className="space-y-2">
          <h2 className="font-bold text-lg">TOP LEAD OWNERS</h2>
        </div>
        <div className="">
          <table className="min-w-full bg-table divide-y divide-gray-400 rounded-lg">
            <thead>
              <tr>
                <th className="w-1/2 text-left px-2 py-1 whitespace-nowrap">Lead Owner</th>
                <th className="w-1/2 text-right whitespace-nowrap">Record Count</th>
              </tr>
            </thead>
            <tbody>
              {leadOwners.map((owner, index) => (
                <tr key={index}>
                  <td className="w-1/2 pl-1 text-left whitespace-nowrap">{owner.name}</td>
                  <td className="w-full p-2 text-right flex items-center text-green-600">
                    <IoMdArrowDropdown />
                    {owner.percentage}
                  </td>
                  <td className="w-1/2 text-right pr-2 py-1 whitespace-nowrap">{owner.recordCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeadOwnerCard;
