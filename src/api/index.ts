import { request } from '@/utils'

type nors = number | string
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

/**
 * 查找好友接口
 */
export const findUserByName = (name: string) => request({
    url: '/user/find', method: 'post', data: { name }
})

/**
 * 添加通讯录接口
 */
export const addTxl = (user_id: nors, friend_id: nors, frined_name: string, user_name: string) => request({
    url: '/friend/add', method: 'post', data: { user_id, friend_id, frined_name, user_name }
})

/**
 * 查找通讯录好友接口
 */
export const findMyFriends = (user_id: nors) => request({
    url: '/friend/myFriend', method: 'post', data: { user_id }
})

/**
 * 查找好友聊天消息记录
 */
export const findFriendChatMsgList = (user_id: nors, toUser_id: nors) => request({
    url: '/chat/getMsgList', method: 'post', data: { user_id, toUser_id }
})