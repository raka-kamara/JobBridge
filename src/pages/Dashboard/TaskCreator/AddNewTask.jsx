import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNewTask = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const taskProperties = {
        task_title: data.task_title,
        task_detail: data.task_detail,
        task_quantity: parseFloat(data.task_quantity),
        payable_amount: parseFloat(data.payable_amount),
        completion_date: data.completion_date,
        submission_info: data.submission_info,
        image: res.data.data.display_url,
      };

      const task = await axiosSecure.post("/tasks", taskProperties);
      if (task.data.insertedId) {
        // Show success message
        Swal.fire({
          title: "Task added successfully!!",
          text: "Task has been added.",
          icon: "success",
        });
      }
    }
  };

  return (
    <div>
      <h2 className="text-4xl text-[#063840] text-center my-10">Add New Task</h2>

      <div className="mx-10 p-5 bg-[#C8E6C9] rounded-3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-6">
            {/* Title */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Task Title*</span>
              </label>
              <input
                type="text"
                placeholder="Task Title"
                {...register("task_title", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/* Task Detail */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Task Detail*</span>
              </label>
              <input
                type="text"
                placeholder="Task Detail"
                {...register("task_detail", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            {/* Quantity */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Task Quantity*</span>
              </label>
              <input
                type="number"
                placeholder="Task Quantity"
                {...register("task_quantity", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/* Payable Amount */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Payable Amount*</span>
              </label>
              <input
                type="number"
                placeholder="Payable Amount"
                {...register("payable_amount", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            {/* Completion Date */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Completion Date*</span>
              </label>
              <input
                type="date"
                {...register("completion_date", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/* Submission Info */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Submission Info*</span>
              </label>
              <input
                type="text"
                placeholder="Submission Info"
                {...register("submission_info", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Image */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Upload Image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="md:btn-wide border border-[#2E7D32] text-lg font-bold rounded-xl p-2 bg-[#F1F8E9] border-b-2 hover:bg-transparent text-[#2E7D32] mb-4">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
