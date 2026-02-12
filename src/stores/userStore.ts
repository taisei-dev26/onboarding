import { create } from "zustand";

// ユーザー情報の型定義
type UserInfo = {
    isAdmin: boolean;
}

// Storeの型定義（状態 + 状態の操作）
type UserState = {
    userInfo: UserInfo | null;
    setUserInfo: (userInfo: UserInfo | null) => void;
}

// Storeの作成（状態の定義 + 操作 + 配布をすべてここで完結）
export const useUserStore = create<UserState>((set) => ({
    // 状態の定義（初期値はnull）
    userInfo: null,
    // 状態の操作（setでStoreの状態を更新する）
    setUserInfo: (userInfo) => set({ userInfo })
}))