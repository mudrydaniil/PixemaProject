import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar'; // Его мы тоже сейчас создадим
import s from './Layout.module.scss';

export const Layout = () => {
    return (
        <div className={s.wrapper}>
            <Sidebar />
            <main className={s.main}>
                <header className={s.header}>
                    {/* Место для будущего поиска и юзера */}
                    <div style={{ color: '#AFB2B6' }}>Search and User will be here</div>
                </header>
                <section className={s.content}>
                    <Outlet /> {/* Здесь будут меняться наши страницы (Home, Trends и т.д.) */}
                </section>
            </main>
        </div>
    );
};