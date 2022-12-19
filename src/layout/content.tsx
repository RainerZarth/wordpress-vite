import styles from './content.module.css'

function Content({
    children
}) {
    return (
        <main className={ styles.main }>
            {children}
        </main>
    )
};

export default Content;