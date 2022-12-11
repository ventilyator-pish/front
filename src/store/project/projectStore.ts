import { http } from '@server/http';
import { urls } from '@server/urls';
import { createDomain } from 'effector';
import {Project} from "@src/utils/api/types/main";

const singleProjectDomain = createDomain();

export const getProjectFx = singleProjectDomain.createEffect(async (id: string) => {
  const res = await http.get<Project>(urls.projectById(id));
  return res.data;
});

export const $project = singleProjectDomain
  .createStore<Project | null>(null)
  .on(getProjectFx.doneData, (_, payload) => payload);
