import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import {Student} from "@src/utils/api/types/main";

const studentByIdDomain = createDomain();

export const getStudentByIdFx = studentByIdDomain.createEffect(async (id: string) => {
    const res = await http.get<Student>(urls.studentById(id));
    console.log(res)
    return res.data;
});

export const $studentById = studentByIdDomain
    .createStore<Student | null>(null)
    .on(getStudentByIdFx.doneData, (_, payload) => payload);
