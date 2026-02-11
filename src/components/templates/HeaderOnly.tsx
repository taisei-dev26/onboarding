import { type ReactNode } from 'react';
import Header from '../atoms/layout/Header'

type Props = {
    children: ReactNode;
};

const HeaderOnly = (props: Props) => {
    const { children } = props;
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default HeaderOnly