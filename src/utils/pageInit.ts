import { onMounted } from "vue"
import { useBarStore } from '@/store/modules/bar'

export function initPage(title: string, searchIcon: boolean, addMoreIcon: boolean, headGoBack: boolean, showHeader: boolean) {
    const barStore = useBarStore()
    onMounted(() => {
        barStore.title = title
        barStore.setSearch(searchIcon)
        barStore.setAddMore(addMoreIcon)
        barStore.setheadGoBack(headGoBack)
        barStore.setHeader(showHeader)
    })
}