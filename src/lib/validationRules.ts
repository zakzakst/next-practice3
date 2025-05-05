export const validationRules = {
  onlyAlphanumeric: (v: string) =>
    /^[a-zA-Z0-9]*$/.test(v) || "半角英数字のみで入力してください",

  noWhitespaceOnly: (v: string) =>
    v.trim().length > 0 || "空白のみの入力は無効です",

  emailFormat: (v: string) =>
    /^[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(v) ||
    "正しいメールアドレスを入力してください",

  noForbiddenWords: (forbidden: string[]) => (v: string) =>
    !forbidden.some((word) => v.includes(word)) ||
    `禁止語句（${forbidden.join(", ")}）が含まれています`,

  matches:
    (target: string, errorMsg: string = "一致しません") =>
    (v: string) =>
      v === target || errorMsg,
};
