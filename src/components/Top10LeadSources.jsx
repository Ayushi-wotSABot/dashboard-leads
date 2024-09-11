const Top10LeadSources = ({topls}) => {
    return (
        <>
         <div className=" p-4 rounded-lg shadow-lg bg-blue-50 mb-2 w-80 ">
         <h3 className="text-lg font-semibold mb-4"><strong>TOP 10 LEAD SOURCES</strong></h3>
        <table className="min-w-full rounded-lg shadow-lg bg-blue-100 border border-gray-300">
      <thead>
        <tr>
          <th className="text-left p-2">Lead Owner</th>
          <th className="text-left p-2">Record Count</th>
          
        </tr>
      </thead>
      <tbody>
        {topls.map((source, index) => (
          <tr key={index} className="border-t">
            
            <td className="p-2">{source.leadOwner}</td>
            <td className="p-2 text-center">{source.recordCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

        </>
    )
}

export default Top10LeadSources;

