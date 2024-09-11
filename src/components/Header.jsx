
import { FiMoreVertical } from 'react-icons/fi'; // Icon for the three dots

const Header = () => {
  return (
    <div className="flex justify-between items-center  top-0 py-4 px-6 bg-white  mt-4">
      {/* Left section with title and description */}
      <div>
        <h1 className="text-2xl ml-32 font-semibold text-gray-900">Lead Analytics</h1>
        <p className="text-gray-500 ml-32">Add Description</p>
      </div>

      {/* Right section with buttons */}
      <div className="flex items-center space-x-4 mr-32">
        {/* Add Component button */}
        <button className="bg-[#003366] text-white py-2 px-4 rounded-md hover:bg-[#002244]">
          Add Component
        </button>

        {/* Delete button */}
        <button className="bg-[#003366] text-white py-2 px-4 rounded-md hover:bg-[#002244]">
          Delete
        </button>

        {/* Refresh button */}
        <button className="bg-[#003366] text-white py-2 px-4 rounded-md hover:bg-[#002244] flex items-center space-x-2">
          <span>Refresh</span>
          {/* Refresh icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a5 5 0 100 10 5 5 0 000-10zM4.93 5.34A7.972 7.972 0 0110 3a8 8 0 11-6.67 3.59L2 8a1 1 0 001.8-.6l.53-2.06a1 1 0 00-.47-1.05l-1.94-1.25a1 1 0 00-1.36 1.36l1.25 1.94a1 1 0 001.05.47l2.06-.53zM2 10a1 1 0 00-1-1v2a1 1 0 001 1h2a1 1 0 000-2H2z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Three dots for more options */}
        <FiMoreVertical className="text-gray-500 text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
