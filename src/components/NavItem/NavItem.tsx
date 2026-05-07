import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import s from './NavItem.module.scss'

interface NavItemProps {
    to: string;
    icon: ReactNode;
    label: string;
}

export const NavItem = ({ to, icon, label }: NavItemProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => cn(s.link, { [s.active]: isActive })}
        >
            <span className={s.icon}>{icon}</span>
            <span className={s.label}>{label}</span>
        </NavLink>
    );
};