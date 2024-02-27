import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAN = 'clean',
  CLEAN_INVERTED = 'cleanInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children, className, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
