"use client";

import { BlogForm, BlogFormValues } from "../../components/PostForm";

const Page = () => {
  const onSubmit = (values: BlogFormValues) => {
    console.log(values);
  };

  return <BlogForm onSubmit={onSubmit} />;
};

export default Page;
