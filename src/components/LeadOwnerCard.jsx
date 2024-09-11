import { IoMdArrowDropdown } from "react-icons/io";
const LeadOwnerCard = ({loc}) => {
  return (
    <>

      <div className="h-60 p-4 rounded-lg shadow-lg bg-blue-50 mb-2 ">
        <h3 className="text-lg font-semibold mb-4"><strong>TOP LEAD OWNERS</strong></h3>
        <table className="min-w-full  rounded-lg shadow-lg bg-blue-100 border border-gray-300">
          <thead>
            <tr>
              <th className="text-left p-2">Lead Owner</th>
              <th className="text-left p-2">Record Count</th>

            </tr>
          </thead>
          <tbody>
            {loc.map((source, index) => (
              <tr key={index} className="border-t border-gray-40">
              <td className="p-2">{source.leadOwner}</td>
              <td className="p-2">
                {/* Flexbox to align the dropdown icon, percentage, and number */}
                <div className="flex items-center">
                <IoMdArrowDropdown className="ml-1" />
                  <span>{source.recordCount}%</span>
                   {/* Add a small margin to the left */}
                  <span className="ml-4">10</span> {/* Add margin between the icon and the number */}
                </div>
              </td>
            </tr>
            
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeadOwnerCard;
