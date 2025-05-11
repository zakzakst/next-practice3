### やること

- form onSubmit 以外で react hook form の handleSubmit 使う
- jest で fetch を mock 化
  https://widen.tokyo/jest-fetch-mock-test/
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
