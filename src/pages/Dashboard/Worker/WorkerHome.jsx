import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCoins, FaTasks, FaChartLine, FaPlusCircle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  const [userStats, setUserStats] = useState({
    coins: 0,
    earnings: 0,
    completedTasks: 0,
    activeGigs: 0,
  });

  

  return (
    <div className="dashboard-home px-8 py-6">
      {/* Welcome Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-[#063840]">Welcome back, {user.displayName}!</h1>
        <p className="text-md text-gray-600">Empowering Your Gig Economy Experience</p>
      </header>

      {/* User Summary Panel */}
      <section className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="p-4 bg-[#C8E6C9] rounded-lg shadow-md flex items-center">
          <FaCoins className="text-3xl text-[#2E7D32]" />
          <div className="ml-4">
            <h3 className="font-semibold"> Coins</h3>
            <p className="text-xl font-bold">{userStats.coins}</p>
          </div>
        </div>

        <div className="p-4 bg-[#C8E6C9] rounded-lg shadow-md flex items-center">
          <FaChartLine className="text-3xl text-[#2E7D32]" />
          <div className="ml-4">
            <h3 className="font-semibold">Earnings</h3>
            <p className="text-xl font-bold">${userStats.earnings}</p>
          </div>
        </div>

        <div className="p-4 bg-[#C8E6C9] rounded-lg shadow-md flex items-center">
          <FaTasks className="text-3xl text-[#2E7D32]" />
          <div className="ml-4">
            <h3 className="font-semibold">Completed Tasks</h3>
            <p className="text-xl font-bold">{userStats.completedTasks}</p>
          </div>
        </div>

        <div className="p-4 bg-[#C8E6C9] rounded-lg shadow-md flex items-center">
          <FaPlusCircle className="text-3xl text-[#2E7D32]" />
          <div className="ml-4">
            <h3 className="font-semibold">Active Gigs</h3>
            <p className="text-xl font-bold">{userStats.activeGigs}</p>
          </div>
        </div>
      </section>

      {/* Recommended Tasks */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#063840] mb-4">Recommended Tasks</h2>
        {/* <div className="grid md:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="mt-2 font-bold text-[#2E7D32]">{task.reward} Coins</p>
              <Link
                to={`/tasks/${task.id}`}
                className="mt-4 inline-block bg-[#2E7D32] text-white px-4 py-2 rounded"
              >
                View Task
              </Link>
            </div>
          ))}
        </div> */}
      </section>

      

      {/* Quick Actions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#063840] mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Link to="/post-job" className="p-4 bg-[#C8E6C9] rounded-lg shadow-md flex flex-col items-center">
            <FaPlusCircle className="text-3xl text-[#2E7D32]" />
            <p className="mt-2 font-semibold">Post a Job</p>
          </Link>

          <Link to="/tasks" className="p-4 bg-[#C8E6C9] rounded-lg shadow-md flex flex-col items-center">
            <FaTasks className="text-3xl text-[#2E7D32]" />
            <p className="mt-2 font-semibold">Find Gigs</p>
          </Link>

          <Link to="/purchase-coins" className="p-4 bg-[#C8E6C9] rounded-lg shadow-md flex flex-col items-center">
            <FaCoins className="text-3xl text-[#2E7D32]" />
            <p className="mt-2 font-semibold">Purchase Coins</p>
          </Link>

          <Link to="/invite" className="p-4 bg-[#C8E6C9] rounded-lg shadow-md flex flex-col items-center">
            <FaChartLine className="text-3xl text-[#2E7D32]" />
            <p className="mt-2 font-semibold">Invite Friends</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
