import Link from 'next/link';
import { FC } from 'react';

import { Header } from './_components/header';

const NotFoundPage: FC = () => (
    <div className="tw-app-layout">
        <Header />
        <div className="tw-page-container">
            <div className="tw-page-blank">
                <h2>Not Found</h2>
                <span className="tw-mx-3">|</span>
                <p>
                    404错误意味着这个页面已经不存在了,请请点击头像 &nbsp;
                    <b>
                        <Link className="tw-animate-decoration" href="/">
                            返回首页
                        </Link>
                    </b>
                </p>
            </div>
        </div>
    </div>
);

export default NotFoundPage;
