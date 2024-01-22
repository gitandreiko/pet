import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({
    className,
}: NotFoundPageProps) => (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
        Page Not Found
    </div>
);
