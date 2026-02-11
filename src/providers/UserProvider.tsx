import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type UserInfo = {
    isAdmin: boolean;
};

type UserContextType = {
    userInfo: UserInfo | null;
    setUserInfo: Dispatch<SetStateAction<UserInfo | null>>;
};

export const UserContext = createContext<UserContextType>({} as UserContextType)

type Props = {
    children: ReactNode;
};

export const UserProvider = (props: Props) => {
    const { children } = props;

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}