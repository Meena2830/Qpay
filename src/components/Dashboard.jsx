// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Banner */}
//       <div className="bg-green-100 border rounded-lg flex items-center justify-between p-6 mb-6">
//         <div>
//           <h2 className="text-lg font-semibold">
//             Pay ₹1/month* for the QPay POS Device
//           </h2>
//           <p className="text-sm text-gray-600">
//             One device for accepting all modes of payments
//           </p>
//           <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded">
//             Download App Now
//           </button>
//         </div>
//         <img
//           src="https://via.placeholder.com/120?text=Illustration"
//           alt="Illustration"
//           className="w-28"
//         />
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//         {[
//           { value: "1.5k", label: "Account Holders" },
//           { value: "2.1k", label: "Transactions" },
//           { value: "2.3k", label: "Settlement" },
//           { value: "45k", label: "QR Orders" },
//         ].map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-lg shadow p-4 text-center"
//           >
//             <h3 className="text-2xl font-bold">{stat.value}</h3>
//             <p className="text-gray-600 text-sm">{stat.label}</p>
//           </div>
//         ))}
//       </div>

//       {/* Profile & QR Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Profile */}
//         <div className="bg-white rounded-lg shadow p-6 text-center">
//           <div className="relative w-24 h-24 mx-auto">
//             <svg
//               className="absolute top-0 left-0 w-full h-full"
//               viewBox="0 0 36 36"
//             >
//               <path
//                 d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                 fill="none"
//                 stroke="#E0E0E0"
//                 strokeWidth="3"
//               />
//               <path
//                 d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                 fill="none"
//                 stroke="#22c55e"
//                 strokeWidth="3"
//                 strokeDasharray="30, 100"
//               />
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
//               30%
//             </div>
//           </div>
//           <p className="mt-3 text-sm font-medium text-gray-700">
//             Complete your profile
//           </p>
//           <ul className="mt-2 text-sm text-gray-600 space-y-1">
//             <li>Personal KYC</li>
//             <li>Company KYC</li>
//             <li>Onboarding details</li>
//           </ul>
//           <button className="mt-4 w-full bg-green-700 text-white py-2 rounded">
//             Next
//           </button>
//         </div>

//         {/* QR */}
//         <div className="bg-white rounded-lg shadow p-6 text-center">
//           <h3 className="text-sm font-semibold text-gray-700">Order QR</h3>
//           <img
//             src="https://api.qrserver.com/v1/create-qr-code/?data=QPay&size=120x120"
//             alt="QR Code"
//             className="mx-auto mt-3"
//           />
//           <ul className="mt-2 text-sm text-gray-600 space-y-1">
//             <li>Receive Payment</li>
//             <li>Order new QRs</li>
//             <li>Download QR</li>
//           </ul>
//           <button className="mt-4 w-full bg-green-700 text-white py-2 rounded">
//             View more
//           </button>
//         </div>
//       </div>

//       {/* Settlement & Transactions */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Settlement */}
//         <div className="bg-white rounded-lg shadow p-4">
//           <h3 className="font-bold text-gray-700">₹1,23,816.19</h3>
//           <p className="text-sm text-gray-500">Settlement</p>
//           <div className="mt-4 space-y-3 text-sm text-gray-600">
//             {Array(3)
//               .fill(0)
//               .map((_, idx) => (
//                 <div key={idx} className="flex justify-between">
//                   <span>Ibrahim — 23 Oct, 09:15 AM</span>
//                   <span className="text-green-600 font-medium">+₹90</span>
//                 </div>
//               ))}
//           </div>
//           <button className="mt-4 w-full bg-green-700 text-white py-2 rounded">
//             Settle Now
//           </button>
//         </div>

//         {/* Total Transactions */}
//         <div className="bg-white rounded-lg shadow p-4">
//           <h3 className="font-bold text-gray-700">₹1,23,816.19</h3>
//           <p className="text-sm text-gray-500">Total Transactions</p>
//           <div className="mt-4 space-y-3 text-sm text-gray-600">
//             {Array(3)
//               .fill(0)
//               .map((_, idx) => (
//                 <div key={idx} className="flex justify-between">
//                   <span>Ibrahim — 23 Oct, 09:15 AM</span>
//                   <span className="text-green-600 font-medium">+₹90</span>
//                 </div>
//               ))}
//           </div>
//           <button className="mt-4 w-full bg-green-700 text-white py-2 rounded">
//             View All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from "react";
import bill_payment from "../assets/bill-payment.png";
import "../styles/Dashboard.css"

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-[calc(100vh-64px)] mt-12">
      {/* Banner */}
   <div className="flex  border border-green-300 rounded-lg  mb-6 overflow-hidden">
  {/* Text Section */}
  <div  className="w-2/3 p-8 flex flex-col justify-center clip-diagonal-right"
  style={{
    background: "radial-gradient(100% 533.55% at 100% 0%, #61CE70 0%, #42794A 100%)"
  }}>
  <h2 className="text-xl font-bold text-white">
    Pay <span className="text-green-200">₹1/month*</span> for the QPay POS Device
  </h2>
  <p className="text-sm text-green-100 mt-1">
    One device for accepting all modes of payments
  </p>
  <button className="mt-4 w-60 bg-white text-green-700 px-5 py-2.5 rounded-lg font-medium shadow-md hover:bg-gray-100 transition-colors">
    Download App Now!
  </button>
