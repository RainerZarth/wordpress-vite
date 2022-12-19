import styles from './icon.module.css'

function Icon(props:{
    src:string,
    onClick?:any,
    className?:string
}) {
    const svgicon = `url("${props.src}")`;
    
    return (
        <div onClick={ props.onClick } style={{
                    WebkitMaskImage: svgicon,
                    maskImage: svgicon,
                }} 
                className={ styles.icon + " " + props.className } >
        </div>
    )
};

export default Icon;