import { FC, PropsWithChildren } from 'react';

import { Header } from '../_components/header';

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
    <div className="tw-app-layout">
        <Header />
        {children}
    </div>
);
export default AppLayout;