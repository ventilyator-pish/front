import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {GetStudents, Student} from "@src/utils/api/types/main";

const studentsDomain = createDomain();

export const getStudentsFx = studentsDomain.createEffect(async () => {
    const res = await http.get<GetStudents>(urls.students());
    return res.data;
});

export const getRelatedStudents = studentsDomain.createEffect(async (tags: string) => {
    const res = await http.get<GetStudents>(urls.filterStudents(tags))
    return res.data;
})

export const $students = studentsDomain
    .createStore<Student[]>([])
    .on(getStudentsFx.doneData, (_, payload) => payload);
