export function hasParent(dom: HTMLElement | null, parentDom: HTMLElement | HTMLElement[]): boolean {
    parentDom = Array.isArray(parentDom) ? parentDom : [parentDom];
    while (dom) {
        if (parentDom.find((p) => p === dom)) {
            return true;
        } else {
            dom = dom.parentNode as HTMLElement | null;
        }
    }
    return false;
}

export function scrollInto(dom: HTMLElement) {
    dom.scrollIntoView({ behavior: "smooth" })
}