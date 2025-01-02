import {useQuery,} from '@tanstack/react-query';
import UseAxiosSecure from './UseAxiosSecure';
import UseAuth from './UseAuth';

const useCard = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = UseAuth();
    const {refetch,isLoading,isPending,data: cart =[]} = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/carts?email=${user?.email}`);
            return response.data;
        }   
    });
    return [cart,refetch,isLoading,isPending];
};

export default useCard;