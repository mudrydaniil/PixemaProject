import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import { Search } from '../Search/Search'
import { UserPick } from '../UserPick/UserPick'
import s from './Layout.module.scss'

export const Layout = () => {
    return (
        <div className={s.wrapper}>
            <Sidebar />
            <main className={s.main}>
                <header className={s.header}>
                    <Search />
                    <UserPick />
                </header>
                <section className={s.content}>
                    <Outlet /> {/* Здесь будут меняться наши страницы (Home, Trends и т.д.) */}
                </section>
            </main>
        </div>
    )
}