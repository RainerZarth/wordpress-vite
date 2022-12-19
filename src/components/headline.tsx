import styles from './headline.module.css'

function H(props:{
    size:number,
    children:any
}) {
    const CustomTag  = `h${props.size}` as keyof JSX.IntrinsicElements;
    const art = styles[`h${props.size}`];
    return (
        <CustomTag className={ styles.headline + " " + art } >
            { props.children }
        </CustomTag >
    )
};

export default H;