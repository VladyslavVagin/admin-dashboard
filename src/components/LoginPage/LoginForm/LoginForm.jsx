// @ts-nocheck
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import { schemaLogin } from "../../../schemas/shemas";
import { Form, SubmitBtn } from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  const onSubmit = (data) => {
    dispatch(logIn(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        <input type="email" {...register("email")} placeholder="Email address"/>
        <p>{errors.email?.message}</p>
      </label>
      <label htmlFor="password">
        <input type="password" {...register("password")} placeholder="Password"/>
        <p>{errors.password?.message}</p>
      </label>
        <SubmitBtn type="submit">Log in</SubmitBtn>
    </Form>
  );
};

export default LoginForm;
