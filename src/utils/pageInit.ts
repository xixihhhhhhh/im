import { onMounted } from "vue"
import { useBarStore } from '@/store/modules/bar'

type pageObj = {
    title: string,
    searchIcon?: boolean,
    addMoreIcon?: boolean,
    headGoBack?: boolean,
    showHeader?: boolean,
    showSaveBtn?: boolean
}
export function initPage(pageObj: pageObj) {
    const barStore = useBarStore()
    onMounted(() => {
        barStore.title = pageObj.title || ''
        barStore.setSearch(!!pageObj.searchIcon)
        barStore.setAddMore(!!pageObj.addMoreIcon)
        barStore.setheadGoBack(!!pageObj.headGoBack)
        barStore.setHeader(!!pageObj.showHeader)
        barStore.setshowSaveBtn(!!pageObj.showSaveBtn)
    })
}