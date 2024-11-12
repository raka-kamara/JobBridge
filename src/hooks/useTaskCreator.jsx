import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTaskCreator = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isTaskCreator, isPending: isTaskCreatorLoading } = useQuery({
    queryKey: [user?.email, "isTaskCreator"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/TaskCreator/${user.email}`);
      console.log(res.data);
      return res.data?.TaskCreator;
    },
  });
  return [isTaskCreator, isTaskCreatorLoading];
};

export default useTaskCreator;
