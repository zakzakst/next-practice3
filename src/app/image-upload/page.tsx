// import { ImageUpload } from "./components/image-upload";
import { ImageUpload2 } from "./components/image-upload2";

// TODO:
// - 画像入力の単体テスト書く
//   - https://github.com/frontend-testing-book/nextjs/blob/main/src/components/molecules/PostFormHeroImage/index.test.tsx
//   - https://github.com/frontend-testing-book/nextjs/blob/main/src/tests/jest.ts
// - react hook formとの連携

const Page = () => {
  return (
    <div>
      {/* <ImageUpload /> */}
      <ImageUpload2 />
    </div>
  );
};

export default Page;
