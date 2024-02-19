import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
}

export const Modal: FC<ModalProps> = ({
    className,
}: ModalProps) => (
    <div className={classNames(cls.modal, {}, [className])}>
        Modal Component
    </div>
);
