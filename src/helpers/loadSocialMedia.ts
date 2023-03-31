import type { url } from '@/types/common/common';


export const fetchSocialMedia = async () => {
    const userToken = window.localStorage.getItem('user_token')?.replace(/['"]+/g, '')
    console.log(userToken);
    
    const url: url = 'https://sandbox.core.api.brandme.la/api/v1/accounts/profile/networks'
    const resp = await fetch(url, {
        headers: {
            Authentication: `Bearer ${userToken}`,
        }
    })
    console.log(resp);

}