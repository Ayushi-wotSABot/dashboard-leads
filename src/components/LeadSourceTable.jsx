const LeadSourceTable = ({ leadSources }) => {
  return (
    <table className="table-auto w-full rounded-lg shadow-lg bg-blue-50  border border-gray-300 mt-8">
      <thead>
        <tr>
          <th className="text-left p-2 w-1/5 whitespace-nowrap">LEAD SOURCE</th>
          <th className="text-left p-2 w-1/5 whitespace-nowrap">LEADS CREATED</th>
          <th className="text-left p-2 w-1/5 whitespace-nowrap">CONVERTED TO CONTACTS</th>
          <th className="text-left p-2 w-1/5 whitespace-nowrap">CUSTOMERS</th>
          <th className="text-left p-2 w-1/5 whitespace-nowrap">CONVERSION RATE</th>
        </tr>
      </thead>
      <tbody>
        {leadSources.map((source, index) => (
          <tr key={index} className="border-t">
            <td className="p-2">{source.name}</td>
            <td className="p-2">{source.leadsCreated}</td>
            <td className="p-2">{source.converted}</td>
            <td className="p-2">{source.customers}</td>
            <td className="p-2">{source.conversionRate}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadSourceTable;
