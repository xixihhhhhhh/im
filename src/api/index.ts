import { request } from '@/utils'

/**
 * 注册接口
 */
export const enroll = (name, password) => request({ url: '/user/enroll', data: { name, password } })