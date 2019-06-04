import request from '@/JS/request'
export function getTest(apiRoute) {
    return request({
        url: apiRoute,
        method: 'get'
    })
}
//品牌名称
export function carBrand(apiRoute) {
    return request({
        url: apiRoute,
        method: 'POST'


    })
}
//品牌列表接口（a,b,c区分）
export function brandABC(apiRoute) {
    return request({
        url: apiRoute,
        method: 'POST'

    })
}
//车系名称
export function BrandSystem(apiRoute, data) {
    return request({
        url: apiRoute,
        method: 'GET',
        data: data


    })
}


//用户注册
export function userRegistration(apiRoute, data) {
    return request({
        url: apiRoute,
        method: 'POST',
        data: data


    })
}

//判断用户注册时填写的登录名和密码有没有存在
export function hasRegistration(apiRoute, data) {
    return request({
        url: apiRoute,
        method: 'GET',
        data: data


    })
}


//用户密码登陆
export function userpwdlogin(apiRoute, data) {
    return request({
        url: apiRoute,
        method: 'POST',
        data: data


    })
}

//用户短信登陆
export function usermesslogin(apiRoute, data) {
    return request({
        url: apiRoute,
        method: 'POST',
        data: data


    })
}

//短信更改密码
export function updatamessage(apiRoute, data) {
    return request({
        url: apiRoute,
        method: 'GET',
        data: data


    })
}
//更改密码（传输新密码给后台）
export function newpwd(apiRoute, data) {
    return request({
        url: apiRoute,
        method: 'PUT',
        data: data


    })
}
