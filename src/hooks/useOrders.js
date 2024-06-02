import { useSelector } from "react-redux";
import { selectOrders, selectIsLoading, selectIsError } from "../redux/orders/selectors";

export const useOrders = () => {
    const orders = useSelector(selectOrders);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    
    return {
        orders,
        isLoading,
        isError,
    };
};