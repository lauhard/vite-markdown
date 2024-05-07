export let getMetaInfo = async () => {
    const mdfiles = import.meta.glob("/src/lib/*.md");
    const mdfilesIterable = Object.entries(mdfiles) as [
        string,
        () => Promise<{ metadata: any }>
    ][];
    const metadata = await Promise.all(
        mdfilesIterable.map(async (_glob) => {
            const [path, resolve] = _glob;
            const content: any = await resolve();
            const meta = content;
            return meta;
        })
    );
    return metadata;
};

export const findElement = (
    element: any,
    name: string
): HTMLElement | false => {
    if (element?.nodeName.toLocaleUpperCase() === "BODY") return false;
    const t: string = name.charAt(0);
    const _name: string = name.substring(1);
    let xtag: any = undefined;
    console.log(element);

    const childNodes = Object.values(element.childNodes);
    console.log(childNodes);
    if (t === ".")
        xtag = childNodes.find((cn: any) => cn?.className?.includes(_name));
    if (t === "#") xtag = childNodes.find((cn: any) => cn?.id?.includes(_name));
    console.log(xtag);

    if (xtag === undefined) {
        const parentElement = element.parentElement;
        return findElement(parentElement, name);
    } else {
        return xtag;
    }
};

export const copy2ClipBoard = async (event: Event): Promise<void> => {
    if (event) {
        let target:any = event.target ;
        if (target.tagName === "I") {
            target = target.parentElement;
        }
        if (target.tagName === "BUTTON") {
            target = target.parentElement;
        }
        let code = target.nextElementSibling.children[0].textContent;
        console.info("copy-info:\n", code);
        // copy the text to the clipboard
        navigator.clipboard.writeText(code);
    } else {
        console.info("[clipboard]: tag not found ", "");
    }
};

export const smoothScroll2Anchor = () => {
    let heading = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (let i = 0; i < heading.length; i++) {
        let id = heading[i].textContent
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
        heading[i].setAttribute("id", id);
        heading[i].scrollIntoView({
            behavior: "smooth",
        });
    }
};


export const insertSVG = async (parent: HTMLElement, file:string, fill:string) => {
    const response = await fetch(file);

    if(!response.ok || response.status !== 200 ) return;

    let svgText = await response.text();
    if(svgText){
        parent.innerHTML=svgText;
        const svgDoc = parent.querySelector('svg');
        svgDoc.setAttribute('width','60')
        svgDoc.setAttribute('height','60')
        const path = parent.querySelector('path');
        path.style.fill = `var(${fill})`;
    }
}
    
