"use client";

import { LoginForm, LoginFormValues } from "../components/loginForm";

const Page = () => {
  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return <LoginForm onSubmit={onSubmit} />;
};

export default Page;
