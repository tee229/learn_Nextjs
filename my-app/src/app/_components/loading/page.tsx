import { FC } from 'react';

import { Skeleton } from '../shadcn/skeleton';

export const PageSkeleton: FC = () => (
    <div className="tw-w-full tw-justify-center tw-space-y-7">
        <div className="tw-flex tw-flex-col tw-space-y-3">
            <Skeleton className="tw-w-full tw-h-52" />
            <div className="tw-w-full tw-space-x-20 tw-flex tw-justify-between tw-h-16">
                <Skeleton className="tw-w-1/3 tw-flex-none tw-backdrop-blur-sm tw-bg-gray-950/30" />
                <Skeleton className="tw-flex-auto  tw-backdrop-blur-sm tw-bg-gray-950/30" />
            </div>
        </div>
        <div className="tw-flex tw-flex-col tw-space-y-5">
            <Skeleton className="tw-w-full tw-h-52 tw-backdrop-blur-md" />
            <div className="tw-w-full tw-space-x-20 tw-flex tw-justify-between tw-h-16">
                <Skeleton className="tw-w-1/3 tw-flex-none tw-backdrop-blur-sm tw-bg-gray-950/30" />
                <Skeleton className="tw-flex-auto tw-backdrop-blur-sm tw-bg-gray-950/30" />
            </div>
        </div>
    </div>
);
