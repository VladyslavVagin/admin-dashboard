// @ts-nocheck
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { getOrdersByQuery } from "../../redux/orders/operations";
import sprite from "../../assets/sprite.svg";
import { schemaFilter } from "../../schemas/shemas";
import { FilterContainer, Form, Label } from "./FilterBar.styled";

const FilterBar = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaFilter) });

    const onSubmit = (data) => {
      if(data.query !== "" || data.query !== null) {
        dispatch(getOrdersByQuery(data.query));
        setValue("query", "");
      }
    };

  return (
    <FilterContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <input
            type="text"
            {...register("query")}
            placeholder="User Name"
            required
          />
          <p>{errors.query?.message}</p>
        </Label>
        <button type="submit">
          <svg width={14} height={14}>
            <use xlinkHref={`${sprite}#icon-filter`}></use>
          </svg>
          Filter</button>
      </Form>
    </FilterContainer>
  );
};

export default FilterBar;
