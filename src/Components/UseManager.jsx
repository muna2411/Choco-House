import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import UseAxiosSecure from "./useAxiosSecure";

const UseManager = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();

    const { data: isManager, isPending: isManagerLoading } = useQuery({
        queryKey: [user?.email, 'isManager'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/manager/${user.email}`);
            return res.data?.manager;
        }
    });

    return [isManager, isManagerLoading];
};

export default UseManager;
