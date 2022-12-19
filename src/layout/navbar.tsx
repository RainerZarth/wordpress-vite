import styles from './navbar.module.css'
import Icon from '../components/icon';
import {MouseEventHandler, useState} from 'react';
import Sidenav from './sidenav';
import GetNav from '../components/GetNav';
import Indented from './indented';


function Navbar(props:{
    children:any,
    setRoute:any
}) {
    const [nav, setNav] = useState(false)

    const handleSetRoute = (event:React.MouseEvent) => {
        event.preventDefault();
        const eTarget = event.target as HTMLElement;
        if (!eTarget) { return;}
        const newRoute = eTarget.getAttribute("value");
        if (newRoute) {
            props.setRoute((route:string)=>route = newRoute);
            setNav((nav) => !nav);
        }
    };
    const navItems = GetNav();
    const navHTML = navItems?.map((item, i) => {
        return (
            <li key={i+1} onClick={handleSetRoute} value={item.id}>{item.title}</li>
        )
    });

    return (
        <>
        <nav className={ styles.nav }>
            <Indented>
                <Icon src="/svg/menu.svg"
                onClick={() => setNav((nav) => !nav)}
                />
                <Icon className={styles.account } src="/svg/account.svg"/>
            </Indented>
            
            <Sidenav active={nav}>
                <ul>
                    {navHTML}
                </ul>
            </Sidenav>
        </nav>
        {props.children}
        </>
    )
};

export default Navbar;