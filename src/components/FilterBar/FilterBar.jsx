import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { schemaFilter } from "../../schemas/shemas";
import { FilterContainer } from "./FilterBar.styled";

const FilterBar = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaFilter) });

    const onSubmit = (data) => console.log(data);

  return (
    <FilterContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            {...register("query")}
            placeholder="User name"
            required
          />
          <p>{errors.query?.message}</p>
        </label>
      </form>
    </FilterContainer>
  );
};

export default FilterBar;
