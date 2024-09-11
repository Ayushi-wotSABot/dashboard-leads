import PropTypes from 'prop-types';

const TopLeadSources = ({ TopLeadSources }) => {
  return (
    <>
      {/* Top Lead Owners */}
      <div className="bg-card p-4 rounded-2xl space-y-8 h-[45%] w-72 shadow-lg">
        <div className="space-y-2">
          <h2 className="font-bold text-lg">TOP 10 LEAD SOURCES</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-table divide-y divide-gray-400 rounded-lg">
            <thead>
              <tr>
                <th className="w-1/2 text-left px-2 py-1 whitespace-nowrap">
                  Lead Owner
                </th>
                <th className="w-1/2 pr-1.5 whitespace-nowrap">
                  Record Count
                </th>
              </tr>
            </thead>
            <tbody>
              {TopLeadSources.map((owner, index) => (
                <tr key={index}>
                  <td className="w-full text-left px-2 py-1">
                    {owner.leadOwner}
                  </td>
                  <td className="w-full text-center px-2 py-1">
                    {owner.recordCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

TopLeadSources.propTypes = {
  TopLeadSources: PropTypes.arrayOf(
    PropTypes.shape({
      leadOwner: PropTypes.string.isRequired,
      recordCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TopLeadSources;
