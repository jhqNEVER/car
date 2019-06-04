import request from '@/JS/request'
import requestdatacenter from '@/JS/request2'

// 检测预约
export function CarDetectionInsert(data) {
    return request({
        url: "/api/services/app/CarDetectionApiService/CarDetectionInsert",
        method: 'post',
        data
    })
}

// 卖车预约
export function PurchasingCluesInsert(data) {
    return request({
        url: "/api/services/app/WebApiService/PurchasingCluesInsert",
        method: 'post',
        data
    })
}

// 帮我找车、立即预约
export function InsertRetailTrack(data) {
    return request({
        url: "/api/services/app/WebApiService/InsertRetailTrack",
        method: 'post',
        data
    })
}

// 用户收藏
export function CarCollectionInsert(data) {
    return request({
        url: "/api/services/app/CarCollectionApiService/CarCollectionInsert",
        method: 'post',
        data
    })
}

// 用户取消收藏
export function CarCollectionClear(data) {
    return request({
        url: "/api/services/app/CarCollectionApiService/CarCollectionClear",
        method: 'post',
        data
    })
}

// 获取用户基本信息
export function GetUserInfo(data) {
    return request({
        url: "/api/services/app/WeChatUser/GetUserInfo",
        method: 'get',
        params: data
    })
}

// 获取收藏车辆列表
export function GetUserCarCollectionList(data) {
    return requestdatacenter({
        url: "/api/CarApiService/GetUserCarCollectionList",
        method: 'get',
        params: data
    })
}

// 获取我的可用洗车券
export function GetCarWashingTicketList(data) {
    return request({
        url: "/api/services/app/CarWashingTicket/GetCarWashingTicketList",
        method: 'get',
        params: data
    })
}

// 更改用户信息
export function UpdateWeChatInfo(data) {
    return request({
        url: "/api/services/app/WeChatUser/UpdateWeChatInfo",
        method: 'put',
        data
    })
}

// 以旧密码更新密码
export function UpdataUserPwdOld(data) {
    return request({
        url: "/api/services/app/WeChatUser/UpdataUserPwdOld",
        method: 'post',
        data
    })
}