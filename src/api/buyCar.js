import request from '@/JS/request2'

export function buyCar(apiRoute, data) {
    return request({
        url: apiRoute,
        method: 'get',
        params: data



    })
}
export function Carinfo(apiRoute) {
    return request({
        url: apiRoute,
        method: 'GET'

    })
}

//首页热门车型
export function homehot(apiRoute) {
    return request({
        url: apiRoute,
        method: 'GET'

    })
}

//首页活动
export function homeActivity(apiRoute) {
    return request({
        url: apiRoute,
        method: 'GET'

    })
}
//首页活动详情
export function homeActivityinfo(apiRoute) {
    return request({
        url: apiRoute,
        method: 'GET'

    })
}
//立即抢订
export function ljqd(apiRoute) {
    return request({
        url: apiRoute,
        method: 'GET'

    })
}