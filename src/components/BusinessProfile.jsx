import React from "react";
import profileBanner from "../assets/profileBanner.png";
import "../styles/Dashboard.css";

import right_dropdown from "../assets/drop_down-right.png";
import BankIcon from "../assets/Bank_icon.png";
import BusinessIcon from "../assets/Bussiness_icon.png";
import KYCIcon from "../assets/KYC_icon.png";
import orderIcon from "../assets/order_icon.png";
import smartspeaker from "../assets/smartspeaker.png";
import pos from "../assets/pos.png";
import settings from "../assets/settings.png";
import manage from "../assets/manage.png";
import language from "../assets/language.png";

const BusinessProfile = () => {
  const cards = [
    {
      icon: BankIcon,
      title: "XXXX 9820",
      description: "ICICI Bank | Chennai Egmore Branch",
    },
    {
      icon: BusinessIcon,
      title: "Business Profile",
      description: "View and edit your business details",
    },
    {
      icon: KYCIcon,
      title: "KYC Verification",
      description: "Unlock exclusive benefits with KYC",
    },
    {
      icon: orderIcon,
      title: "Order QR",
      description: "Get paid, manage & order QRs",
    },
  ];

  return (
    <div className="space-y-6 mt-16">
      
      <div className="flex  border border-green-300 rounded-lg  mb-6 overflow-hidden">
        
        <div
          className="w-2/3 p-8 flex flex-col justify-center clip-diagonal-right"
          style={{
            background:
              "radial-gradient(100% 533.55% at 100% 0%, #61CE70 0%, #42794A 100%)",
          }}
        >
          <h2 className="text-xl font-bold text-white">
            Pay <span className="text-green-200">₹1/month*</span> for the QPay
            POS Device
          </h2>
          <p className="text-sm text-green-100 mt-1">
            One device for accepting all modes of payments
          </p>
          <button className="mt-4 w-60 bg-white text-green-700 px-5 py-2.5 rounded-lg font-medium shadow-md hover:bg-gray-100 transition-colors">
            Download App Now!
          </button>
        </div>

       
        <div className="w-1/3 flex items-center justify-center bg-white">
          <img
            src={profileBanner}
            alt="QPay POS Device"
            className="w-35 h-auto"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-lightGreen p-4 rounded-lg text-left">
           
            <div className="flex justify-between items-center">
              <img src={card.icon} alt={card.title} className="w-10 h-10" />
              <img src={right_dropdown} alt="Dropdown" className="w-4 h-4" />
            </div>

           
            <h3 className="mt-3 font-bold text-lg">{card.title}</h3>
            <p className="text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Business & Manage Sections */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Card 1 - Business Services */}
        <div className="p-6 border-2 rounded-lg shadow-md">
          <h3 className="font-medium text-lg mb-4 text-[#999999]">
            BUSINESS SERVICES
          </h3>

          <div className="flex flex-col md:flex-row md:gap-4 gap-4">
           
            <div className="flex flex-col items-center p-4 flex-1">
              <img
                src={smartspeaker}
                alt="Speaker"
                className="w-20 h-20 mb-2 p-2 rounded-[12px] shadow-md"
              />
              <h4 className="text-[#252525] text-center">
                Smart <br /> Speaker
              </h4>
            </div>


            <div className="flex flex-col items-center p-4 flex-1">
              <img
                src={pos}
                alt="POS"
                className="w-20 h-20 mb-2 p-2 rounded-[12px] shadow-md"
              />
              <h4 className="text-[#252525] text-center">
                POS <br /> Machine
              </h4>
            </div>
          </div>
        </div>

        {/* Card 2 - Manage Business */}
        <div className="p-6 border-2 rounded-lg shadow-md">
          <h3 className="font-medium text-lg mb-4 text-[#999999]">
            MANAGE BUSINESS
          </h3>

          <div className="flex flex-col md:flex-row md:gap-4 gap-4 flex-wrap">
          
            <div className="flex flex-col items-center p-4 flex-1">
              <img
                src={settings}
                alt="Payment"
                className="w-20 h-20 mb-2 p-2 rounded-[12px] shadow-md"
              />
              <h4 className="text-[#252525] text-center">
                Payment <br /> Settings
              </h4>
            </div>

            
            <div className="flex flex-col items-center p-4 flex-1">
              <img
                src={manage}
                alt="Staff"
                className="w-20 h-20 mb-2 p-2 rounded-[12px] shadow-md"
              />
              <h4 className="text-[#252525] text-center">
                Manage <br /> Staff
              </h4>
            </div>

            
            <div className="flex flex-col items-center p-4 flex-1">
              <img
                src={language}
                alt="Language"
                className="w-20 h-20 mb-2 p-2 rounded-[12px] shadow-md"
              />
              <h4 className="text-[#252525] text-center">
                Change <br /> Language
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
