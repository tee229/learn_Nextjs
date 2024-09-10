import { FC, PropsWithChildren } from 'react';

// import { PageModal } from '@/app/_components/modal/page-modal';
import { EditorModal } from '@/app/_components/modal/editor-modal';
import { PostActionForm } from '@/app/_components/post/action-form';

const PostCreatePage: FC<PropsWithChildren> = () => {
    return (
        // <PageModal title="创建文章" match={['/post-create']}>
        //     <PostActionForm type="create" />
        // </PageModal>

        <EditorModal title="创建文章" match={['/post-create']}>
            <PostActionForm type="create" />
        </EditorModal>
    );
};

export default PostCreatePage;
