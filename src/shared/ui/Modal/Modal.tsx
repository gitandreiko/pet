import { FC } from 'react';

import cls from 'Modal.module.scss';
import { classNames } from '../../lib/classNames/classNames';

interface ModalProps {
  className?: string;
}

export const Modal: FC<ModalProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.modal, {}, [className])}>
            Modal Component
        </div>
    );
};
