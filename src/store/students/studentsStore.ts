import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {GetStudents, Student} from "@src/utils/api/types/main";

const profileDomain = createDomain();

export const getStudents = profileDomain.createEffect(async () => {
    const res = await http.get<GetStudents>(urls.students());
    return res.data.results;
});

export const $students = profileDomain
    .createStore<Student[]>([])
    .on(getStudents.doneData, (_, payload) => payload);
