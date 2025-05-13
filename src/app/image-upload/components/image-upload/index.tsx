"use client";
// https://zenn.dev/yuyan/articles/f35da08770a135

import { useState, useRef } from "react";

export const ImageUpload = () => {
  const [images, setImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    [...files].forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result !== "string") return;
        setImages((value) => [...value, result]);
      };
      reader.readAsDataURL(file);
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDeleteImage = (index: number) => {
    setImages((value) => value.filter((_, i) => i !== index));
  };

  return (
    <div>
      <p>
        <input
          type="file"
          multiple
          accept="image/jpeg, image/png"
          onChange={handleInputFile}
          ref={inputRef}
        />
      </p>
      <p>画像プレビュー</p>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" onClick={() => handleDeleteImage(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};
