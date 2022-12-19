import styles from "./Embedded.module.css"
import { useCallback, useState } from "react";

const Embedded = (props:{
    url:string,
    start:string,
    end:string
}) => {
    const [allowEmbeds, setAllowEmbeds] = useState({
        loaded:false,
        cookie:false
    });
    const eURL = new URL(props.url);
    let noCookie="";

    const convertTime = (time="") => {
        const timeArr:number[] = [];
        time.split(":\n").forEach(titem => {
            timeArr.push(parseInt(titem.trim()));
        });
        return toSeconds(timeArr[0], timeArr[1], timeArr[2])     
    };
    const toSeconds = ( hr=0, min=0, sec=0) => {
        return sec + min*60 + hr*3600;
    };

    const isAllowed = useCallback(() => {
        setAllowEmbeds({
            loaded:true,
            cookie:Boolean(window.localStorage.getItem("allowEmbeds"))
        });
    }, []);
    if (!allowEmbeds.loaded) { isAllowed()}
    const handleAllow = useCallback(() => {       
        window.localStorage.setItem("allowEmbeds", "true");
        setAllowEmbeds({
            loaded:true,
            cookie:true
        });
    }, []);
  
    switch (eURL.hostname) {
        case "www.youtube.com":
            const vId = eURL.search.split("?v=")[1]
            const starttime = convertTime(props.start) || "";
            const startQuery = starttime > 0 ? `?start=${starttime}`:"";
            const endtime = convertTime(props.end) || "";
            const endQuery = endtime > starttime ? `&end=${endtime}`:"";
            noCookie= `https://www.youtube-nocookie.com/embed/${vId}${startQuery}${endQuery}`;
            return (
                    allowEmbeds.cookie
                        ? ( <div className={styles.container}>
                                <iframe src={noCookie} allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; Fullscreen"}></iframe>
                            </div>
                        )
                        : ( <div className={styles.container}>
                                <div className={styles.disclaimer}>
                                    <p>Wir respektieren Ihre Privatsphäre.<br/>
                                    Dieses Element läd externe Inhalte von<br/>
                                    <strong>Youtube</strong>.<br/>
                                    Sind Sie damit einverstanden?<br/></p>
                                    <button onClick={handleAllow}>Einverstanden</button>
                                </div>
                            </div>
                        )
            )
        default:
            break;
    }
    return (<></>);
}
export default Embedded;