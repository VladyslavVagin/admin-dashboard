// @ts-nocheck
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { getSuppliers } from '../../../redux/suppliers/operations';
import sprite from "../../../assets/sprite.svg";
import { schemaFilter } from "../../../schemas/shemas";
import {
    FilterBtn,
    FilterContainer,
    Form,
    Label,
    ResetBtn,
  } from "../../FilterBar/FilterBar.styled";
  

const FilterSuppliers = () => {
    const dispatch = useDispatch();
    const [showReset, setShowReset] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schemaFilter) });
    
      const onSubmit = (data) => {
        if (data.query !== "" || data.query !== null) {
        //   dispatch(getProductsByQuery(data.query));
          setShowReset(true);
        }
      };

      const handleReset = () => {
        setValue("query", "");
        dispatch(getSuppliers());
        setShowReset(false);
      };
    
      const handleChangeInput = e => {
        if(e.target.value && e.target.value.trim() !== "" ) {
          setShowReset(true);
        }
      }

  return (
    <FilterContainer>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <input
          type="text"
          {...register("query")}
          onChange={handleChangeInput}
          placeholder="User Name"
          required
        />
        {showReset && (
          <ResetBtn type="button" onClick={handleReset}>
            <svg width={14} height={14}>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </svg>
          </ResetBtn>
        )}
        <p>{errors.query?.message}</p>
      </Label>
      <FilterBtn type="submit">
        <svg width={14} height={14}>
          <use xlinkHref={`${sprite}#icon-filter`}></use>
        </svg>
        Filter
      </FilterBtn>
    </Form>
  </FilterContainer>
  )
}

export default FilterSuppliers;