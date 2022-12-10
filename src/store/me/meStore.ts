import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {User} from "@src/utils/api/types/main";

const meDomain = createDomain();

export const getMeFx = meDomain.createEffect(async () => {
  const res = await http.get<User>(urls.me());
  console.log(res)
  return res.data;
});

export const $me = meDomain
  .createStore<User | null>(null)
  .on(getMeFx.doneData, (_, payload) => payload);
