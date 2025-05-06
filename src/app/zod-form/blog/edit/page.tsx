"use client";

import { BlogForm, BlogFormValues } from "../../components/PostForm";

const Page = () => {
  const defaultValues = {
    name: "test",
  };

  const onSubmit = (values: BlogFormValues) => {
    console.log(values);
  };

  return <BlogForm defaultValues={defaultValues} onSubmit={onSubmit} />;
};

export default Page;
