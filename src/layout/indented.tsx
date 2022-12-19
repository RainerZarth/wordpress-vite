import styles from './indented.module.css'

function Indented(props:{
    children:any,
    dangerouslySetInnerHTML:any
}) {
    return (
        <div className={ styles.indented } {...props.dangerouslySetInnerHTML}>
            { props.children }
        </div>
    )
};

export default Indented;