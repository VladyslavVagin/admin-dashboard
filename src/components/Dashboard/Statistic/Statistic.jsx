import React from "react";
import { useDashboard } from "../../../hooks/useDashboard";
import sprite from "../../../assets/sprite.svg";

const Statistic = () => {
  const { allCustomers, allProducts, allSuppliers } = useDashboard();

  return (
    <section>
      <ul>
        <li>
          <div>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-currency`}></use>
            </svg>
            <p>All products</p>
          </div>
          <span>{allProducts}</span>
        </li>
        <li>
          <div>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-ci_users`}></use>
            </svg>
            <p>All suppliers</p>
          </div>
          <span>{allSuppliers}</span>
        </li>
        <li>
          <div>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-ci_users`}></use>
            </svg>
            <p>All customers</p>
          </div>
          <span>{allCustomers}</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistic;
