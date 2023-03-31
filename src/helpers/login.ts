import type { url } from "@/types/common/common";
import type { login } from "@/types/common/login"
import { router } from '../router/index';

export const fetchLogin = async (bodyForm: login) => {
    const url: url = 'https://sandbox.core.api.brandme.la/api/v1/accounts/login/'
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(bodyForm)
    })

    const { response } = await resp.json()

    if (!response?.user?.id) {
        return Promise.reject(response.message)
    }
    window.localStorage.setItem('user', JSON.stringify(response.user))
    window.localStorage.setItem('user_token', JSON.stringify(response.access_token))
    router.push('/')
    return Promise.resolve(response.user);
}

export const logout = () => {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('user_token')
    router.push('/auth/login')
}