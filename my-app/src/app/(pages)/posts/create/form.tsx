'use client';

import { FC, MouseEventHandler, useCallback, useRef, useState } from 'react';

import { MdOutlineSave } from 'react-icons/md';

import { BackButton } from '@/app/_components/home/back-button';
import { PostActionForm } from '@/app/_components/post/action-form';
import { PostCreateFormRef } from '@/app/_components/post/types';
import { Button } from '@/app/_components/shadcn/button';

import $styles from './style.module.css';

export const PostCreateForm: FC = () => {
    const ref = useRef<PostCreateFormRef | null>(null);
    const [pedding, setPedding] = useState(false);
    const changePadding = useCallback((value: boolean) => {
        setPedding(value);
    }, []);
    const createPost = useCallback<MouseEventHandler<HTMLButtonElement>>(async (e) => {
        e.preventDefault();
        ref.current?.create && (await ref.current?.create());
    }, []);
    return (
        <>
            <div className={$styles.actions}>
                <BackButton />
                <Button onClick={createPost} disabled={pedding}>
                    {pedding ? '保存中...' : '保存'}
                    <MdOutlineSave className="tw-ml-2" />
                </Button>
            </div>
            <PostActionForm ref={ref} type="create"/>
        </>
    );
};
