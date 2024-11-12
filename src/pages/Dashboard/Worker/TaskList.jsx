import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });

  return (
    <div className="container mx-auto px-4">
      <div className="text-center my-10">
        <h2 className="text-3xl text-[#063840] font-bold">Manage Tasks</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {tasks.map((task) => (
          <div key={task._id} className="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={task.image} alt={task.task_title} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{task.task_title}</h2>
                <p>{task.task_detail}</p>
                <p><strong>Payable Amount:</strong> ${task.payable_amount.toFixed(2)}</p>
                <p><strong>Task Quantity:</strong> {task.task_quantity}</p>
                <p><strong>Submission Info:</strong> {task.submission_info}</p>
                <div className="card-actions justify-end">
                 <Link to={`/dashboard/taskDetails/${task._id}`}><button className="btn border border-[#2E7D32] font-semibold rounded-xl p-1 bg-[#F1F8E9] border-b-2 hover:bg-transparent  text-[#2E7D32]">
                    View Details
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
