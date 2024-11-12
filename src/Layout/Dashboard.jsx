import {
  FaHome,
  FaTasks,
  FaUsers,
  FaSearch,
  FaEnvelope,
  FaPlusSquare,
  FaCoins,
  FaHistory,
  FaUpload,
  FaArrowDown,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import useAdmin from "../hooks/useAdmin";
import useTaskCreator from "../hooks/useTaskCreator";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isAdmin] = useAdmin();
  const [isTaskCreator] = useTaskCreator();
  const isWorker = true;

  const handleLinkClick = () => {
    setSidebarOpen(false); // Close sidebar on link click
  };

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen text-[#063840] bg-[#F1F8E9]">
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden p-4 text-gray-800 z-50"
      >
        <FaHome className="text-2xl" />
      </button>

      {/* Overlay for mobile when the sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Dashboard Sidebar */}
      <div
        className={`w-64 bg-[#C8E6C9] shadow-lg rounded-lg p-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:block fixed md:relative z-50`}
      >
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Dashboard</h1>
        <ul className="space-y-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaHome className="text-xl mr-3" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaUsers className="text-xl mr-3" />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageTask"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaTasks className="text-xl mr-3" />
                  Manage Tasks
                </NavLink>
              </li>
            </>
          ) : isTaskCreator ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/taskCreatorHome"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaHome className="text-xl mr-3" />
                  Task Creator Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addNewTask"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaPlusSquare className="text-xl mr-3" />
                  Add New Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myTasks"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaTasks className="text-xl mr-3" />
                  My Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/purchaseCoin"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaCoins className="text-xl mr-3" />
                  Purchase Coin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaHistory className="text-xl mr-3" />
                  Payment History
                </NavLink>
              </li>
            </>
          ) : isWorker ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/workerHome"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaHome className="text-xl mr-3" />
                  Worker Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/taskList"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaTasks className="text-xl mr-3" />
                  Task List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mySubmission"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaUpload className="text-xl mr-3" />
                  My Submissions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/withdraw"
                  className={({ isActive }) =>
                    isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
                  }
                  onClick={handleLinkClick}
                >
                  <FaArrowDown className="text-xl mr-3" />
                  Withdrawals
                </NavLink>
              </li>
            </>
          ) : null}

          {/* Shared Links */}
          <div className="divider my-4" />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "flex items-center p-2 bg-[#F1F8E9] text-[#2E7D32] rounded-lg transition" : "flex items-center p-2 hover:bg-[#F1F8E9] rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaHome className="text-xl mr-3" />
              Home
            </NavLink>
          </li>
          
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
