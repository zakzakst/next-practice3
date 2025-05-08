export const validationMessage = {
  minLength: (len: number) => `${len}文字以上で入力してください`,
  maxLength: (len: number) => `${len}文字以内で入力してください`,
  emailFormat: "メールアドレスの書式で入力してください",
  passwordFormat: "パスワードは半角英数字混合で入力してください",
};

export const validationRegex = {
  password: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
};
