import styles from './button.module.css'

function Button({
    children
}) {
    const CustomTag  = `h${size}` as keyof JSX.IntrinsicElements;
    const art = styles[`h${size}`];
    return (
        <CustomTag className={ styles.headline + " " + art } >
            { children }
        </CustomTag >
    )
};

export default Button;