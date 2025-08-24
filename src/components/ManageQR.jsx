import React, { useState } from "react";
import dropdown from "../assets/drop_down.png";
import rightdropdown from "../assets/right_dropdown.png";
import correct_tick from "../assets/correct_tick.png";
import QRLogo from "../assets/QR__logo.png";
import download_icon from "../assets/download_logo.png";
import share_icon from "../assets/share.png";

const ManageQR = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedStatuses, setSelectedStatuses] = useState({});

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleStatusSelect = (idx, status) => {
    setSelectedStatuses((prev) => ({ ...prev, [idx]: status }));
    setOpenIndex(null);
  };

  // Sample data for requests
  const requestData = [
    {
      name: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004",
      date: "26.04.2022",
      status: "Accepted",
    },
    {
      name: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004",
      date: "26.04.2022",
      status: "Accepted",
    },
    {
      name: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004",
      date: "26.04.2022",
      status: "Accepted",
    },
  ];

  // Sample data for active QR codes
  const activeQRData = [
    {
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=QR1&size=50x50",
      code: "Q201946579",
      name: "All Marketing Sales",
      msCode: "MS90830402347802740174",
      terminal: "Terminal 1",
    },
    {
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=QR2&size=50x50",
      code: "Q201946580",
      name: "All Marketing Sales",
      msCode: "MS90830402347802740175",
      terminal: "Terminal 2",
    },
    {
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=QR2&size=50x50",
      code: "Q201946580",
      name: "All Marketing Sales",
      msCode: "MS90830402347802740175",
      terminal: "Terminal 3",
    },
    {
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=QR2&size=50x50",
      code: "Q201946580",
      name: "All Marketing Sales",
      msCode: "MS90830402347802740175",
      terminal: "Terminal 4",
    },
  ];

  return (
    <div className="space-y-6 mt-16">
      <h1 className="text-2xl font-bold">Manage QR / POS</h1>
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* Left side big QR */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-center mb-4">
            <img src={QRLogo} alt="Logo" className="w-16 h-16" />
          </div>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=UPI:9876543210@qpay&size=400x400"
            alt="QR Code"
            className="mx-auto w-full max-w-xs sm:max-w-sm h-auto"
          />
          <div className="flex items-center justify-center mt-2">
            <p className="text-center text-base font-medium">
              UPI ID: 9876543210@qpay
            </p>
            <button className="ml-2 p-1 rounded">
              <svg
                className="w-5 h-5 text-[#61CE70]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-1">
            Ibrahim Mohammed
          </p>
          <div className="flex space-x-3 mt-4">
            <button className="flex-1 bg-gray-200 text-textGray py-2 rounded flex items-center justify-center hover:bg-gray-300 transition-colors">
              <img
                src={download_icon}
                alt="Download"
                className="w-4 h-4 mr-2"
              />
              Download
            </button>
            <button className="flex-1 bg-gray-200 text-textGray py-2 rounded flex items-center justify-center hover:bg-gray-300 transition-colors">
              <img src={share_icon} alt="Share" className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </div>

        {/* Right side requests / active QR codes */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-2 gap-2 mb-4 border-2 border-[#42794A] p-2 rounded">
            <button
              className={`px-7 py-2 rounded ${
                activeTab === "active"
                  ? "bg-[#42794A] text-white"
                  : "bg-white text-[#42794A] font-medium"
              }`}
              onClick={() => setActiveTab("active")}
            >
              Active QR Codes
            </button>
            <button
              className={`px-7 py-2 rounded ${
                activeTab === "requests"
                  ? "bg-[#42794A] text-white"
                  : "bg-white text-[#42794A] font-medium"
              }`}
              onClick={() => setActiveTab("requests")}
            >
              QR Code Requests
            </button>
          </div>

          {/* Active QR Codes tab */}
          {activeTab === "active" && (
            <div className="space-y-4">
              {activeQRData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded border"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.qrCode}
                      alt="Small QR"
                      className="w-12 h-12"
                    />
                    <div className="text-sm">
                      <p className="font-bold">{item.code}</p>
                      <p className="font-medium">{item.name}</p>
                      <p className="break-words">{item.msCode}</p>
                      <p className="text-gray-600">{item.terminal}</p>
                    </div>
                  </div>
                  <button className="p-1">
                    <img
                      src={rightdropdown}
                      alt="Dropdown"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Requests tab */}
          {activeTab === "requests" && (
            <div className="space-y-4">
              {requestData.map((item, idx) => (
                <div key={idx} className="flex flex-col p-2 rounded border">
                  <div className="flex items-start space-x-4 mb-2">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?data=RequestQR${
                        idx + 1
                      }&size=50x50`}
                      alt="QR Code"
                      className="w-12 h-12"
                    />
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <p className="text-sm">{item.address}</p>
                      <p className="text-sm text-gray-500">
                        Requested on {item.date}
                      </p>
                    </div>
                  </div>

                  {/* Status dropdown */}
                  <div className="bg-green-50 rounded-md">
                    <div
                      className="w-full p-2 rounded flex items-center justify-center relative cursor-pointer"
                      onClick={() => toggleDropdown(idx)}
                    >
                      <img
                        src={correct_tick}
                        alt="Accepted"
                        className="w-5 h-5 absolute left-2"
                      />
                      <span className="text-green-600 text-sm font-medium">
                        {selectedStatuses[idx] || "QR Request Accepted"}
                      </span>
                      <img
                        src={dropdown}
                        alt="Dropdown"
                        className={`w-4 h-4 absolute right-2 transform transition-transform ${
                          openIndex === idx ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {openIndex === idx && (
                      <div className="p-2 space-y-3">
                        {[
                          "Awaiting Production",
                          "Awaiting Dispatch",
                          "Awaiting Delivery",
                        ].map((status) => (
                          <div
                            key={status}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => handleStatusSelect(idx, status)}
                          >
                            <div
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                selectedStatuses[idx] === status
                                  ? "border-green-600"
                                  : "border-gray-400"
                              }`}
                            >
                              {selectedStatuses[idx] === status && (
                                <div className="w-2 h-2 rounded-full bg-green-600" />
                              )}
                            </div>
                            <span
                              className={`font-medium text-sm ${
                                selectedStatuses[idx] === status
                                  ? "text-green-700"
                                  : "text-gray-500"
                              }`}
                            >
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <button className="w-full bg-[#42794A] text-white py-2 rounded-xl mt-10">
            Request more QR Codes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageQR;