</div>



  {/* Image Section */}
  <div className="w-1/3 flex items-center justify-center bg-white">
    <img
      src={bill_payment}
      alt="QPay POS Device"
      className="w-35 h-auto"
    />
  </div>
</div>


      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { value: "1.5k", label: "Account Holders" },
          { value: "2.1k", label: "Transactions" },
          { value: "2.3k", label: "Settlement" },
          { value: "45k", label: "QR Orders" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-4 text-center"
          >
            <h3 className="text-2xl font-bold text-[#42794A]">{stat.value}</h3>
            <p className="text-[#999999] text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Profile & QR Section */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  {/* Profile */}
  <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
    <h3 className="text-xs font-semibold text-[#999999] uppercase mb-4 tracking-wide">Profile</h3>

    {/* Content row */}
    <div className="flex items-center gap-6 flex-1">
      {/* Circle */}
      <div className="relative w-24 h-24">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 36 36"
        >
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#E0E0E0"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#61CE70"
            strokeWidth="3"
             strokeLinecap="round"
            strokeDasharray="30, 100"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-l font-bold text-[#61CE70] tracking-wide">
          30%
        </div>
      </div>

      {/* Text */}
      <div>
  <p className="text-sm text-[#252525] font-semibold tracking-wide">
    Complete your profile
  </p>
  <ul className="mt-2 text-sm space-y-1 list-disc list-inside text-[#999999]">
    <li>Personal KYC</li>
    <li>Company KYC</li>
    <li>Onboarding details</li>
  </ul>
</div>

    </div>

    {/* Button at bottom */}
    <button className="mt-6 w-full bg-[#42794A] text-white py-2 rounded-xl tracking-wide">
      Next
    </button>
  </div>

  {/* QR */}
  <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full ">
    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4 text-[#999999]">QR</h3>

    {/* Content row */}
    <div className="flex items-center gap-6 flex-1">
      {/* QR image */}
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?data=QPay&size=120x120"
        alt="QR Code"
        className="w-24 h-24"
      />

      {/* Text */}
      <div>
  <p className="text-sm font-semibold text-gray-800 text-[#252525]">Order QR</p>
  <ul className="list-disc list-inside mt-2 text-sm text-[#999999] space-y-1 marker:text-gray-500">
    <li><span className="align-middle">Receive Payment</span></li>
    <li><span className="align-middle">Order new QRs</span></li>
    <li><span className="align-middle">Download QR</span></li>
  </ul>
</div>

    </div>

    {/* Button at bottom */}
    <button className="mt-6 w-full  text-white py-2 rounded-xl bg-[#42794A]">
      View more
    </button>
  </div>
</div>



      {/* Settlement & Transactions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Settlement */}
  <div className="bg-white rounded-lg shadow p-5">
    {/* Header */}
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-wide text-[#999999] font-semibold">
          Settlement
        </p>
        <h3 className="mt-1 font-bold text-gray-800 text-l">₹1,23,816.19</h3>
      </div>
      <button
        type="button"
        aria-label="Open settlement"
        className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300"
      >
        {/* right chevron */}
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"/>
        </svg>
      </button>
    </div>

    {/* Rows */}
    <div className="mt-4 space-y-3 text-sm">
      {Array(3).fill(0).map((_, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <div className="leading-tight">
            <p className="text-[#252525] font-medium">Ibrahim</p>
            <p className="fold-bold text-xs text-[#999999]">23 Oct, 09:15 AM</p>
          </div>
          <span className="text-[#252525] font-bold">+₹90</span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <button className="mt-4 w-full text-white py-2 rounded-xl bg-[#42794A]">
      Settle Now
    </button>
  </div>

  {/* Total Transactions */}
  <div className="bg-white rounded-lg shadow p-5">
    {/* Header */}
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-wide text-[#999999] font-semibold">
          Total Transactions
        </p>
        <h3 className="mt-1 font-bold text-[#999999]text-lg">₹1,23,816.19</h3>
      </div>
      <button
        type="button"
        aria-label="Open transactions"
        className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"/>
        </svg>
      </button>
    </div>

    {/* Rows */}
    <div className="mt-4 space-y-3 text-sm">
      {Array(3).fill(0).map((_, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <div className="leading-tight">
            <p className="text-[#252525] font-medium">Ibrahim</p>
            <p className="text-xs font-bold text-[#999999]">23 Oct, 09:15 AM</p>
          </div>
          <span className="text-[#252525] font-bold">+₹90</span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <button className="mt-4 w-full text-white py-2 rounded-xl bg-[#42794A]">
      View All
    </button>
  </div>
</div>

    </div>
  );
};

export default Dashboard;