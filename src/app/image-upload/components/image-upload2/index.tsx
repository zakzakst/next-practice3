"use client";

import { useDropArea } from "react-use";
import { useState } from "react";
import clsx from "clsx";

export const ImageUpload2 = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleDropFiles = (files: File[]) => {
    if (!files.length) return;

    [...files].forEach((file) => {
      console.log(file.name, file.size, file.type);
      if (file.size > 30000) return;
      if (file.type !== "image/png") return;

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result !== "string") return;
        setImages((value) => [...value, result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteImage = (index: number) => {
    setImages((value) => value.filter((_, i) => i !== index));
  };

  const [bond, state] = useDropArea({
    // NOTE: ファイルをドロップした時に発火した
    // onFiles: (files) => console.log("files", files),
    onFiles: handleDropFiles,
    // NOTE: ショートカットファイル と ブラウザのURLを選択してドラッグしてきた時に発火した
    onUri: (uri) => console.log("uri", uri),
    // NOTE: 対象要素にフォーカスがある状態でペーストした時発火した
    onText: (text) => console.log("text", text),
  });

  return (
    <div>
      <p>image upload 2</p>
      {JSON.stringify(state)}
      <div
        {...bond}
        className={clsx("w-96 h-96 bg-gray-200", { "bg-red-200": state.over })}
      >
        {images[0] ? (
          <img src={images[0]} alt="" className="w-full h-full object-cover" />
        ) : (
          "Drop something here."
        )}
      </div>
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
