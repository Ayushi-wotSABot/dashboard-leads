
import { FiMoreVertical } from 'react-icons/fi'; // Icon for the three dots
import { LuRefreshCw } from 'react-icons/lu';

const Header = () => {
  return (
    <div className="flex justify-between items-center  top-0 py-4 px-6 bg-white  mt-4">
      {/* Left section with title and description */}
      <div>
        <h1 className="text-2xl ml-32 font-bold text-gray-900">Lead Analytics</h1>
        <p className="text-gray-500 ml-32">Add Description</p>
      </div>

      {/* Right section with buttons */}
      <div className="flex items-center space-x-4 mr-32">
        {/* Add Component button */}
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-[#002244] active:bg-item">
          Add Component
        </button>

        {/* Delete button */}
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-[#002244] active:bg-item">
          Delete
        </button>

        {/* Refresh button */}
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-[#002244] active:bg-item flex items-center space-x-2">
          <span>Refresh</span>
          {/* Refresh icon */}
          <LuRefreshCw />
        </button>

        {/* Three dots for more options */}
        <FiMoreVertical size={30} className='cursor-pointer'/>
      </div>
    </div>
  );
};

export default Header;
