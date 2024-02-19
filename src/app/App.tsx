import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button type="button" onClick={() => setIsOpen(true)}>модалка</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>1232131231245523553535</Modal>
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
