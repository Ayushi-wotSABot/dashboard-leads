import { NavLink, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
  const sections = [
    {
      items: [
        { name: "Org Overview", path: "/" },
        { name: "Lead Analytics", path: "/leads-dashboard" },
        { name: "Deal Insights", path: "" },
        { name: "Marketing Metrics", path: "" },
        { name: "Sales Trend", path: "" },
        { name: "Sales Follow-up Trend", path: "" },
        { name: "Activity Status", path: "" },
      ],
    },
  ];

   // Use React Router's `useLocation` hook to get the current pathname
   const { pathname } = useLocation(); // Import from 'react-router-dom'

   return (
     <nav className="">
       <div className="flex flex-col bg-primary pt-8 pb-32 rounded-[26px] w-48 shadow-lg">
         <div className="relative m-3 ">
           <FaSearch size={12} className="absolute top-2.5 right-3"/>
           <input 
           type="text"
           placeholder="Search"
           className="w-full px-3 py-1.5 text-sm rounded-lg"
           />
         </div>
         <div className="mt-4">
           {sections.map((section, sectionIndex) => (
             <div
               key={sectionIndex}
               className="flex flex-col text-white text-sm gap-4"
             >
               {section.items.map((item, itemIndex) => (
                 <NavLink
                   key={itemIndex}
                   to={item.path}
                   className={() => (
                     `hover:bg-item px-4 py-2 rounded-lg ${
                       pathname === item.path ? "bg-item" : ""
                     }`
                   )}
                 >
                   {item.name}
                 </NavLink>
               ))}
             </div>
           ))}
         </div>
       </div>
     </nav>
   );
 };
 

export default Sidebar;
