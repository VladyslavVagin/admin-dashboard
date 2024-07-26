import React from "react";
import { useDashboard } from "../../../hooks/useDashboard";
import sprite from "../../../assets/sprite.svg";
import { ListItem, ListStats } from "./Statistic.styled";

const Statistic = () => {
  const { allCustomers, allProducts, allSuppliers } = useDashboard();

  return (
    <section>
      <ListStats>
        <ListItem to="/products">
          <div>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-currency`}></use>
            </svg>
            <p>All products</p>
          </div>
          <span>{allProducts}</span>
        </ListItem>
        <ListItem to="/suppliers">
          <div>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-ci_users`}></use>
            </svg>
            <p>All suppliers</p>
          </div>
          <span>{allSuppliers}</span>
        </ListItem>
        <ListItem to="/customers">
          <div>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-ci_users`}></use>
            </svg>
            <p>All customers</p>
          </div>
          <span>{allCustomers}</span>
        </ListItem>
      </ListStats>
    </section>
  );
};

export default Statistic;
