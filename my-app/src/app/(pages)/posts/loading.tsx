import { FC } from 'react';

import { PageSkeleton } from '@/app/_components/loading/page';

const PostLoadingPage: FC = () => (
    <div className="tw-page-container">
        <PageSkeleton />
    </div>
);
export default PostLoadingPage;
