const embeddedAllowed = (allowed:boolean) => {
    if (allowed) {
        localStorage.setItem('embeddedAllowed', "true");
    } else {
        localStorage.removeIten('embeddedAllowed');
    }
}

const isEmbeddedAllowed = () => Boolean(localStorage.getItem("embeddedAllowed"));

const LazyIframe = (content:any) => {
    const allIframes = Array.from(content.querySelectorAll("lazy-iframe")) as HTMLElement[];
    allIframes.forEach(iframe=>{
        iframe.classList.add("cool");
        const isEA = isEmbeddedAllowed();
        console.log(isEA);
        
        if (!isEmbeddedAllowed()) {
            const aSwitch = document.createElement("label") as HTMLLabelElement;
            aSwitch.classList.add("switch");
            aSwitch.innerHTML = `
            Erlaube Einbetten von externen Inhalten
            <input type="checkbox"><span class="slider round" />`;
            const input = aSwitch.querySelector("input") as HTMLInputElement;
            iframe.addEventListener("click", e=>{
                console.log("click");
                }
            );
            if (!aSwitch) { return;}
            iframe.appendChild(aSwitch);
            
            



        }

    })
};

const onStart = (content:any) => {
    console.log("loaded");
    const allIframes = Array.from(content.querySelectorAll(".wp-block-lazyblock-lazy-youtube")) as HTMLElement[];
    allIframes.forEach(iframe=>{

        iframe.style.width = "200px"
        iframe.style.height = "200px"
        iframe.addEventListener("click",  ()=>{           
            console.log("test");
            
        });
    });
    //LazyIframe(content);
}

export default onStart;