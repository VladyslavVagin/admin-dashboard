// @ts-nocheck
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import { schemaLogin } from "../../../schemas/shemas";
import sprite from "../../../assets/sprite.svg";
import { Form, ShowPasswordBtn, SubmitBtn } from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  const onSubmit = (data) => {
    dispatch(logIn(data));
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        <input
          type="email"
          {...register("email")}
          placeholder="Email address"
        />
        <p>{errors.email?.message}</p>
      </label>
      <label htmlFor="password">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
        />
        <ShowPasswordBtn type="button" onClick={handleShowPassword}>
          <svg width={24} height={24}>
            <use
              xlinkHref={
                showPassword ? `${sprite}#icon-eye` : `${sprite}#icon-eye-off`
              }
            ></use>
          </svg>
        </ShowPasswordBtn>
        <p>{errors.password?.message}</p>
      </label>
      <SubmitBtn type="submit">Log in</SubmitBtn>
    </Form>
  );
};

export default LoginForm;
