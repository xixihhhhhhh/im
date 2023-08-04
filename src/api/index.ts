import { request } from '@/utils'

/**
 * 注册接口
 */
export const enroll = (name: string, password: string) => request({
    url: '/user/enroll', method: 'POST', data: {
        name, password,
        avatarUrl: "https://gitee.com/jackfs/PictureStore/raw/master/RemoteCall/people.jpg"
    }
})

/**
 * 登录接口
 */
export const login = (name: string, password: string) => request({
    url: '/user/login', method: 'POST', data: { name, password }
})