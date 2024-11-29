import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyTasks = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: tasks = [] } = useQuery({
        queryKey: ["task", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user.email}`);
            return res.data.sort((a, b) => new Date(b.time) - new Date(a.time)); // Sort tasks by time in descending order
        },
        enabled: !!user?.email,
    });

    return (
        <div className="container mx-auto px-4">
            <div className="text-center my-10">
                <h2 className="text-3xl text-[#063840] font-bold">My Added Tasks</h2>
            </div>
            <table className="table-auto w-full text-left">
                <thead>
                    <tr>
                        <th>Task Title</th>
                        <th>Task Quantity</th>
                        <th>Payable Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.task_title}</td>
                            <td>{task.task_quantity}</td>
                            <td>${task.payable_amount.toFixed(2)}</td>
                            <td>
                                <Link to={`/dashboard/taskDetails/${task._id}`}>
                                    <button className="border border-[#2E7D32] rounded-xl p-1 bg-[#F1F8E9] border-b-2 hover:bg-[#C8E6C9] text-[#2E7D32] mb-4 my-2 mx-1">Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTasks;
