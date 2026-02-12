import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

// ユーザー情報の型定義
type UserInfo = {
    isAdmin: boolean;
};

// Contextで配布する値の型定義（状態 + 状態の操作）
type UserContextType = {
    userInfo: UserInfo | null;
    setUserInfo: Dispatch<SetStateAction<UserInfo | null>>;
};

// Contextの作成（コンポーネントツリー全体で状態を共有するための器）
export const UserContext = createContext<UserContextType>({} as UserContextType)

type Props = {
    children: ReactNode;
};

// Providerコンポーネント：子コンポーネントに状態を配布する役割
export const UserProvider = (props: Props) => {
    const { children } = props;

    // 状態の定義
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    // 状態の配布
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}