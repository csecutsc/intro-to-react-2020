import Section from "../Section";
import { NavLink } from 'react-router-dom';
import styles from './Layout.module.scss';

const links = [
    {
        label: `Home`,
        to: `/`,
        exact: true,
    },
    {
        label: `Credits`,
        to: `/credits`,
        exact: true,
    },
];

export default function Layout({ children }) {
    return (
        <>
            <Section containerClassName={styles.container} className={styles.nav} tag='nav'>
                <span className={styles.logo}>Pokemon owo</span>
                <ul className={styles.menu}>
                    {links.map(({ label, to, ...props }, key) => (
                        <li key={key}>
                            <NavLink
                                activeClassName={styles[`link--active`]}
                                className={styles.link}
                                to={to}
                                {...props}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </Section>
            <main>
                {children}
            </main>
        </>
    );
}