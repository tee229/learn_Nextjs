import { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { Header } from '../_components/header';
import { Toaster } from '../_components/shadcn/toaster';

export const metadata: Metadata = {
    title: 'tee229的博客',
    description:
        'tee229的个人博客,提供一些teeworlds、ddrace network相关的技术文档以及分享一些生活琐事',
};

const AppLayout: FC<PropsWithChildren<{ modal: ReactNode }>> = ({ children, modal }) => (
    <>
        <div className="tw-app-layout">
            <Header />
            {children}
        </div>
        {modal}
        <Toaster />
    </>
);

export default AppLayout;
