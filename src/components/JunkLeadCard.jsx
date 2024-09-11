
const JunkLeadCard = ({ junkLeadSource }) => {
  return (
    <>
    <h3 className="text-lg font-semibold mb-2  "><strong>JUNK LEAD BY SOURCE</strong></h3>
    <div className="bg-50 p-6 flex flex-col items-center justify-center h-72 ">
    
      <div className="w-40 h-40 mb-4 ">
        {/* Placeholder for the junk lead image or icon */}
        <img
          src="trash.png" 
          alt="Junk Leads Icon"
          className="w-full h-full "
        />
      </div>
      
      {/* Render "No data available" if there's no data */}
      {junkLeadSource?.length === 0 ? (
        <p className="text-gray-500">No data available</p>
      ) : (
        <ul>
          {junkLeadSource.map((source, index) => (
            <li key={index} className="text-gray-700">
              {source}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default JunkLeadCard;
