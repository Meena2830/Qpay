// import React from "react";
// import { NavLink } from "react-router-dom";

// // import your local icons from assets
// import homeIcon from "../assets/home_icon_.png";
// import qrIcon from "../assets/QR_icon.png";
// import historyIcon from "../assets/history.png";
// import profileIcon from "../assets/profile.png";
// import dropdown from "../assets/drop_down.png";
// import bharatLogo from "../assets/Bharat connect logo.png";

// const Sidebar = () => {
//   const navItems = [
//     { to: "/", label: "Home", icon: homeIcon },
//     { to: "/manage-qr", label: "QR", icon: qrIcon },
//     { to: "/history", label: "History", icon: historyIcon, hasDropdown: true },
//     { to: "/profile", label: "Profile", icon: profileIcon },
//   ];

//   return (
//     <aside className="w-56 bg-green-700 text-white flex flex-col h-screen fixed rounded-r-lg overflow-hidden">
//       {/* Navigation */}
//       <nav className="flex flex-col gap-1 mt-6 px-3 flex-1">
//         {navItems.map((item, idx) => (
//           <NavLink
//             key={idx}
//             to={item.to}
//             className={({ isActive }) =>
//               `flex items-center justify-between px-3 py-2 rounded-md transition ${
//                 isActive ? "bg-white text-green-700 font-medium" : "hover:bg-green-800"
//               }`
//             }
//           >
//             <div className="flex items-center gap-3">
//               <img src={item.icon} alt={item.label} className="w-5 h-5" />
//               <span>{item.label}</span>
//             </div>
//             {item.hasDropdown && (
//               <img src={dropdown} alt="chevron" className="w-4 h-4" />
//             )}
//           </NavLink>
//         ))}
//       </nav>

//       {/* Footer Bharat Connect logo */}
//       <div className="bg-white flex justify-center items-center py-4 border-t border-gray-200 rounded-t-none rounded-b-lg">
//         <img src={bharatLogo} alt="Bharat Connect" className="w-32" />
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


import React from "react";
import { NavLink } from "react-router-dom";

// import your local icons from assets
import homeIcon from "../assets/home_icon_.png";
import qrIcon from "../assets/QR_icon.png";
import historyIcon from "../assets/history.png";
import profileIcon from "../assets/profile.png";
import dropdown from "../assets/drop_down.png";
import bharatLogo from "../assets/Bharat connect logo.png";

const Sidebar = () => {
  const navItems = [
    { to: "/", label: "Home", icon: homeIcon },
    { to: "/manage-qr", label: "QR", icon: qrIcon },
    { to: "/history", label: "History", icon: historyIcon, hasDropdown: true },
    { to: "/profile", label: "Profile", icon: profileIcon },
  ];

  return (
    <aside className="w-56  text-white flex flex-col 
  h-[calc(100vh-94px)] fixed top-16 left-0 rounded-r-lg  z-10 
  m-6  pt-6 " style={{ background: "#42794A",borderColor: "#42794A" }}>  
  
  {/* Navigation */}
  <nav className="flex flex-col gap-2 flex-1 px-6">
    {navItems.map((item, idx) => (
      <NavLink
        key={idx}
        to={item.to}
        className={({ isActive }) =>
          `flex items-center justify-between px-3 py-2 rounded-md transition ${
            isActive ? "bg-white text-green-700 font-medium" : "hover:bg-green-800"
          }`
        }
      >
        <div className="flex items-center gap-3">
          <img src={item.icon} alt={item.label} className="w-5 h-5" />
          <span>{item.label}</span>
        </div>
        {item.hasDropdown && (
          <img src={dropdown} alt="chevron" className="w-4 h-4" />
        )}
      </NavLink>
    ))}
  </nav>

  {/* Footer Bharat Connect logo */}
  {/* Footer Bharat Connect logo */}
<div
  className="flex justify-center items-center py-3 bg-white 
             border-l-4 border-r-4 border-b-4 border-t-4 border-[#42794A] rounded-b-lg"
>
  <img 
    src={bharatLogo} 
    alt="Bharat Connect" 
    className="w-20 h-auto object-contain" 
  />
</div>








</aside>

  );
};

export default Sidebar;
