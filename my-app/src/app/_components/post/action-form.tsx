'use client';

import { isNil, trim } from 'lodash';
import Link from 'next/link';
// import { FC, useEffect, useState } from 'react';
import {
    ChangeEventHandler,
    forwardRef,
    MouseEventHandler,
    useCallback,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';

import { generateLowerString } from '@/libs/utils';

import { Details } from '../collapsible/details';
import { MarkdownEditor } from '../markdown/editor';
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

import { usePostActionForm, usePostFormSubmitHandler, usePostEditorScreenHandler } from './hooks';
import { PostActionFormProps, PostCreateFormRef } from './types';

// export const PostActionForm: FC<PostActionFormProps> = (props) => {
export const PostActionForm = forwardRef<PostCreateFormRef, PostActionFormProps>((props, ref) => {
    const [body, setBody] = useState(props.type === 'create' ? '文章内容' : props.item.body);
    useEffect(() => {
        form.setValue('body', body);
    }, [body]);

    const [slug, setSlug] = useState(props.type === 'create' ? '' : props.item.slug || '');
    const changeSlug: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => setSlug(e.target.value),
        [],
    );

    const generateTitleSlug: MouseEventHandler<HTMLAnchorElement> = useCallback((e) => {
        e.preventDefault();
        const title = trim(form.getValues('title'), '');
        if (title) setSlug(generateLowerString(title));
      }, []);

      useEffect(() => {
        form.setValue('slug', slug);
      }, [slug]);

    const editorScreenHandler = usePostEditorScreenHandler();

    // 表单中的数据值获取
    const form = usePostActionForm(
        props.type === 'create' ? { type: props.type } : { type: props.type, item: props.item },
    );
    const submitHandler = usePostFormSubmitHandler(
        props.type === 'create' ? { type: 'create' } : { type: 'update', id: props.item.id },
    );

    useImperativeHandle(
        ref,
        () =>
            props.type === 'create'
                ? {
                      create: form.handleSubmit(submitHandler),
                  }
                : {},
        [props.type],
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

                <Details summary="可选字段">
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

                    <div className="tw-mt-2 tw-pb-1 tw-border-b tw-border-dashed">
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>唯一URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            value={slug}
                                            onChange={changeSlug}
                                            placeholder="请输入唯一URL"
                                            disabled={form.formState.isSubmitting}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        如果留空,则文章访问地址是id
                                        <Link
                                            className="tw-ml-5 tw-mr-1"
                                            href="#"
                                            onClick={generateTitleSlug}
                                            aria-disabled={form.formState.isSubmitting}
                                        >
                                            [点此]
                                        </Link>
                                        自动生成slug(根据标题使用&apos;-&apos;连接字符拼接而成,中文字自动转换为拼音)
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="keywords"
                        render={({ field }) => (
                            <FormItem className="tw-mt-2 tw-pb-1 tw-border-b tw-border-dashed">
                                <FormLabel>关键字</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="请输入关键字,用逗号分割(关键字是可选的)"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    关键字不会显示,仅在SEO时发挥作用.每个关键字之间请用英文逗号(,)分割
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="tw-mt-2 tw-pb-1 tw-border-b tw-border-dashed">
                                <FormLabel>文章描述</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="请输入文章描述" {...field} />
                                </FormControl>
                                <FormDescription>
                                    文章描述不会显示,仅在SEO时发挥作用
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </Details>

                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>文章内容</FormLabel>
                            <FormControl>
                                {/* <Textarea
                                    placeholder="请输入内容"
                                    {...field}
                                    className="tw-min-h-80"
                                /> */}
                                <MarkdownEditor
                                    {...field}
                                    content={body}
                                    setContent={setBody}
                                    handlers={editorScreenHandler}
                                    previewTheme="arknights"
                                    />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <Button type="submit">保存</Button> */}
                {props.type === 'update' && <Button type="submit">保存</Button>}
            </form>
        </Form>
    );
});
// };
