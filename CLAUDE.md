# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Type-check and build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Tech Stack

- React 19 + TypeScript + Vite 7
- Styling: styled-components
- Routing: react-router-dom (installed, not yet configured)

## Architecture

This project follows **Atomic Design** pattern for component organization:

```
src/components/
├── atoms/       # 基本UI要素（Button, Input）
├── molecules/   # Atomsを組み合わせた単位（SearchInput）
└── organism/    # より複雑なコンポーネント（UserCard）
```

### Component Patterns

- **Base components**: `BaseButton` provides shared styles, extended by `PrimaryButton`/`SecondaryButton`
- **Styled components naming**: Use `S` prefix for styled wrappers (e.g., `SButton`, `SContainer`)
- **Props typing**: Use `type Props = {}` pattern with explicit `ReactNode` for children
