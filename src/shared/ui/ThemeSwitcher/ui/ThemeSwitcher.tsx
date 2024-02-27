import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import { classNames } from 'shared/lib/classNames/classNames';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
    className,
}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAN}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
