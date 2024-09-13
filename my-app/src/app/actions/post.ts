'use server';

import { isNil } from 'lodash';

import { revalidateTag } from 'next/cache';
// import { v4 } from 'uuid';

// import { readDbFile, resetDbFile } from '@/database/generator';
// import { IPost, PaginateOptions, PaginateReturn } from '@/database/types';
// import { paginate } from '@/database/utils';

import { Post, Prisma } from '@prisma/client';
import db from '@/libs/db/client';
import { PaginateOptions, PaginateReturn } from '@/libs/db/types';
import { paginateTransform } from '@/libs/db/utils';

const loadingTime = () =>
    new Promise((r) => {
        setTimeout(() => {
            r(true);
        }, 3000);
    });

/**
 * 查询分页文章列表信息
 * @param options
 */
export const queryPostPaginate = async (
    options?: PaginateOptions,
): Promise<PaginateReturn<Post>> => {
    // IPost
    // 此处使用倒序,以便新增的文章可以排在最前面
    // const posts = (await readDbFile()).reverse();
    // return paginate(posts, { page: 1, limit: 8, ...options });
    // await loadingTime();
    const data = await db.post.paginate({
        orderBy: [{ updatedAt: 'desc' }, { createdAt: 'desc' }],
        page: 1,
        limit: 8,
        ...options,
    });
    return paginateTransform(data);
};

/**
 * 根据查询条件获取文章总页数
 * @param limit
 */
export const queryPostTotalPages = async (limit = 8): Promise<number> => {
    // await loadingTime();
    const data = await queryPostPaginate({ page: 1, limit });
    return data.meta.totalPages ?? 0;
};

/**
 * 根据id或slug查询文章信息
 * @param arg
 */
export const queryPostItem = async (arg: string): Promise<Post | null> => {
    // throw new Error('数据加载错误，请稍后重试！');
    // await loadingTime();
    const item = await db.post.findFirst({
        where: {
            OR: [
                { id: arg },
                {
                    slug: arg,
                },
            ],
        },
    });
    return item;
};

/**
 * 根据slug查询文章信息
 * @param slug
 */
export const queryPostItemBySlug = async (slug: string): Promise<Post | null> => {
    // await loadingTime();
    const item = await db.post.findUnique({ where: { slug } });
    return item;
};

/**
 * 根据ID查询文章信息
 * @param id
 */
export const queryPostItemById = async (id: string): Promise<Post | null> => {
    // IPost
    // const posts = await readDbFile();
    // const item = posts.find((post) => post.id === id);
    // if (isNil(item)) throw new Error('post not exists!');
    // await loadingTime();
    const item = await db.post.findUnique({ where: { id } });
    return item;
};

/**
 * 新增文章
 * @param data
 */
// export const createPostItem = async (data: Omit<IPost, 'id'>): Promise<IPost> => {
//     const posts = await readDbFile();
//     const item: IPost = {
//         ...data,
//         id: v4(),
//     };
//     posts.push(item);
//     await resetDbFile(posts);
//     revalidateTag('posts');
//     return item;
// };
export const createPostItem = async (data: Prisma.PostCreateInput): Promise<Post> => {
    // await loadingTime();
    const item = await db.post.create({ data });
    revalidateTag('posts');
    return item;
};

/**
 * 更新文章
 * @param id
 * @param data
 */
// export const updatePostItem = async (
//     id: string,
//     data: Partial<Omit<IPost, 'id'>>,
// ): Promise<IPost | null> => {
//     let posts = await readDbFile();
//     const item = await queryPostItemById(id);
//     if (isNil(item)) return null;
//     const result = {
//         ...(await queryPostItemById(id)),
//         ...data,
//     } as IPost;
//     posts = posts.map((post) => (post.id === id ? result : post));
//     await resetDbFile(posts);
//     revalidateTag('posts');
//     return result;
// };
export const updatePostItem = async (
    id: string,
    data: Partial<Omit<Post, 'id'>>,
): Promise<Post> => {
    // throw new Error('表单提交错误，请稍后重试！');
    // await loadingTime();
    const item = await db.post.update({ where: { id }, data });
    revalidateTag('posts');
    return item;
};

/**
 * 删除文章
 * @param id
 */
export const deletePostItem = async (id: string): Promise<Post | null> => {
    // IPost
    // let posts = await readDbFile();
    // const item = await queryPostItemById(id);
    // if (isNil(item)) return null;
    // posts = posts.filter((post) => post.id !== id);
    // await resetDbFile(posts);
    // revalidateTag('posts');
    // return item;
    
    // await loadingTime();
    const item = await db.post.findUnique({ where: { id } });
    if (!isNil(item)) {
        await db.post.delete({ where: { id } });
        revalidateTag('posts');
        return item;
    }
    return null;
};