import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {GetStudents, Student} from "@src/utils/api/types/main";

const studentsDomain = createDomain();

export const getStudentsFx = studentsDomain.createEffect(async () => {
    const res = await http.get<GetStudents>(urls.students());
    console.log(res)
    return res.data;
});

export const $students = studentsDomain
    .createStore<Student[]>([])
    .on(getStudentsFx.doneData, (_, payload) => payload);
