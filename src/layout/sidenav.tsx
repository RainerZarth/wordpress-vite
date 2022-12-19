import styles from './sidenav.module.css'

function Sidenav({
    children,
    active = false,
    ...props
}) {
    const isActive = active? styles["active"] : ""
    return (
        <div className={ styles.sidenav + " " + isActive }>
            { children }
        </div>
    )
};

export default Sidenav;