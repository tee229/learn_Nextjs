import { Metadata, ResolvingMetadata } from 'next';
import { FC } from 'react';

import { PostCreateForm } from './form';
import $styles from './style.module.css';

export const generateMetadata = async (
    { params }: { params: Record<string, any> },
    parent: ResolvingMetadata,
): Promise<Metadata> => {
    return {
        title: `创建文章 - ${(await parent).title?.absolute}`,
        description: '文章创建页面',
    };
};

const PostCreatePage: FC = () => (
    <div className="tw-page-container">
        <div className={$styles.item}>
            <PostCreateForm />
        </div>
    </div>
);
export default PostCreatePage;
