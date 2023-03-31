import type { url } from '@/types/common/common';


export const fetchSocialMedia = async () => {
    const userToken = window.localStorage.getItem('user_token')?.replace(/['"]+/g, '')
    console.log(userToken);

    const url: url = 'https://sandbox.core.api.brandme.la/api/v1/accounts/profile/networks'
    const resp = await fetch(url, {
        headers: {
            'Access-Control-Allow-Origin': 'https://izea-test-custom.vercel.app/',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
            Authentication: `Bearer ${userToken}`,
        }
    })
    console.log(resp);

}