import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {GetProjects, Project} from "@src/utils/api/types/main";

const profileDomain = createDomain();

export const getProjects = profileDomain.createEffect(async () => {
    const res = await http.get<GetProjects>(urls.projects());
    return res.data.results;
});

export const $projects = profileDomain
    .createStore<Project[]>([])
    .on(getProjects.doneData, (_, payload) => payload);
