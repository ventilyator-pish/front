import { http } from '@server/http';
import { urls } from '@server/urls';
import { createDomain } from 'effector';
import {Company} from "@src/utils/api/types/main";

const companyDomain = createDomain();

export const getCompanyByIdFx = companyDomain.createEffect(async (id: string) => {
  const res = await http.get<Company>(urls.companyById(id));
  return res.data;
});

export const $company = companyDomain
  .createStore<Company | null>(null)
  .on(getCompanyByIdFx.doneData, (_, payload) => payload);
