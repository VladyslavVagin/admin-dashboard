import React from "react";
import Select from "react-select";
import { useMediaQuery } from "react-responsive";
import { useProducts } from "../../../../hooks/useProducts";

const CategorySelect = ({ categoryValue, setCategoryValue }) => {
  const is768 = useMediaQuery({ minWidth: 768 });
  const { categories } = useProducts();
  const categoriesData = [
    ...categories.map((category) => {
      return { label: category, value: category };
    }),
  ];

  const handleByCategory = (e) => setCategoryValue(e?.value);
  const selectValue =
    categoryValue === null
      ? null
      : categoriesData.find((option) => option.label === categoryValue);

  return (
    <>
      <Select
        value={selectValue}
        onChange={handleByCategory}
        options={categoriesData}
        placeholder={"Category"}
        maxMenuHeight={178}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid var(--border-color)",
            width: is768 ? "224px" : "100%",
            height: "44px",
            background: "var(--white-color)",
            paddingLeft: "8px",
            borderRadius: "30px",
            boxShadow: "none",
            fontSize: "12px",
            outline: "none",
            fontWeight: "500",
            lineHeight: "1.29",
            letterSpacing: "-0.03em",
            color: "var(--main-dark)",
            fontFamily: "Inter",
            cursor: "pointer",
            "&::placeholder": {
              color: "var(--placeholder-color)",
            },
            "&:hover": {
              borderColor: "var(--accent-color)",
            },
            "&:focus-within": {
              borderColor: "var(--accent-color)",
              outline: "none",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: "14px",
            fontWeight: "500",
            fontFamily: "Inter",
            lineHeight: "1.25",
            background: "transparent",
            cursor: "pointer",
            color: state.isFocused
              ? "var(--white-color)"
              : "rgba(255, 255, 255, 0.5)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "30px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "var(--placeholder-color)",
            fontFamily: "Inter",
            fontSize: "12px",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: is768 ? "224px" : "100%",
            borderRadius: "15px",
            background: "var(--accent-color)",
          }),
        }}
      />
    </>
  );
};

export default CategorySelect;
