'use client';

import React, { FC } from 'react';

import { Header } from './_components/header';
import { Button } from './_components/shadcn/button';

const ErrorBoundaryPage: FC<{ error: Error & { digest?: string }; reset: () => void }> = ({
    error,
    reset,
}) => (
    <div className="tw-app-layout">
        <Header />
        <div className="tw-page-container">
            <div className="tw-page-blank tw-flex tw-flex-col tw-space-y-4">
                <h2>糟糕!服务器挂了...</h2>
                <p>错误信息: {error.message} .</p>
                <p>
                    <b>如果是你自己的网络问题,修复后可.如果不是,请尽快联系管理员处理,十分感谢!</b>
                </p>
                <Button onClick={reset}>点此重试</Button>
            </div>
        </div>
    </div>
);
export default ErrorBoundaryPage;
