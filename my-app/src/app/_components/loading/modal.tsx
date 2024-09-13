import { FC } from 'react';

import { Skeleton } from '../shadcn/skeleton';

export const ModalSkeleton: FC = () => (
    <div className="tw-flex tw-flex-col tw-space-y-3 tw-w-full">
        <Skeleton className="tw-w-full tw-h-32" />
        <div className="tw-w-full tw-space-x-20 tw-flex tw-justify-between tw-h-16">
            <Skeleton className="tw-w-1/3 tw-flex-none tw-backdrop-blur-sm tw-bg-gray-950/30" />
            <Skeleton className="tw-flex-auto  tw-backdrop-blur-sm tw-bg-gray-950/30" />
        </div>
    </div>
);
