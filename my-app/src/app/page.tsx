import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/app/_components/shadcn/button';

import $styles from './page.module.css';

const App: FC = () => (
    <main className={$styles.container}>
        <div className={$styles.block}>
            欢迎来到teeworlds，这是<span>Nextjs学习的开始</span>
            <Button asChild>
                <Link href="https://github.com/tee229/learn_Nextjs" target="_blank">
                    查看仓库
                </Link>
            </Button>
        </div>
    </main>
);

export default App;
