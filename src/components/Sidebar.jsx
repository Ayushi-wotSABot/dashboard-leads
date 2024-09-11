const Sidebar = () => {
  return (
    <div className="bg-blue-800 text-white w-64 p-4 ml-4 rounded-3xl shadow-lg h-4/6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        className="mb-6 p-2 rounded-lg w-full text-gray-900"
      />
      
      {/* Menu List */}
      <ul className="space-y-2">
        <li className="hover:bg-blue-700 p-3 rounded-lg cursor-pointer">
          Org Overview
        </li>
        <li className="bg-blue-800 p-3 rounded-lg">
          Lead Analytics
        </li>
        <li className="hover:bg-blue-700 p-3 rounded-lg cursor-pointer">
          Deal Insights
        </li>
        <li className="hover:bg-blue-700 p-3 rounded-lg cursor-pointer">
          Marketing Metrics
        </li>
        <li className="hover:bg-blue-700 p-3 rounded-lg cursor-pointer">
          Sales Trend
        </li>
        <li className="hover:bg-blue-700 p-3 rounded-lg cursor-pointer">
          Sales Follow-up Trend
        </li>
        <li className="hover:bg-blue-700 p-3 rounded-lg cursor-pointer">
          Activity Status
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
