import { FC, PropsWithChildren } from 'react';

import { PageModal } from '@/app/_components/modal/page-modal';
// import { PostActionForm } from '@/app/_components/post/action-form';

const PostCreatePage: FC<PropsWithChildren> = () => {
    return (
        <PageModal title="创建文章" match={['/post-create']}>
            {/* <PostActionForm type="create" /> */}
            创建文章
        </PageModal>
    );
};

export default PostCreatePage;
