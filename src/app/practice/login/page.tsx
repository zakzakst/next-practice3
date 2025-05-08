"use client";

import { LoginForm, LoginFormValues } from "../components/loginForm";
import { usePostLogin } from "../api/login";

const Page = () => {
  const { trigger, error, isMutating } = usePostLogin();
  const onSubmit = async (data: LoginFormValues) => {
    if (isMutating) return;
    const { email, password } = data;
    const result = await trigger({ email, password });
    console.log(result.id);
  };

  return (
    <>
      {error && <p>{error.message}</p>}
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};

export default Page;
