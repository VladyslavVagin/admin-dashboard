import { useSelector } from "react-redux";
import {
  selectSuppliers,
  selectSuppliersError,
  selectSuppliersLoading,
} from "../redux/suppliers/selectors";

export const useSuppliers = () => {
  const suppliers = useSelector(selectSuppliers);
  const suppliersLoading = useSelector(selectSuppliersLoading);
  const suppliersError = useSelector(selectSuppliersError);

  return {
    suppliers,
    suppliersLoading,
    suppliersError,
  };
};
