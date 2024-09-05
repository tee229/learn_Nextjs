'use client';

import { FC } from 'react';

import { Button } from '../shadcn/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../shadcn/form';
import { Input } from '../shadcn/input';
import { Textarea } from '../shadcn/textarea';

import { usePostActionForm, usePostFormSubmitHandler } from './hooks';
import { PostActionFormProps } from './types';

export const PostActionForm: FC<PostActionFormProps> = (props) => {
    // 表单中的数据值获取
    const form = usePostActionForm(
        props.type === 'create' ? { type: props.type } : { type: props.type, item: props.item },
    );
    const submitHandler = usePostFormSubmitHandler(
        props.type === 'create' ? { type: 'create' } : { type: 'update', id: props.item.id },
    );

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitHandler)} className="tw-space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>文章标题</FormLabel>
                            <FormControl>
                                <Input placeholder="请输入标题" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem className="tw-mt-2 tw-pb-1 tw-border-b tw-border-dashed">
                            <FormLabel>摘要简述</FormLabel>
                            <FormControl>
                                <Textarea placeholder="请输入文章摘要" {...field} />
                            </FormControl>
                            <FormDescription>摘要会显示在文章列表页</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>文章内容</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="请输入内容"
                                    {...field}
                                    className="tw-min-h-80"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">保存</Button>
            </form>
        </Form>
    );
};
