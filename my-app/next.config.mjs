import createMDX from '@next/mdx';
import rehypePrism from 'rehype-prism-plus';

const withMDX = createMDX({
    options: {
        rehypePlugins: [[rehypePrism, { showLineNumbers: true }]],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 启用react严格模式(可选)
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        cpus: 8,
    },

    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
