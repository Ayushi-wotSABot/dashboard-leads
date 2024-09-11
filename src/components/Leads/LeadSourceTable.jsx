import PropTypes from 'prop-types';

const LeadSourceTable = ({ leadSources }) => {
  return (
    <div className="border-2 rounded-lg overflow-hidden border-gray-300  shadow-lg mt-10">
    <table className="min-w-full bg-card divide-y-2 divide-gray-300 rounded-lg">
      <thead className="">
        <tr className="">
          <th className="px-2 py-2 text-left w-1/5 whitespace-nowrap">LEAD SOURCE</th>
          <th className="px-2 text-center w-1/5 whitespace-nowrap">LEADS CREATED</th>
          <th className="px-2 text-center w-1/5 whitespace-nowrap">CONVERTED TO CONTACTS</th>
          <th className="px-2 text-center w-1/5 whitespace-nowrap">CUSTOMERS</th>
          <th className="px-2 text-center w-1/5 whitespace-nowrap">CONVERSION RATE</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-gray-300">
        {leadSources.map((source, index) => (
          <tr key={index} className="divide-y-2 divide-gray-300">
            <td className="pl-2 py-1 text-left whitespace-nowrap">{source.name}</td>
            <td className="text-center">{source.leadsCreated}</td>
            <td className="text-center">{source.converted}</td>
            <td className="text-center">{source.customers}</td>
            <td className="pr-2 text-center">{source.conversionRate}%</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

LeadSourceTable.propTypes = {
  leadSources: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      leadsCreated: PropTypes.number.isRequired,
      converted: PropTypes.number.isRequired,
      customers: PropTypes.number.isRequired,
      conversionRate: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LeadSourceTable;
