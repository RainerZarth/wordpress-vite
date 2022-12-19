import H from '../components/headline';
import Indented from '../layout/indented';
import { useState } from 'react';
import HTMLparser from './htmlParser';

function GetContent(props:{
    site:string
}) {
    let headline;
    let content;
    let id = "";
    const [nav, setNav] = useState({
        id: "",
        items: {link:"", title:{rendered:""}, content:{rendered:""}},
        DataisLoaded: false
    });

    const getData = (site:string) => {
        const pat = `http://localhost/wp-json/wp/v2/pages/${site}`;        
        fetch(pat)
                .then((res) => res.json())
                .then((json) => {
                    setNav({
                        id: site,
                        items: json,
                        DataisLoaded: true
                    });
                })
    };

    if (nav.id !== props.site) { getData(props.site)}

    if (nav.items) {
        headline=nav.items.title.rendered;
        content=nav.items.content.rendered;
        id=nav.id;
    }

    return (
        <>
            <Indented>
                <H size={1}>{headline}</H>
            </Indented>
            <HTMLparser id={id}>{content}</HTMLparser>
        </>
    )
};

export default GetContent;