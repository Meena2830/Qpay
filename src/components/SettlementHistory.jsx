import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import gpay from "../assets/gpayacc.png";
import paytm from "../assets/paytmacc.png";
import phonepe from "../assets/phonepe.png";
import qpay from "../assets/qpayacc.png";
import arrow from "../assets/arrow.png";
import nextarrow from "../assets/next_arrow.png";
import time from "../assets/time.png";
import stopwatch from "../assets/stowatch.png";
import search from "../assets/search.png";
import filter from "../assets/filter.png";
import Bank from "../assets/Bank.png";
import crtBank from "../assets/crtBank.png";

const SettlementHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        let response;
        try {
          response = await axios.get(
            `/api/transaction_history?service_id=111&page=${page}`,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI�IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk",
              },
            }
          );
        } catch (proxyError) {
          console.log("Proxy failed, trying direct API call");
          response = await axios.get(
            `https://64.227.189.27/wallet/api/v1/transaction_history?service_id=111&page=${page}`,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk",
              },
            }
          );
        }

        setTransactions(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error("Fetch error:", err);
        if (err.response?.status === 403) {
          setError("Access forbidden. Please check your authentication token.");
        } else if (err.response?.status === 404) {
          setError("API endpoint not found. Please check the server URL.");
        } else if (err.code === "NETWORK_ERROR") {
          setError("Network error. Please check your internet connection.");
        } else {
          setError("Failed to fetch transactions. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [page]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const accountMap = {
    347: { name: "phonepe", icon: phonepe },
    348: { name: "QPay", icon: qpay },
    349: { name: "GPay", icon: gpay },
    350: { name: "Paytm", icon: paytm },
  };

  const formatAmount = (amount) => {
    return `₹${parseFloat(amount).toLocaleString("en-IN")}`;
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="space-y-6 mt-16 p-6 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Settlement History</h1>
        <button className="text-[#42794A] font-medium hover:underline border border-[#42794A] rounded-lg p-2">
          Download Statement
        </button>
      </div>

      <div className="flex justify-between items-center mt-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full max-w-8xl bg-white">
          <img src={search} alt="Search" className="w-5 h-5 ml-1 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none text-gray-700 text-sm"
          />
        </div>

        <button className="ml-4  border border-gray-300 rounded-lg p-2 bg-[#42794A] transition-colors">
          <img src={filter} alt="Filter" className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-lightGreen p-4 rounded-lg flex justify-between items-center border-2 border-[#42794A]">
        <div className="flex gap-4">
          <img src={time} alt="time" className="w-7 h-7" />
          <p className="text-[#999999] font-medium text-[16px] leading-[20px] tracking-[0%] font-Gilroy">
            Today's total collection will be auto-settled by{" "}
            <span className="text-[#42794A] font-medium">
              08:00AM, 23rd Oct'22
            </span>{" "}
            Tomorrow.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#42794A] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex items-center space-x-2"
        >
          <img src={stopwatch} alt="time" className="w-7 h-7" />
          <span>Settle Now!</span>
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-xl shadow-2xl w-[700px] max-w-full h-[520px] p-10 relative overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Manage QR/POS
            </h2>

            <div className="flex justify-between items-center mb-3 ">
              <span className="flex items-center space-x-2 text-gray-700 font-medium">
                <img src={Bank} alt="Bank" className="w-8 h-8" />
                <span>Today's Total Collection</span>
              </span>
              <span className="font-semibold">₹1,023</span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="flex items-center space-x-2 text-green-500 font-medium">
                <img src={crtBank} alt="Bank" className="w-8 h-8" />
                <span>Already Settled</span>
              </span>
              <span className="text-gray-700 font-medium">₹100</span>
            </div>

            <div className="text-gray-500 text-sm mb-6">
              <h3 className="font-[Gilroy] font-medium text-[12px] leading-[100%] tracking-[0.12em] uppercase text-[#999999]   py-3 rounded">
                SETTLEMENT CALCULATION
              </h3>

              <div className="flex justify-between mb-1">
                <span className="font-[Gilroy]  text-[14px] leading-[100%] tracking-[0em] text-[#999999]">
                  Amount yet to be settled
                </span>

                <span className="font-[Gilroy] font-semibold text-[13px] leading-[100%] tracking-[0em] text-[#252525] text-right">
                  IBRAHIM MOHAMMEDALI
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-[Gilroy]  text-[14px] leading-[100%] tracking-[0em] text-[#999999]">
                  Past pending amount
                </span>
                <span className="font-[Gilroy] font-semibold text-[13px] leading-[100%] tracking-[0em] text-[#252525] text-right">
                  092141241127
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-[Gilroy]  text-[14px] leading-[100%] tracking-[0em] text-[#999999]">
                  Charges
                </span>
                <span className="font-[Gilroy] font-semibold text-[13px] leading-[100%] tracking-[0em] text-[#252525] text-right">
                  07, Aug 2024
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4 border-t pt-2">
              <span className="flex items-center space-x-2 text-gray-700 font-medium">
                <img src={Bank} alt="Bank" className="w-8 h-8" />
                <span>Today's Total Collection</span>
              </span>
              <span className="font-semibold">₹1,023</span>
            </div>

            <div className="bg-green-50 p-6 rounded flex justify-between items-center rounded-xl ">
              <div className="text-green-600 text-sm">
                <p className="font-medium text-[13px] leading-[100%] tracking-[0em] text-[#252525]">
                  Tap 'Settle Now' to instantly get settlements in your bank
                  account.
                </p>

                <p className=" font-semibold text-[12px] leading-[100%] tracking-[0em] text-[#61CE70] mt-2">
                  Settle Now is Chargeable
                </p>
              </div>
              <button
                onClick={() => {
                  alert("Settlement initiated!");
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-[#42794A] text-white text-[14px] rounded hover:bg-green-700"
              >
                Settle Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-lightGreen text-left">
              <th className="p-4 text-[#999999] font-semibold text-[16px] leading-[16px] tracking-[0.12em] uppercase">
                NAME
              </th>
              <th className="p-4 text-[#999999] font-semibold text-[16px] leading-[16px] tracking-[0.12em] uppercase">
                DATE & TIME
              </th>
              <th className="p-4 text-[#999999] font-semibold text-[16px] leading-[16px] tracking-[0.12em] uppercase">
                ACCOUNT
              </th>
              <th className="p-4 text-[#999999] font-semibold text-[16px] leading-[16px] tracking-[0.12em] uppercase">
                AMOUNT
              </th>
              <th className="p-4 text-[#999999] font-semibold text-[16px] leading-[16px] tracking-[0.12em] uppercase">
                STATUS
              </th>
              <th className="p-4 text-[#999999] font-semibold text-[16px] leading-[16px] tracking-[0.12em] uppercase">
                DETAILS
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((tx, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold text-[18px] leading-[100%] tracking-[0%] text-[#252525] ">
                    {tx.service_child_name || "Lisa"}
                  </td>
                  <td className="p-4 font-semibold text-[18px] leading-[100%] tracking-[0%] text-[#252525]">
                    {formatDate(tx.created_date)}
                  </td>
                  <td className="p-4 flex items-center gap-2 text-[#999999] font-medium text-[16px] leading-[100%] tracking-[0%]">
                    From
                    {accountMap[tx.aggregator_id] ? (
                      <>
                        <img
                          src={accountMap[tx.aggregator_id].icon}
                          alt={accountMap[tx.aggregator_id].name}
                          className="w-8 h-8"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src="/icons/qpay.png"
                          alt="QPay"
                          className="w-5 h-5"
                        />
                        QPay
                      </>
                    )}
                  </td>
                  <td className="p-4 font-semibold text-[18px] leading-[100%] tracking-[0%] text-[#252525]">
                    {formatAmount(tx.amount)}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-4 py-2 rounded text-sm font-medium ${
                        tx.status === "SUCCESS"
                          ? " text-[#61CE70] border-2 border-[#61CE70]"
                          : tx.status === "FAILED"
                          ? " text-[#E87474] border-2 border-[#E87474]"
                          : " text-[#EDB823] border-2 border-[#EDB823]"
                      }`}
                    >
                      {tx.status || "PENDING"}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-primaryGreen font-medium underline hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-8 text-center text-gray-500">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-6">
          <button
            onClick={() => setPage((prev) => Math.max(0, prev - 1))}
            disabled={page === 0}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors"
          >
            <img src={arrow} alt="arrow" className="w-5 h-5" />
          </button>

          {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
            const pageNum =
              page < 3
                ? i
                : page > totalPages - 3
                ? totalPages - 5 + i
                : page - 2 + i;
            return (
              <button
                key={i}
                onClick={() => setPage(pageNum)}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition-colors ${
                  page === pageNum
                    ? "bg-[#42794A] text-white"
                    : "bg-gray-200 text-[#999999] hover:bg-gray-300"
                }`}
              >
                {pageNum + 1}
              </button>
            );
          })}

          <button
            onClick={() =>
              setPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={page === totalPages - 1}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors"
          >
            <img src={nextarrow} alt="nextarrow" className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SettlementHistory;
