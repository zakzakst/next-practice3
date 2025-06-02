### やること

https://zenn.dev/yumemi_inc/articles/storybook-testing-next-navigation

- next-session 使ってみる
  https://github.com/frontend-testing-book/nextjs/blob/main/src/lib/next-session/index.ts
- 下記みたいのあるの覚えておく
  https://www.npmjs.com/package/@testing-library/react-hooks
- 下記試す
  https://zenn.dev/takky94/articles/4daa73dd516bf3
- form onSubmit 以外で react hook form の handleSubmit 使う
- jest で fetch を mock 化
  https://widen.tokyo/jest-fetch-mock-test/
  - エラー時など異常系の表示検証もやりたい
  - react hook form の挙動チェックを jest で行う
- SWR を利用
  - GET の時に axios 使った方がシンプルに書ける？
  - use 〇〇の関数をそれぞれの場面に合わせてカスタマイズ
- SWR 的な hook を作ってみる
- セッションを閉じてもログイン状態を保持する方法（多分サーバーの設定も関連するかもだから別で対応）

### やること（済）

- react-hook-form に zod を連携する（エラーメッセージの共通化も頑張る）
- msw を適用する
- SWR を利用
  - https://swr.vercel.app/ja/docs/getting-started
  - 一回 use 〇〇のような関数作ってみる
  - ボタンをクリックしてから発火
  - ページネーション
  - エラーハンドリング
  - POST,PUT,DELETE の場合
- SWR を利用
  - react hook form との連携
    ⇒TODO リスト作る
    - form 以外にも、ページネーションや絞り込みやる、あとマークダウンでの入力もやりたい
    - ログインフォームも
- alert の provider やる
- サニタイズのライブラリ調べる

### エラー時に参考にした

- `The current testing environment is not configured to support act(...)`
  https://airry.hatenablog.com/entry/globalthis_is_react_act_environment-not_working/
