/// <reference types="vite/client" />

declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component

}

interface ImportMetaEnv {
    readonly VITE_TITLE: string
}

declare module "*.ts" {
    const component: DefineComponent<{}, {}, any>
    export default ts
}

declare module "*.js" {
    const component: DefineComponent<{}, {}, any>
    export default ts
}