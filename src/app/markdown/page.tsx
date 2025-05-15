"use client";

// https://github.com/iandinwoodie/github-markdown-tailwindcss/blob/master/markdown.css
import ReactMarkdown from "react-markdown";
// import DOMPurify from "dompurify";
import DOMPurify from "isomorphic-dompurify";
import { Textarea } from "@/components/ui/textarea";
import remarkGfm from "remark-gfm";
import { useMemo, useState } from "react";
// import styles from "./markdown.module.css";
// NOTE: globals.cssに追加しないと上手く反映されなかった
// import "./markdown.css";
import "@/app/markdown/markdown.css";

type SafeMarkdownProps = {
  markdown: string;
};

const SafeMarkdown = ({ markdown }: SafeMarkdownProps) => {
  const sanitizedMarkdown = useMemo(
    () => DOMPurify.sanitize(markdown),
    [markdown]
  );
  // const sanitizedMarkdown = DOMPurify.sanitize(markdown);

  return (
    // <div className={styles.markdown}>
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {sanitizedMarkdown}
      </ReactMarkdown>
    </div>
  );
};

const Page = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div>
      <Textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <SafeMarkdown markdown={markdown} />
    </div>
  );
};

export default Page;
