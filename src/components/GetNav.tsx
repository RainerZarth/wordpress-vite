import { useState } from 'react';

function GetNav() {
    const [nav, setNav] = useState({
        items: [{id:"", title:{rendered:""}}],
        DataisLoaded: false
    });
    const getData = () => {
        fetch("http://localhost/wp-json/wp/v2/pages?_fields=title,id")
                .then((res) =>res.json())
                .then((json) => {
                    setNav({
                        items: json,
                        DataisLoaded: true
                    });
                })
    };
    if (!nav.DataisLoaded) {
        getData()
    } else {        
        const navItems= new Array;
        nav.items.forEach(item =>{
            if (!item) { return;}
            const title = item.title.rendered;
            navItems.push({title: title, id:item.id});
        })
        return navItems.reverse();
    }
};

export default GetNav;