import { useSelector } from "react-redux";
import {
  selectProducts,
  selectCategories,
  selectProductsError,
  selectProductsLoading,
} from "../redux/products/selectors";

export const useProducts = () => {
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const productsLoading = useSelector(selectProductsLoading);
  const productsError = useSelector(selectProductsError);

  return {
    products,
    categories,
    productsLoading,
    productsError,
  };
};
