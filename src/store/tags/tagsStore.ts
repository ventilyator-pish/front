import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {GetStudents, Student, Tag} from "@src/utils/api/types/main";

const tagsDomain = createDomain();

export const getTagsFx = tagsDomain.createEffect(async (keyword: string) => {
    const res = await http.get<Tag[]>(urls.tags(keyword));
    console.log(res)
    return res.data;
});

export const $tags = tagsDomain
    .createStore<Tag[]>([])
    .on(getTagsFx.doneData, (_, payload) => payload);
