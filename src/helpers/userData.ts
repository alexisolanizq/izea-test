import type { url, vanity } from "@/types/common/common"

export const fetchUserDataByVanityName = async (vanity: vanity) => {
    const url: url = `https://sandbox.core.api.brandme.la/api/v3/profile/${vanity}`

    const resp = await fetch(url)

    const {response} = await resp.json()

    if (!response?.user?.id) {
        return Promise.reject('El nombre de usuario es invalido')
    }

    return Promise.resolve(response.user.networks)
}