import { Children, useCallback, useEffect, useState } from "react";
import Indented from "../layout/indented";
import Embedded from "./Embedded";

function HTMLparser( props:{
    id:string,
    children:any
}) {
    const [data, setData] = useState({
        id:props.id,
        items: [] as HTMLElement[],
        DataisLoaded: false
    });

    const fetchData = () => {
        const container = document.createElement("div-container");
        container.innerHTML = props.children;
        const data = Array.from(container.childNodes) as HTMLElement[];
        setData({
            id:props.id,
            items: data,
            DataisLoaded: true
        });
    }

    if (!data.DataisLoaded && props.children) { fetchData() }
    if (data.id != props.id) { fetchData(); }

    const element = data.items.filter(item=>item.nodeName!=="#text").map(item=>{
        const typs = ["P", "OL", "UL", "PRE"]
        if (typs.indexOf(item.nodeName) >= 0) {
            //just parse it, we dont want to init super special text stuff
            return (
                <Indented>
                    <div dangerouslySetInnerHTML={{ __html: item.outerHTML }} />
                </Indented>
            )
        }
        else if (item.nodeName === "DIV") {
            if (item.classList.contains("wp-block-lazyblock-lazy-youtube")) {
                const url = item.querySelector("lazy-iframe")?.getAttribute("data-url");
                const start = item.querySelector("lazy-iframe")?.getAttribute("data-start");
                const end = item.querySelector("lazy-iframe")?.getAttribute("data-end");
                if (url) {
                    return (
                        <Embedded url={url} start={start||""} end={end||""}></Embedded>
                    )
                }
            }
            else {
                return (
                    <p>unbekannt</p>
                )
            }           
        }
        else {
            return (
                <p>nothing</p>
            )
        }
    });

    
    return (
        //<div className={ style.container } dangerouslySetInnerHTML={{ __html: props.children }} />
        <>
            {element}
        </>
    )
};

export default HTMLparser;