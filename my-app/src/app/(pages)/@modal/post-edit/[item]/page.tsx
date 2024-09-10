import { FC } from 'react';

// import { PageModal } from '@/app/_components/modal/page-modal';
import { EditorModal } from '@/app/_components/modal/editor-modal';
import { PostEditForm } from './form';

const PostEditPage: FC<{ params: { item: string } }> = async ({ params: { item } }) => {
    return (
        // <PageModal title="编辑文章" match={['/post-edit/*']}>
        //     <PostEditForm id={item} />
        // </PageModal>
        
        <EditorModal title="编辑文章" match={['/post-edit/*']}>
            <PostEditForm id={item} />
        </EditorModal>
    );
};
export default PostEditPage;
