import { http } from '@server/http';
import { urls } from '@server/urls';

import { CreateJWTProps } from '@lib/types/auth/authTypes';

import { createDomain } from 'effector';

export const LOCAL_TOKEN_KEY = 'token';

const authDomain = createDomain();

export const creatAuthTokenAndSaveLocalFx = authDomain.createEffect(
    async (params: CreateJWTProps) => {
        const res = await http.post<{ auth_token: string }>(urls.authLogin(), params);
        const token = res.data.auth_token;
        localStorage.setItem(LOCAL_TOKEN_KEY, token);
        return token;
    },
);

export const checkLocalAuth = authDomain.createEffect(() => {
    const token = localStorage.getItem(LOCAL_TOKEN_KEY);
    return !!token;
});

export const logoutAndRemoveLocalToken = authDomain.createEffect(async () => {
    await http.post(urls.authLogout());
    localStorage.removeItem(LOCAL_TOKEN_KEY);
});

export const $isAuth = authDomain
    .createStore(false)
    .on(checkLocalAuth.doneData, (_, payload) => payload)
    .on(creatAuthTokenAndSaveLocalFx.doneData, () => true)
    .on(logoutAndRemoveLocalToken.doneData, () => false);
