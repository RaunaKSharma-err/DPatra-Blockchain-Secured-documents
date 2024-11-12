import { useState } from "react";
import { FaCheckCircle, FaHome, FaIdCard, FaUsers } from "react-icons/fa";
import AdminDashboard from "@/components/ui/utils/dashboard.tsx";
import { CitizenList } from "@/components/ui/utils/citizenList";
import VerificationPanel from "@/components/ui/utils/verificationPanel";
import DocumentPanel from "@/components/ui/utils/DocumentPanel";

const AdminPanel = () => {
  const [usesidebar, setsidebar] = useState(true);

  const [activeTab, setActiveTab] = useState<
    "list" | "verification" | "documents" | "Dashboard"
  >("Dashboard");

  return (
    <>
      <div className="flex w-[100%]">
        <div
          className={`${
            usesidebar === false
              ? "h-0 w-0 overflow-hidden"
              : "menu bg-base-200 w-72 content-center gap-3"
          }`}
        >
          <div>
            <div className="flex gap-3 mt-3 ">
              <img
                src="/logo.jpeg"
                alt=""
                className="rounded-full w-[25px] h-[25px]"
              />
              <label className="text-1xl mt-[2px]">DPatra</label>
            </div>
            <img
              className="rounded-full mt-8 w-20 ml-16"
              src="https://imgcdn.stablediffusionweb.com/2024/5/2/0b0209ce-412b-49cd-a30b-60d907adc7e4.jpg"
              alt=""
            />
            <p className="font-bold mt-3 text-center">Akash shah</p>
            <p className="text-center text-[10px] text-blue-400">
              DPatra Admin
            </p>
          </div>
          <h2 className="menu-title mt-10">Pages</h2>
          <button
            onClick={() => setActiveTab("Dashboard")}
            className={`w-[90%] rounded btn ${
              activeTab === "Dashboard" ? "bg-blue-600 text-white" : "btn"
            }`}
          >
            <FaHome />
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab("list")}
            className={`w-[90%] rounded btn ${
              activeTab === "list" ? "bg-blue-600 text-white" : "btn"
            }`}
          >
            <FaUsers />
            Citizens List
          </button>
          <button
            onClick={() => setActiveTab("verification")}
            className={`w-[90%] rounded btn ${
              activeTab === "verification" ? "bg-blue-600 text-white" : "btn"
            }`}
          >
            <FaCheckCircle />
            Verification
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`w-[90%] rounded btn ${
              activeTab === "documents" ? "bg-blue-600 text-white" : "btn"
            }`}
          >
            <FaIdCard />
            Documents
          </button>
        </div>
        <div className="min-h-screen w-[100%] p-6 ">
          <div className="navbar bg-base-100 mb-3 mt-[-20px]">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  onClick={() => {
                    setsidebar(!usesidebar);
                  }}
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl max-h-[90vh] shadow-lg p-6 mb-6 overflow-y-auto">
              {activeTab === "Dashboard" && <AdminDashboard />}

              {activeTab === "list" && <CitizenList />}

              {activeTab === "verification" && <VerificationPanel />}

              {activeTab === "documents" && <DocumentPanel />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
