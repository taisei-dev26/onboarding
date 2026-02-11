# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Type-check (tsc -b) and build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Tech Stack

- React 19 + TypeScript 5.9 + Vite 7
- Styling: styled-components v6
- Routing: react-router-dom v7

## Architecture

### App構成

`main.tsx` → `App.tsx` → `UserProvider` → `BrowserRouter` → `Router`

- グローバルContextは `src/providers/` にProviderとして配置し、`App.tsx` でラップする
- ルーティングは `src/router/Router.tsx` で定義し、各ページをLayoutテンプレートで囲む

### Atomic Design

```
src/components/
├── atoms/       # 基本UI要素（Button, Input, Card, Header, Footer）
├── molecules/   # Atomsを組み合わせた単位（SearchInput, UserIconWithName）
├── organism/    # より複雑なコンポーネント（UserCard）
├── templates/   # ページレイアウト（DefaultLayout, HeaderOnly）
└── pages/       # ルートに対応するページコンポーネント
```

### Component Patterns

- **Base components**: `BaseButton` が共通スタイルを提供し、`styled(BaseButton)` で `PrimaryButton`/`SecondaryButton` に拡張
- **Styled components**: `S` プレフィックスでコンポーネント内にローカル定義（e.g., `SCard`, `SContainer`）
- **Props typing**: `type Props = {}` パターンで定義、childrenには `ReactNode` を使用
- **Export convention**: pages は named export、templates/router は default export

## TypeScript

- `verbatimModuleSyntax: true` — 型のimportには `import type` または `import { type X }` を必ず使用する
- `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true` が有効
