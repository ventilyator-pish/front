import { http } from '@server/http';
import { urls } from '@server/urls';

import { createDomain } from 'effector';
import { GetProjectRequest, ProjectRequest } from "@src/utils/api/types/main";

const projectRequests = createDomain();

export const getStudentProjectRequests = projectRequests.createEffect(async (student_id: string) => {
    const res = await http.get<GetProjectRequest>(urls.invites(student_id));
    return res.data;
});
