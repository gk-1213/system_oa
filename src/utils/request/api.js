import {get,post,deleted,put} from './http'

// 登录
export function login(data) {
	return post("/im/login", data)
}

// 注册
export function register(data) {
	return post('/im/register',data)
}

// // websocket连接
// export function connect(data) {
// 	return request({
// 		url: '/im/client/' + data,
// 		method: 'get'
// 	})
// }

// // 获取会话
// export function getSessions() {
// 	return request({
// 		url: '/im/sessions',
// 		method: 'get'
// 	})
// }

// // 删除会话
// export function deleteSession(data) {
// 	return request({
// 		url: '/im/sessions',
// 		method: 'delete',
// 		data
// 	})
// }

// // 修改密码
// export function updatePasswd(data) {
// 	return request({
// 		url: '/im/passwd',
// 		method: 'post',
// 		data
// 	})
// }

// // 修改用户
// export function updateUser(data) {
// 	return request({
// 		url: '/im/user',
// 		method: 'put',
// 		data
// 	})
// }

// // 获取用户信息
// export function getUser() {
// 	return request({
// 		url: '/im/user',
// 		method: 'get'
// 	})
// }

// // 申请添加好友
// export function applyFriend(data) {
// 	return request({
// 		url: '/im/friend',
// 		method: 'post',
// 		data
// 	})
// }

// // 删除好友
// export function deleteFriend(data) {
// 	return request({
// 		url: '/im/friend',
// 		method: 'delete',
// 		data
// 	})
// }

// // 获取好友信息
// export function getFriend(data) {
// 	return request({
// 		url: '/im/friend',
// 		method: 'get',
// 		params: data
// 	})
// }

// // 获取好友列表
// export function getFriendList() {
// 	return request({
// 		url: '/im/friends',
// 		method: 'get'
// 	})
// }

// // 获取审批列表
// export function getApply(data) {
// 	return request({
// 		url: '/im/apply',
// 		method: 'get',
// 		params: data
// 	})
// }

// //审批申请
// export function applyCheck(data) {
// 	return request({
// 		url: '/im/apply',
// 		method: 'put',
// 		data
// 	})
// }

// // 创建群聊
// export function createGroup(data) {
// 	return request({
// 		url: '/im/group',
// 		method: 'post',
// 		data
// 	})
// }

// // 解散群聊
// export function deleteGroup(data) {
// 	return request({
// 		url: '/im/group',
// 		method: 'delete',
// 		data
// 	})
// }

// // 修改群聊
// export function updateGroup(data) {
// 	return request({
// 		url: '/im/group',
// 		method: 'put',
// 		data
// 	})
// }

// //获取群聊信息
// export function getGroup(data) {
// 	return request({
// 		url: '/im/group',
// 		method: 'get',
// 		params: data
// 	})
// }

// // 获取群列表
// export function getGroupList() {
// 	return request({
// 		url: '/im/groups',
// 		method: 'get'
// 	})
// }

// // 申请加入群聊
// export function applyGroup(data) {
// 	return request({
// 		url: '/im/group_in',
// 		method: 'post',
// 		data
// 	})
// }

// // 退出群聊
// export function outGroup(data) {
// 	return request({
// 		url: '/im/group_out',
// 		method: 'delete',
// 		data
// 	})
// }

// // 客户端注销
// export function clientOut(data) {
// 	return request({
// 		url: '/im/client_out',
// 		method: 'delete',
// 		data
// 	})
// }

// // 聊天
// export function messageHandle(data) {
// 	return request({
// 		url: '/im/chat',
// 		method: 'post',
// 		data
// 	})
// }

// // 获取与指定好友之间的消息
// export function getMessage(data) {
// 	return request({
// 		url: '/im/message',
// 		method: 'get',
// 		params: data
// 	})
// }

// // 获取指定群消息
// export function getGroupMessage(data) {
// 	return request({
// 		url: '/im/group_message',
// 		method: 'get',
// 		params: data
// 	})
// }

// // 清空收件箱
// export function clearReceive(data) {
// 	return request({
// 		url: '/im/clear',
// 		method: 'post',
// 		data
// 	})
// }
