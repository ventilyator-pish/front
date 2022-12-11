import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import { CrowdFounding } from "@src/utils/api/types/main";

const crownFoundingDomain = createDomain();

export const getCrownFoundings = crownFoundingDomain.createEffect(async () => {
  const res = await http.get<CrowdFounding[]>(urls.crowdfounding());
  return res.data;
});
