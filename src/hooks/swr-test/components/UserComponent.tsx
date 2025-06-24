"use client";
import { useUser } from "../useUser";
import { useReadCount } from "../useReadCount";

export const UserComponent = () => {
  const { data: userData, error: userError } = useUser();
  const { data: countData, error: countError } = useReadCount();

  if (userError || countError) return <div>エラー</div>;
  if (!userData || countData === undefined) return <div>読み込み中...</div>;

  return (
    <div>
      <div>名前: {userData.name}</div>
      <div>既読数: {countData.count}</div>
    </div>
  );
};
