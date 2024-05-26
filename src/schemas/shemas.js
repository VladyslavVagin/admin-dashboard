import * as yup from "yup";

const emailRegExp = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;

export const schemaLogin = yup.object().shape({
    email: yup.string().matches(emailRegExp, "Enter a valid Email").required(),
    password: yup.string().min(7).required(),
  });