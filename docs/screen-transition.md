# 画面遷移図

## 概要

```mermaid
flowchart TB
    subgraph App ["🌐 App (BrowserRouter)"]
        direction TB

        subgraph Header ["📌 Header（共通ナビゲーション）"]
            HomeLink["🏠 Home リンク"]
            UsersLink["👥 Users リンク"]
        end

        subgraph TopPage ["📄 Top ページ  ( / )"]
            direction TB
            TopLayout["Template: DefaultLayout"]
            TopContent["「TOPページです」"]
        end

        subgraph UsersPage ["📄 Users ページ  ( /users )"]
            direction TB
            UsersLayout["Template: HeaderOnly"]
            SearchInput["🔍 SearchInput（検索バー）"]
            UserCards["🃏 UserCard × 10（ユーザー一覧）"]
        end

        subgraph Footer ["📌 Footer（共通フッター）"]
            Copyright["© 2021 test Inc."]
        end
    end

    HomeLink -- "Link to /" --> TopPage
    UsersLink -- "Link to /users" --> UsersPage

    style Header fill:#11999e,color:#fff,stroke:#0d7377
    style Footer fill:#11999e,color:#fff,stroke:#0d7377
    style TopPage fill:#e8f5e9,stroke:#4caf50,color:#333
    style UsersPage fill:#e3f2fd,stroke:#2196f3,color:#333
    style App fill:#fafafa,stroke:#ccc,color:#333
```

## ルート定義

| パス | ページ | テンプレート | 説明 |
|------|--------|-------------|------|
| `/` | `Top` | `DefaultLayout` | トップページ |
| `/users` | `Users` | `HeaderOnly` | ユーザー一覧ページ |

## 遷移フロー

```mermaid
stateDiagram-v2
    [*] --> Top: 初回アクセス (/)

    Top --> Users: Header「Users」リンク
    Users --> Top: Header「Home」リンク

    state Top {
        [*] --> TopDisplay
        TopDisplay: TOPページです
    }

    state Users {
        [*] --> UserList
        UserList: ユーザー一覧（10件）
        UserList: SearchInput + UserCard Grid
    }
```

## コンポーネント階層

```
App (BrowserRouter)
└── Router
    ├── / ─── DefaultLayout
    │         ├── Header
    │         │   ├── Link "Home" → /
    │         │   └── Link "Users" → /users
    │         ├── Top (ページコンテンツ)
    │         └── Footer
    │
    └── /users ─── HeaderOnly
                   ├── Header
                   │   ├── Link "Home" → /
                   │   └── Link "Users" → /users
                   ├── Users (ページコンテンツ)
                   │   ├── SearchInput
                   │   │   ├── Input
                   │   │   └── PrimaryButton "検索"
                   │   └── UserCard[] × 10
                   │       ├── UserIconWithName
                   │       └── Details (email, phone, company, website)
                   └── Footer
```

## ナビゲーション方式

- **実装方法**: `react-router-dom` の `<Link>` コンポーネント
- **ナビゲーション起点**: Header コンポーネントのみ
- **プログラム的遷移**: なし（`useNavigate` 未使用）
- **動的ルーティング**: なし（すべて静的パス）
