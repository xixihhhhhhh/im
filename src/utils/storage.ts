export function setStorageItem(k: string, v: string) {
    if (typeof (v) == "undefined" || v == null) {
        return;
    }
    let val = v;
    if (typeof (v) == "object") {
        val = JSON.stringify(v);
    }
    localStorage.setItem(k, val)
}

export function getStorageItem(k: any) {
    let val = localStorage.getItem(k);
    try {
        //如果是number boolean jsonstring是不会报错的
        return JSON.parse(val as string);
    } catch (e) {
        return val;
    }
}
export function getToken() {
    return getStorageItem("token");
}

export function cleanStorageItem(k: string) {
    localStorage.removeItem(k);
}

