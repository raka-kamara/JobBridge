import { useLoaderData } from "react-router-dom";

const TaskDetails = () => {
    const { _id, task_title, task_detail, task_quantity, payable_amount, completion_date, submission_info, image } = useLoaderData();

    return (
        <div>
            <h2>Task Title: {task_title}</h2>
            <p>Details: {task_detail}</p>
            <p>Quantity: {task_quantity}</p>
            <p>Payable Amount: {payable_amount}</p>
            <p>Completion Date: {completion_date}</p>
            <p>Submission Info: {submission_info}</p>
            {image && <img src={image} alt={task_title} />}
        </div>
    );
};

export default TaskDetails;
