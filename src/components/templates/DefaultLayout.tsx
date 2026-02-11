import { type ReactNode } from 'react';
import Footer from '../atoms/layout/Footer';
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
        <Footer />
    </>
  )
}

export default HeaderOnly