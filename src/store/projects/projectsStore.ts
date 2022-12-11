import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {GetProjects, Project} from "@src/utils/api/types/main";

const projectDoamin = createDomain();

export const getProjects = projectDoamin.createEffect(async () => {
    const res = await http.get<GetProjects>(urls.projects());
    return res.data;
});

export const $projects = projectDoamin
    .createStore<Project[]>([])
    .on(getProjects.doneData, (_, payload) => payload);
